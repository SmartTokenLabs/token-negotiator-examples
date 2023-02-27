
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

//	Styles
import styles from "./visually-hidden.module.scss";


//
//	Brand Connector Demo / UI / Components / Visually Hidden
//


export default function VisuallyHidden({ className, children }) {
	if ( !children ) return null;

	return (
		<span className={ clsx( styles[ 'c-visually-hidden' ], className ) }>
			{ children }
		</span>
	);
}

VisuallyHidden.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};
