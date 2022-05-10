
//	Dependencies
import PropTypes from 'prop-types';

//	App
import { Header } from 'ui/app';


//
//	TokenScript / UI / App / Layout
//


export default function Layout({ children }) {
	return (
		<div className="a-layout">
			<Header />
			<main>
				{ children && children }
			</main>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
