
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import _ from 'lodash-es';

// Styles
import styles from './headline.module.scss';


//
//	Brand Connector Demo / UI / Components / Headline
//


export default function Headline({ className, type, children }) {
	const Comp = `${ type }`;

	return (
		<Comp className={ clsx( styles[ 'c-headline' ], className )}>
			{ children }
		</Comp>
	);
}

Headline.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
	children: PropTypes.node,
};

Headline.defaultProps = {
	type: 'h1',
};
