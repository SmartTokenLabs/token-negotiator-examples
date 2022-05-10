
//	Dependencies
import React, { useEffect, useRef } from 'react';
import { useTransition } from '@react-spring/web';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import clsx from 'clsx';

//	App
import { useStore } from 'base/state';
import Menu from './menu';
import { Nav } from 'ui/components';
import { useIsMobile } from 'ui/hooks';

// Styles
import styles from "./menu.module.scss";


//
//	TokenScript / UI / App / Menu Region
//


export default function MenuRegion() {
	const api = useStore( s => s.api );
	const _isMenuOpen = useStore( s => s.isMenuOpen );
	const menuRef = useRef();
	const isMobile = useIsMobile();

	const contextTransition = useTransition( _isMenuOpen, {
		from: { opacity: 0, x: 100, y: 0 },
		initial: { opacity: 1, x: 0, y: 0 },
		enter: { opacity: 1, x: 0, y: 0 },
		leave: { opacity: 0, x: 100, y: 0, position: 'absolute' },
		config: { friction: 20, tension: 210 },
	});

	useEffect( () => {
		if ( _isMenuOpen && !isMobile ) api.toggleMenuView();
	}, [ isMobile, _isMenuOpen ]);

	useEffect( () => {
		( _isMenuOpen ? disableBodyScroll : clearAllBodyScrollLocks )( menuRef.current, { reserveScrollBarGap: true });
	}, [ _isMenuOpen ]);

	const navItems = [
		{ title: 'How it works?', href: '/', id: 'howItWorks' },
		{ title: 'Fashion', href: '/demo/fashion', id: 'fashion' },
		{ title: 'Music & Events', href: '/demo/music-and-events', id: 'musicEvents' },
		{ title: 'Car Industry', href: '/demo/car-industry', id: 'carIndustry' },
		{ title: 'Get Tokens', href: '/request-tokens', id: 'requestTokens' },
	];

	return (
		<div role="dialog" ref={ menuRef } className={ clsx( styles[ 'a-menu_region' ], { [ '-is-active' ]: _isMenuOpen } ) }>
			{ contextTransition && contextTransition( ( styleProps, isOpen ) => {
				if ( !isOpen ) return null;
				return (
					<Menu className={ styles[ 'a-menu' ] } style={ styleProps }>
						<div className={ clsx( styles[ 'a-menu_nav'] ) }>
							<Nav className={ clsx( styles[ 'a-menu_nav-list' ] ) } format="vertical">
								{ navItems.map( navItem => (
									<Nav.Item key={ navItem.id } className="-style-text" href={ navItem.href }>{ navItem.title }</Nav.Item>
								) ) }
							</Nav>
						</div>
					</Menu>
				);
			})}
		</div>
	);
}
