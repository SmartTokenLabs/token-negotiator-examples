
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

//	App
import { Footer, Header } from 'ui/app';
import { LabsBanner } from 'ui/sections';


//
//	Brand Connector Demo / UI / App / Layout
//

export default function Layout({ className, children }) {
	return (
		<div className={ clsx( 'a-layout', className ) }>
			<Header />
			<main>
				{ children && children }
				<LabsBanner />
				<Footer />
			</main>
		</div>
	);
}

Layout.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};
