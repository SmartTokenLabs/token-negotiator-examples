require( 'dotenv' ).config({ path: './.env' });

//	Dependencies
const path = require( 'path' );

//	App
const PKG = require( './package.json' );


//
//	TokenScript / Next.js Config
//


const CWD = process.cwd();
const ROOT = path.resolve( CWD, 'src' );
const { NODE_ENV } = process.env;


module.exports = phase => {

	const env = {
		APP_NAME: PKG.name,
		APP_ENV: NODE_ENV,
		APP_VERSION: PKG.version,
	};

	return {
		reactStrictMode: true,
		env,
		webpack: ( config, options ) => {
			config.resolve.modules = [
				'node_modules',
				ROOT,
			];
			return config;
		},
		sassOptions: {
			includePaths: [ path.join( ROOT, 'src' ) ],
			prependData: `$env: ${ NODE_ENV };`,
		},
		eslint: {
			ignoreDuringBuilds: true,
		},
	};
};
