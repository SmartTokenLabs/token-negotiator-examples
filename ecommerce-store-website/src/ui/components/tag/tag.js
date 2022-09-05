//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

//	Styles
import styles from "./tag.module.scss";


//
//	Brand Connector Demo / UI / Components / Visually Hidden
//


export default function Tag({ className, children, size }) {
	if ( !children ) return null;

	return (
		<span className={ clsx( styles[ 'c-tag' ], className, { [ styles[ `-size-${ size }` ] ]:size } ) }>
			{ children && children }
		</span>
	);
}

Tag.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};
