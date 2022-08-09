
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

// Styles
import styles from './link.module.scss';


//
//	Brand Connector Demo / UI / Components / Link
//


function getIsActive( activeHref, href ) {
	return activeHref === href;
}


export default function Link( props ) {
	const router = useRouter();

	const {
		children, className,
		href, element, type, ariaLabel,
		disabled, external,
		activeClass = '-is-active', activeClassFn = getIsActive,
		onClick, onClickExternal,
		...restProps
	} = props;

	const _isAnchor = element === 'a';
	const _isButton = element === 'button';
	const _isRoutable = ( typeof href !== 'undefined' );
	const _isActive = activeClassFn( router.asPath, href );

	let elProps = {
		...restProps,
		children,
		'className': clsx( className, {
			[ styles[ 'c-link' ]]: !className.includes( 'c-button' ),
			[ activeClass ]: _isActive,
			'-is-disabled': disabled,
		}),
		...ariaLabel && { 'aria-label': ariaLabel },
		onClick: e => {
			if ( disabled ) return e.preventDefault();
			if ( onClick ) onClick( e );
		},
	};

	if ( _isButton ) {
		elProps = {
			...elProps,
			type,
			disabled,
		};
	}

	if ( _isAnchor && external ) {
		elProps.href = href;
		elProps.target = '_blank';
		elProps.rel = 'external nofollow noreferrer noopener';
	}

	const linkContent = React.createElement( element, elProps );

	if ( !external && _isRoutable ) {
		return (
			<NextLink href={ href }>
				{ linkContent }
			</NextLink>
		);
	}

	return linkContent;
}

Link.propTypes = {
	children: PropTypes.node,
	element: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.oneOf([ 'a', 'button', 'span' ]),
	]),
	type: PropTypes.oneOf([ 'button', 'submit' ]),
	className: PropTypes.string,
	href: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
	as: PropTypes.string,
	external: PropTypes.bool,
	disabled: PropTypes.bool,
	focusable: PropTypes.bool,
	onClick: PropTypes.func,
	onClickExternal: PropTypes.func,
	ariaLabel: PropTypes.string,
};

Link.defaultProps = {
	className: '',
	external: false,
	element: 'a',
	type: 'button',
};
