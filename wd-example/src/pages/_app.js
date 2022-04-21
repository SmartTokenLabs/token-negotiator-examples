
//	Dependencies
import PropTypes from 'prop-types';
import Head from 'next/head';

//	App
import { useStore } from 'base/state';
import { Layout as DefaultLayout } from 'ui/app';
import Menu from 'ui/app/menu';
import { useEffect }  from "react";

//	Styles
import 'styles/index.scss';

import "@tokenscript/token-negotiator/dist/theme/style.css"

export default function App({ Component, pageProps }) {

	const Layout = Component.Layout ?? DefaultLayout;
	const api = useStore( s => s.api );

	useEffect(()=> {

		const init = async () => {

			const { Client } = (await import("@tokenscript/token-negotiator"));

			window.negotiator = new Client({
				type: 'active',
				issuers: [
					{
						collectionID: 'rinkeby-punk',
						contract: '0x6d3495B5d83f6479Ab3023784f52B11AC3794e2F',
						chain: 'rinkeby',
						openSeaSlug: 'rinkeby-punk'
					},
					{
						collectionID: 'women-tribe',
						contract: '0xDbaCB1C25d849321727534C1BB2bbd962272eB13',
						chain: 'rinkeby',
						openSeaSlug: 'stl-rnd-women-tribe-nfts'
					},
					{
						collectionID: 'zed',
						contract: '0x8E3De6062c7041d483Cc1BE2654728f6956F7965',
						chain: 'rinkeby',
						openSeaSlug: 'stl-rnd-zed'
					},
					{
						collectionID: 'stl-rnd-bayc-derivatives',
						contract: '0x80A679106f24684BB4c92828ACce5e92d2AfFcad',
						chain: 'rinkeby',
						openSeaSlug: 'stl-rnd-bayc-derivatives'
					},

					{
						collectionID: 'stl-rnd-riot-racers',
						contract: '0x399653F4212bf3EA3AF9bCE45a294AB462f22436',
						chain: 'rinkeby',
						openSeaSlug: 'stl-rnd-riot-racers'
					}
				],
				options: {
					overlay: {
						openingHeading: "Open a new world of discounts available with your tokens.",
						issuerHeading: "Get discount with Ticket",
						repeatAction: "try again",
						theme: "light",
						position: "bottom-right"
					},
					filters: {},
				}
			});

			window.negotiator.negotiate();

			window.negotiator.on("tokens-selected", (data) => {
				api.setSelectedTokens({...data.selectedTokens});
			});
		};

		if (document.getElementsByClassName("overlay-tn")[0].childElementCount === 0)
			init();
	});

	return (
		<>
			<Layout pageProps={ pageProps }>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;800&family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet" />
				</Head>
				<Component { ...pageProps } />
			</Layout>
			<Menu.Region onClose={ () => api.closeMenuView() } />
			<div className="overlay-tn"/>
		</>
	);
};

App.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object,
};