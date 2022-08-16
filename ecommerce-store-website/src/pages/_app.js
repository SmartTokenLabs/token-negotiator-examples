
//	Dependencies
import PropTypes from 'prop-types';
import { useEffect }  from "react";

//	App
import { useStore } from 'base/state';
import { Layout as DefaultLayout, Context } from 'ui/app';

import { updateNegotiatorIssuers } from './../base/negotiator-client';

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

	const rinkebyIssuers = [
		{
			collectionID: 'stl-bayc',
			onChain: true,
			contract: '0x3d8a0fB32b0F586FdC10447c22F477979dc526ec',
			chain: 'rinkeby',
			openSeaSlug: undefined
		},
		{
			collectionID: 'stl-wow',
			onChain: true,
			contract: '0xf0dDde481a5F3DaF2A5665F88D5767CB0732b638',
			chain: 'rinkeby',
			openSeaSlug: undefined
		},
		{
			collectionID: 'stl-riot-racer',
			onChain: true,
			contract: '0x399653F4212bf3EA3AF9bCE45a294AB462f22436',
			chain: 'rinkeby',
			openSeaSlug: undefined
		}
	]
	
	const mumbaiIssuers = [
		{
			collectionID: 'stl-bayc',
			onChain: true,
			contract: '0x594CeCc147F8F27fF6d269AE23D9a0Ff27d979F4',
			chain: 'mumbai',
			openSeaSlug: undefined
		},
		{
			collectionID: 'stl-wow',
			onChain: true,
			contract: '0xa432AC92c386b9929Bd9308C4e98505ac22d3A00',
			chain: 'mumbai',
			openSeaSlug: undefined
		},
		{
			collectionID: 'stl-riot-racer',
			onChain: true,
			contract: '0x165B81C550263f6E9AC9B1852D6A8bAC9538E6d7',
			chain: 'mumbai',
			openSeaSlug: undefined
		}
	]
	
	const goerliIssuers = [
		{
			collectionID: 'stl-bayc',
			onChain: true,
			contract: '0xc361201E5B1005cCDE47B32F223BC145DE393F62',
			chain: 'goerli',
			openSeaSlug: undefined
		},
		{
			collectionID: 'stl-wow',
			onChain: true,
			contract: '0x87644E0A1287A4D96DecC29A13400a1be9759AF8',
			chain: 'goerli',
			openSeaSlug: undefined
		},
		{
			collectionID: 'stl-riot-racer',
			onChain: true,
			contract: '0xae96095fF42B0Cae2DaD3d49E5EE11663280d819',
			chain: 'goerli',
			openSeaSlug: undefined
		}
	]

	const resetIssuers = (networkId) => {
		const normalisedNetworkId = Number(networkId.replace('0x', ''));
		if(normalisedNetworkId === 4) { // Rinkeby
			console.log('load rinkeby issuers');
			negotiator.issuers = rinkebyIssuers;
		}
		if(normalisedNetworkId === 5) { // Goerli
			console.log('load goerli issuers');
			negotiator.issuers = goerliIssuers;
		}
		if(normalisedNetworkId === 13881) { // Mumbai
			console.log('load mumbai issuers');
			negotiator.issuers = mumbaiIssuers;
		}
	}

	let currentIssuers = goerliIssuers;

	useEffect(()=> {

		const init = async () => {

			const { Client } = (await import("@tokenscript/token-negotiator"));
			
			window.negotiator = new Client({
				type: 'active',
				issuers: [
					...currentIssuers
				],
				uiOptions: {
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

			api.setTokenNegotiatorInstance( window.negotiator );
			api.setIsNegotiatorReady( true );

			if(ethereum) {
				ethereum.on('networkChanged', function(networkId){
					resetIssuers(networkId);
					negotiator.negotiate();
				});
				resetIssuers(ethereum.chainId);
				negotiator.negotiate();
			}
			
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
