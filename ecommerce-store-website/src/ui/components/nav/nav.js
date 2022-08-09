
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

//	App
import { Link, Button } from 'ui/components';

// Styles
import styles from './nav.module.scss';


//
//	Brand Connector Demo / UI / Components / Nav
//


export default function Nav({ children, className, ariaLabel, format }) {
	const formatClass = {[ styles[ `-format-${ format }` ]]: format };

	return (
		<nav className={ clsx( styles[ 'c-nav' ], className, formatClass ) } role="navigation" aria-label={ ariaLabel }>
			{ children && React.Children.map( children, c => c && React.cloneElement( c ) ) }
		</nav>
	);
}

export function NavItem({ children, className, style, icon, format, isActive = false, _isLink, ...restProps }) {
	const _isTypeLink = !!restProps.href || restProps.onClick;

	const itemProps = {
		...restProps,
		element: restProps.href ? 'a' : restProps?.onClick ? 'button' : '',
		className: clsx( styles[ 'c-nav-item' ], className, { '-is-active': isActive }),
		children,
		style,
	};

	const Component = format === 'button' ? Button : Link;

	return React.createElement( _isTypeLink ? Component : 'span', itemProps );
}

Nav.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	ariaLabel: PropTypes.string,
	format: PropTypes.string,
};

NavItem.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	id: PropTypes.string,
	icon: PropTypes.string,
	format: PropTypes.string,
	selected: PropTypes.string,
	isActive: PropTypes.bool,
	style: PropTypes.object,
	onClick: PropTypes.func,
};

Nav.Item = NavItem;
