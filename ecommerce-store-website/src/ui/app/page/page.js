//	Dependencies
import { forwardRef } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import clsx from 'clsx';


//
//	TokenScript / UI / App / Page
//


export default forwardRef( Page );

function Page({ children, meta = {}, className }, ref ) {

	const siteUrl = process.env.APP_HOST || '';

	const pageMeta = {
		title: 'TokenScript',
		ogTitle: 'TokenScript',
		description: '',
		ogDescription: '',
		ogUrl: siteUrl,
		// ogImage: `${ siteUrl }/`,
		ogSiteName: 'TokenScript',
		ogType: 'website',
		...meta,
	};

	return (
		<div ref={ ref } className={ clsx( 'a-view', className ) }>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />

				{ pageMeta?.title && <title>{ pageMeta?.title }</title> }
				{ pageMeta?.description && <meta name="description" content={ pageMeta?.description } /> }

				{ pageMeta?.ogUrl && <meta property="og:url" content={ pageMeta?.ogUrl } /> }
				{ pageMeta?.ogTitle && <meta property="og:title" content={ pageMeta?.ogTitle } /> }
				{ pageMeta?.ogDescription && <meta property="og:description" content={ pageMeta?.ogDescription} /> }
				{ pageMeta?.ogImage && <meta property="og:image" content={ pageMeta?.ogImage } /> }
				{ pageMeta?.ogSiteName && <meta property="og:site_name" content={ pageMeta?.ogSiteName } /> }
				{ pageMeta?.ogType && <meta property="og:type" content={ pageMeta?.ogType } /> }

				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{ children }
		</div>
	);
}

Page.propTypes = {
	children: PropTypes.node,
	meta: PropTypes.object,
	className: PropTypes.string,
};
