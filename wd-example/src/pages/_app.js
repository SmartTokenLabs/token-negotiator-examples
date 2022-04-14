
//	Dependencies
import PropTypes from 'prop-types';
import Head from 'next/head';

//	App
import { useStore } from 'base/state';
import { Layout as DefaultLayout } from 'ui/app';
import Menu from 'ui/app/menu';

//	Styles
import 'styles/index.scss';

export default function App({ Component, pageProps }) {
	const Layout = Component.Layout ?? DefaultLayout;
	const api = useStore( s => s.api );

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
		</>
	);
};

App.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object,
};