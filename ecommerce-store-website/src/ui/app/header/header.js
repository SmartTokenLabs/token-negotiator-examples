
//	Dependencies
import React, { useState, useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useRouter } from "next/router";
import _ from "lodash";

//	App
import { useStore } from 'base/state';

import { Logo, Link, Nav, Button, Image, Icon, Layer } from "ui/components";
import { TokenContext } from "src/providers/TokenContextProvider";

// Styles
import styles from "./header.module.scss";


//
//	Brand Connector Demo / UI / Components / Header
//

const Header = function Header({ className }) {
	const router = useRouter();
	const { wallet } = useContext(TokenContext);


	const isNegotiatorReady = useStore( s => s.isNegotiatorReady );
	const selectedTokens = useStore( s => s.selectedTokens );
	const walletAddress = wallet ? wallet.address : undefined;

	var tokensFound = 0;
	
	if(Object.keys( selectedTokens )) {
			tokensFound = Object.keys( selectedTokens ).map(( tokenCollection ) => {
				return selectedTokens[tokenCollection].tokens.length;
			})
			if(tokensFound.length) tokensFound = tokensFound.reduce((a, b) => a + b);
			else tokensFound = 0;
	}

	const [ isMenuOpen, setIsMenuOpen ] = useState( false );
	const menuRef = useRef( null );

	useEffect( () => {
		setIsMenuOpen( false );
	}, [ router.pathname ]);

	const isDemoRoute = [ '/demo/fashion', '/demo/music-and-events', '/demo/automotive' ].find( route => route === router.pathname );

	return (
		<header className={ clsx( styles[ 'a-header' ], className )}>
			<div className={ clsx( styles[ 'a-header_bar' ] )}>
				<div className={ styles[ 'a-header_logo-container' ]}>
					<Link ariaLabel="Home" href="/" className={ clsx( styles[ 'a-header_logo' ], '-style-text' ) } activeClass={ styles[ '-is-active' ]} activeClassFn={ a => a !== '/whats-on' }>
						<Logo className={ styles[ 'a-header_logo-img' ] } />
					</Link>
				</div>
				<div className={ styles[ 'a-header_nav-container' ] } ref={ menuRef }>
					<Nav className={ clsx( styles[ 'a-header_nav' ] ) }>
						<Nav.Item className={ clsx( styles[ 'a-header_nav-item' ],  { [ '-is-active' ]: router.pathname === '/' } ) }>
							<Link href="/" className="-style-headline">Get Tokens</Link>
						</Nav.Item>
						<Nav.Item className={ clsx( styles[ 'a-header_nav-item' ], { [ '-is-active' ]: isDemoRoute } ) }>
							<Link className="-style-headline" onClick={ () => setIsMenuOpen( !isMenuOpen ) }>
								<span className="-hide-s">Demo Examples</span>
								<span className="-show-s">Demos</span>
							</Link>
						</Nav.Item>
						<div>
							{ walletAddress ? (
								<div className={ styles[ 'a-header_nav-tokens' ] }>
									<p className="f7">{ tokensFound } Tokens Found</p>
									<p>{ String( walletAddress ).substring( 0, 4 ) + '...' + String( walletAddress ).substring( 38 ) }</p>
								</div>
							) : (
								<Button
									className={ clsx( styles[ 'a-header_nav-button' ], '-style-secondary' ) }
									isLoading={ !isNegotiatorReady }
									onClick={ () => window?.negotiator && window.negotiator.negotiate() }
								>
									Connect Wallet
								</Button>
							) }
						</div>
					</Nav>
					<Layer isOpen={ isMenuOpen } parentRef={ menuRef } onClose={ () => setIsMenuOpen( false ) }>
						<div key="demo-menu" className={ clsx( styles[ 'c-popover' ], { '-hide': !isMenuOpen } ) }>
							<p className="-f-caps f9 -mt2">Examples</p>
							<Link href="/demo/fashion" className="-style-headline -va-center -my1">
								<Icon type="clothing" className="-color-primary -mr1" /> Fashion
							</Link>
							<Link href="/demo/music-and-events" className="-style-headline -va-center -my1">
								<Icon type="music" className="-color-primary -mr1" /> Music & Event
							</Link>
							<Link href="/demo/automotive" className="-style-headline -va-center -my1">
								<Icon type="car" className="-color-primary -mr1" /> Automotive
							</Link>
						</div>
					</Layer>
				</div>
			</div>
		</header>
	);
}

Header.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default Header;
