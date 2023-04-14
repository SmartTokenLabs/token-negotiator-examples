
//	Dependencies
import PropTypes from 'prop-types';

//	App
import { useStore } from 'base/state';
import { Layout as DefaultLayout, Context } from 'ui/app';

import ContextRegisterThanks from 'ui/app/context/context-register-thanks';

import { TokenContextProvider } from '../providers/TokenContextProvider';

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
	
	return (
		<TokenContextProvider>
			<Layout pageProps={ pageProps }>
				<Component { ...pageProps } />
			</Layout>
			<Context.Region onClose={ () => api.setContextView() } views={ CONTEXT_VIEWS } />
			<div className="overlay-tn" />
		</TokenContextProvider>
	);
};

App.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object,
};
