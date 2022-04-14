
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { animated as a } from '@react-spring/web';
import clsx from 'clsx';
import _ from 'lodash';

// Styles
import styles from "./menu.module.scss";


//
//	TokenScript / UI / App / Menu
//


const Menu = React.forwardRef( ( { children, className, style }, ref ) => {
	const menuStyle = {
		...style,
		transform: _.invoke( style, 'xto', x => `translate3d(${ x * -0.1 }%,0,0)` ),
	};

	return (
		<a.div className={ clsx( styles[ 'a-menu' ], className ) } tab-index="-1" ref={ ref } style={ menuStyle }>
			{ children && children }
		</a.div>
	);
});

Menu.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	style: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
};

export default React.memo( Menu );
