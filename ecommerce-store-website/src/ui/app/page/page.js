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

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

export default forwardRef( Page );

function Page({ children, meta = {}, className }, ref) {
	const router = useRouter();
	const currentSlug = router.asPath;

	const siteUrl = process.env.APP_HOST || '';

	const defaultTitle = 'Brand Connector Demo';
	const defaultDescription = 'Brand Connector is a simple website tool that lets any brand customise content, offers or rewards to any NFTs in any user wallet.';

	const pageMeta = {
		title: defaultTitle,
		description: defaultDescription,
		ogTitle: meta?.title || defaultTitle,
		ogDescription: meta?.description || defaultDescription,
		ogUrl: currentSlug !== '/' ? siteUrl + currentSlug : siteUrl,
		ogImage: 'https://brandconnector.io/og-brand-connector.jpg',
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

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:domain" content="https://brandconnector.io/demo/" />
				<meta name="twitter:description" content={pageMeta?.description} />
				<meta name="twitter:site" content="@TokenScript" />
				<meta name="twitter:url" content="https://brandconnector.io/demo/" />
				<meta name="twitter:title" content="Brand Connector Demo" />
				<meta name="twitter:image" content="https://brandconnector.io/og-brand-connector.jpg" />
				<meta name="twitter:creator" content="@TokenScript" />

				<link rel="icon" type="image/png" sizes="32x32" href={ basePath + "/favicon-32x32.png" } />
				<link rel="icon" type="image/png" sizes="16x16" href={ basePath + "/favicon-16x16.png" } />
				<link rel="icon" href={ basePath + "/favicon.ico"} />

				<style dangerouslySetInnerHTML={{__html: `
					@font-face {
					  font-family: 'neueplak';
					  font-style: normal;
					  font-weight: 700;
					  src: url('${basePath + "/fonts/neue-plak-extended-sb.woff2"}') format('woff2');
					  font-display: swap;
					}
				`}}/>
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
