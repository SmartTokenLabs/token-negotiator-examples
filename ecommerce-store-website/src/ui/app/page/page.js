//	Dependencies
import React, { forwardRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Styles
import styles from "./page.module.scss";


//
//	Brand Connector Demo / UI / App / Page
//


export default forwardRef( Page );

function Page({ children, meta = {}, className }, ref) {
	const router = useRouter();
	const currentSlug = router.asPath;

	const siteUrl = process.env.APP_HOST || '';

	const defaultTitle = 'Brand Connector Demo';
	const defaultDescription = '';

	const pageMeta = {
		title: defaultTitle,
		description: defaultDescription,
		ogTitle: meta?.title || defaultTitle,
		ogDescription: meta?.description || defaultDescription,
		ogUrl: currentSlug !== '/' ? siteUrl + currentSlug : siteUrl,
		// ogImage: `${ siteUrl }/`,
		ogSiteName: 'Brand Connector Demo',
		ogType: 'website',
		...meta,
	};

	return (
		<div ref={ ref } className={ clsx( styles[ 'a-view' ], className ) }>
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
