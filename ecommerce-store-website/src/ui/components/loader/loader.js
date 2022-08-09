
//	Dependencies
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// App
import { Icon } from 'ui/components';

// Styles
import styles from './loader.module.scss';


//
//	Brand Connector Demo / UI / Components / Loader
//


export default function Loader({ className, size }) {
	return (
		<div className={ clsx( styles[ 'c-loader' ], className )} aria-label="Loading, please wait." aria-live="polite">
			<Icon className={ styles[ 'c-loader_icon' ] } type="load" size={ size } />
		</div>
	);
}

Loader.propTypes = {
	className: PropTypes.string,
	size: PropTypes.string,
};