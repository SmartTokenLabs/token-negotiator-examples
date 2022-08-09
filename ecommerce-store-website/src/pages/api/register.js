
const corsMiddleware = require( 'cors' );
const yup = require( 'yup' );

const mcAuth = Buffer.from( `x:${ process.env.MC_API_KEY }` ).toString( 'base64' );

const ALLOWED_ORIGINS = [
	process.env.APP_HOST,
];

const cors = corsMiddleware({
	origin: ALLOWED_ORIGINS,
	methods: [ 'HEAD', 'POST' ],
});

function apiError( code, errorMessage ) {
	return error => {
		if ( !error ) error = new Error();
		error.code = code || error.code;
		error.message = errorMessage || error.message || 'Something went wrong';
		console.log( error );
		throw error;
	};
}

function sendError( res, status, errorMessage ) {
	return error => {
		const code = status || error.code || 500;
		const message = errorMessage || error.message;
		res.status( code ).json({
			message,
			type: 'error',
			error,
		});
	};
}

function runMiddleware( req, res, fn ) {
	return new Promise( ( resolve, reject ) => {
		fn( req, res, ( result ) => {
			if ( result instanceof Error ) {
				return reject( result );
			}
			return resolve( result );
		});
	});
}

const registerSchema = yup.object({
	'name': yup.string(),
	'email': yup.string().email().required(),
});

export default async function handler( req, res ) {
	try {
		await runMiddleware( req, res, cors );
		res.setHeader( 'Content-Type', 'application/json' );

		if ( !process.env.MC_API_URL ) {
			throw new Error( 'Missing env MC_API_URL' );
		}

		if ( !process.env.MC_API_KEY ) {
			return { statusCode: 401, body: 'Missing env MC_API_KEY' };
		}

		if ( req.method !== 'POST' ) {
			throw new Error( 'Method Not Allowed' );
		}

		const { name, email } = await registerSchema.validate( req.body, {
			stripUnknown: true,
		});

		const mcPayload = {
			email_address: email,
			status: 'subscribed',
			merge_fields: { FNAME: name }
		};

		const apiUrl = `${ process.env.MC_API_URL }lists/${ process.env.MC_LIST_ID }/members`;
		const cmRes = await fetch( apiUrl, {
			headers: {
				'Authorization': `Basic ${ mcAuth }`,
				'Content-Type': `application/json`,
				'Accept': `application/json`,
			},
			method: 'POST',
			body: JSON.stringify( mcPayload ),
		}).then( r => r.json() );

		if ( cmRes?.status !== 'subscribed' ) {
			const statusCode = typeof cmRes?.status === 'number' ? cmRes?.status : 500;
			const statusMessage = typeof cmRes?.title === 'string' ? cmRes?.title : 'Something went wrong, please try again soon.';
			apiError( statusCode, statusMessage )();
		}

		res.status( 200 ).json({ message: 'success' });
	} catch ( error ) {
		sendError( res )( error );
	}
}
