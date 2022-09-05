require( 'dotenv' ).config({ path: './.env' });

//	Dependencies
const path = require( 'path' );

//	App
const PKG = require( './package.json' );


//
//	Brand Connector Demo / Next.js Config
//


const CWD = process.cwd();
const ROOT = path.resolve( CWD, 'src' );
const { NODE_ENV } = process.env;


module.exports = phase => {

	const env = {
		APP_NAME: PKG.name,
		APP_ENV: NODE_ENV,
		APP_VERSION: PKG.version,
		APP_HOST: process.env.APP_HOST ?? process.env.VERCEL_URL,
		BASE_PATH: process.env.BASE_PATH,
	};

	const basePath = process.env.BASE_PATH ?? "";

	return {
		images: {
			loader: 'custom'
		},
		trailingSlash: true,
		reactStrictMode: true,
		assetPrefix: basePath,
		baseUrl: basePath,
		env,
		webpack: ( config, { webpack }) => {
			config.resolve.modules = [
				'node_modules',
				ROOT,
			];

			config.plugins.push(new webpack.IgnorePlugin({
				resourceRegExp: /^electron$/
			}),);

			return config;
		},
		sassOptions: {
			includePaths: [ path.join( ROOT, 'src' ) ],
			prependData: `$env: ${ NODE_ENV };`,
		},
		eslint: {
			ignoreDuringBuilds: true,
		},
		basePath: env.BASE_PATH,
		publicRuntimeConfig: {
			basePath: env.BASE_PATH || ''
		}
	};
};
