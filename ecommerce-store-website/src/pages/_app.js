
//	Dependencies
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

//	App
import { useStore } from 'base/state';
import { Layout as DefaultLayout, Context } from 'ui/app';

import ContextRegisterThanks from 'ui/app/context/context-register-thanks';

import { TokenContextProvider } from '../providers/TokenContextProvider';

//	Styles
import 'styles/index.scss';
import "./ui/styles/_app.scss";
// import "@tokenscript/token-negotiator/dist/theme/style.css";

const CONTEXT_VIEWS = {
	'register-thanks': {
		c: ContextRegisterThanks,
	},
}

export default function App({ Component, pageProps }) {
	
	const Layout = Component.Layout ?? DefaultLayout;
	const api = useStore( s => s.api );

	const [isMounted,setIsMounted] = useState(false); // Need this for the react-tooltip

	useEffect(() => {
		setIsMounted(true);
	},[]);
	
	return (
		<TokenContextProvider>
			<Layout pageProps={ pageProps }>
				<Component { ...pageProps } />
			</Layout>
			<Context.Region onClose={ () => api.setContextView() } views={ CONTEXT_VIEWS } />
			<div className="overlay-tn" />
			{isMounted && <div
			dangerouslySetInnerHTML={{
				__html: `<link rel='preload' href='/css/tn_style.css' as='style' onload="this.onload=null;this.rel='stylesheet'"/>`,
			}}
			></div>}
		</TokenContextProvider>
	);
};

App.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object,
};
