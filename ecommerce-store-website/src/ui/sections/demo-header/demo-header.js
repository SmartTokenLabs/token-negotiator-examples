

//	Dependencies
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

//	Styles
import styles from "./demo-header.module.scss";


//
//	Brand Connector Demo / UI / Sections / Demo Header
//


export default function DemoHeader({ className, headline, children }) {
	return (
		<section className={ clsx( styles[ 's-demo-header' ], className, 'section' ) }>
			<div className="grid -g-cols-1">
				<h1 className="-mt0">{ headline }</h1>
			</div>
			<div className="grid -g-cols-1 -hide-s">
				{ children }
			</div>
		</section>
	);
}

DemoHeader.propTypes = {
	className: PropTypes.string,
	headline: PropTypes.string,
	children: PropTypes.node,
};
