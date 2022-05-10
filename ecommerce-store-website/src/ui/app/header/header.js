
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useRouter } from 'next/router';

//	App
import { useStore } from 'base/state';
import { Logo, Link, Nav, Button } from 'ui/components';

// Styles
import styles from "./header.module.scss";


//
//	TokenScript / UI / Components / Header
//


const Header = React.memo( function Header({ className }) {
	const api = useStore( s => s.api );
	const router = useRouter();

	const isMenuOpen = useStore( s => s.isMenuOpen );

	return (
		<header className={ clsx( styles[ 'a-header' ], className )}>
			<div className={ styles[ 'a-header_bar' ]}>
				<Link href="/" className={ styles[ 'a-header_logo' ]} activeClass={ styles[ '-is-active' ]} activeClassFn={ a => a !== '/whats-on' }>
					<Logo className={ styles[ 'a-header_logo-img' ] } />
				</Link>
				<div className="-show-s">
					<Button
						className={ clsx( '-style-none', styles[ 'a-header_menu-button' ] ) }
						size="m"
						iconSize="m"
						icon={ isMenuOpen ? 'cross' : 'menu' }
						ariaLabel={ isMenuOpen ? 'Close menu' : 'Open menu' }
						onClick={ () => api.toggleMenuView() }
					/>
				</div>
				<Nav className={ clsx( '-hide-s', styles[ 'a-header_nav' ] ) }>
					<Nav.Item className={ clsx( '-style-text', styles[ 'a-header_nav-item' ], { [ '-is-active' ]: router.pathname === '/' } ) } href="/">
						How it works?
					</Nav.Item>
					<Nav.Item className={ clsx( '-style-text', styles[ 'a-header_nav-item' ], { [ '-is-active' ]: router.pathname === '/demo/fashion' } ) } href="/demo/fashion">
						Fashion
					</Nav.Item>
					<Nav.Item className={ clsx( '-style-text', styles[ 'a-header_nav-item' ], { [ '-is-active' ]: router.pathname === '/demo/music-and-event' } ) } href="/demo/music-and-events">
						Music & Events
					</Nav.Item>
					<Nav.Item className={ clsx( '-style-text', styles[ 'a-header_nav-item' ], { [ '-is-active' ]: router.pathname === '/demo/car-industry' } ) } href="/demo/car-industry">
						Car Industry
					</Nav.Item>
					<Nav.Item className={ clsx( '-style-text -mya', styles[ 'a-header_nav-button' ] ) }  href="/request-tokens" format="button">
						Get Tokens
					</Nav.Item>
				</Nav>
			</div>
		</header>
	);
})

Header.propTypes = {
	className: PropTypes.string,
};

export default Header;
