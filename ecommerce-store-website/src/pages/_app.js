
//	Dependencies
import PropTypes from 'prop-types';
import { useEffect }  from "react";

//	App
import { useStore } from 'base/state';
import { Layout as DefaultLayout, Context } from 'ui/app';

import ContextRegisterThanks from 'ui/app/context/context-register-thanks';

//	Styles
import 'styles/index.scss';
import "./ui/styles/_app.scss";
import "@tokenscript/token-negotiator/dist/theme/style.css";


const CONTEXT_VIEWS = {
	'register-thanks': {
		c: ContextRegisterThanks,
	},
}

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
						collectionID: 'stl-bayc',
						onChain: true,
						contract: '0x3d8a0fB32b0F586FdC10447c22F477979dc526ec',
						chain: 'rinkeby',
						openSeaSlug: 'stl-bayc'
					},
					{
						collectionID: 'world-of-women',
						onChain: true,
						contract: '0xDbaCB1C25d849321727534C1BB2bbd962272eB13',
						chain: 'rinkeby',
						openSeaSlug: 'stl-woman-tribe-nfts-v2'
					},
					{
						collectionID: 'stl-rnd-riot-racers',
						onChain: true,
						contract: '0x399653F4212bf3EA3AF9bCE45a294AB462f22436',
						chain: 'rinkeby',
						openSeaSlug: 'stl-riot-racers-nfts-v3'
					}
				],
				options: {
					overlay: {
						openingHeading: "Open a new world of discounts available with your tokens.",
						issuerHeading: "Get discounts with tokens",
						repeatAction: "try again",
						position: "bottom-right"
					},
					filters: {},
				},
				ipfsBaseUrl: "https://smart-token-labs-demo-server.mypinata.cloud/ipfs/"
			});

			window.negotiator.on("tokens-selected", (data) => {
				api.setSelectedTokens({...data.selectedTokens});
			});

			window.negotiator.negotiate().then( () =>
				api.setIsNegotiatorReady( true )
			).catch( ( error ) =>{
				console.log( `Error: ${error}` );
			});
		};

		if (document.getElementsByClassName("overlay-tn")[0].childElementCount === 0)
			init();
	});

	return (
		<>
			<Layout pageProps={ pageProps }>
				<Component { ...pageProps } />
			</Layout>
			<Context.Region onClose={ () => api.setContextView() } views={ CONTEXT_VIEWS } />
			<div className="overlay-tn" />
		</>
	);
};




App.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object,
};
