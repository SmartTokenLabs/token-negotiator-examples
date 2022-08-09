
//	Dependencies
import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated as a } from '@react-spring/web';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import clsx from 'clsx';
import _isPlainObject from 'lodash-es/isPlainObject';

//	App
import { useStore } from 'base/state';
import Context from './context';

// Styles
import styles from "./context.module.scss";


//
//	Brand Connector Demo / UI / App / Context Region
//


export default function ContextRegion({ views, onClose, disableBodyScrollLock = false }) {
	const contextRef = useRef();
	const _isContextOpen = useStore( s => s.isContextOpen );
	const contextProps = useStore( s => s.contextProps );
	const onRegionClose = contextProps?.onRegionClose;
	const contextView = useStore( s => s.contextView );

	const _hasContextView = typeof contextView === 'string' && _isPlainObject( views?.[ contextView ]);

	const onCloseHandler = () => {
		const _contextOptions = views?.[ contextView ];
		const { isClosable = true } = _contextOptions;
		if ( !isClosable ) return;
		if ( onRegionClose ) {
			onRegionClose();
			return;
		}
		if ( onClose ) onClose();
	};

	const handleModalKey = useCallback(( e ) => {
		if ( e.key === 'Escape' ) {
			if ( onRegionClose ) {
				onRegionClose();
				return;
			}
			if ( onClose ) onClose();
		}
	}, []);

	let transitionDir = 'up';

	const transitionFrom = {
		up: { opacity: 0, x: 0, y: 100 },
		left: { opacity: 0, x: 100, y: 0 },
	};
	const transitionInitial = {
		up: { opacity: 1, x: 0, y: 0, position: 'relative' },
		left: { opacity: 1, x: 0, y: 0 },
	};
	const transitionLeave = {
		up: { opacity: 0, x: 0, y: 100, position: 'absolute' },
		left: { opacity: 0, x: 100, y: 0, position: 'absolute' },
	};

	const contextTransition = useTransition( contextView, {
		from: transitionFrom[ transitionDir ],
		initial: transitionInitial[ transitionDir ],
		enter: { opacity: 1, x: 0, y: 0 },
		leave: transitionLeave[ transitionDir ],
		config: { friction: 20, tension: 210 },
	});

	const overlayTransition = useTransition( _hasContextView && _isContextOpen, {
		from: { opacity: 0 },
		enter: { opacity: 0.75 },
		leave: { opacity: 0 },
		config: { friction: 25, tension: 150 },
	});

	useEffect( () => {
		if ( disableBodyScrollLock ) return;
		( _isContextOpen ? disableBodyScroll : clearAllBodyScrollLocks )( contextRef.current, {
			reserveScrollBarGap: true,
		});
	}, [ disableBodyScrollLock, _isContextOpen ]);

	 useEffect(() => {
		if ( _isContextOpen ) window.addEventListener( 'keydown', handleModalKey );
		return () => {
			window.removeEventListener( 'keydown', handleModalKey );
		};
	}, [ _isContextOpen ]);

	return (
		<div role="dialog" ref={ contextRef } className={ clsx( styles[ 'a-context_region' ], '-t-light', { [ styles[ '-is-active' ]]: _hasContextView })}>
			{ contextTransition && contextTransition( ( styleProps, view ) => {
				if ( !view ) return null;
				const _contextOptions = views?.[ contextView ];
				if ( !_contextOptions ) return null;
				const { c, isClosable, title, isLoading } = _contextOptions;
				return (
					<Context
						key={ view }
						title={ title }
						className={ `a-context_${ view }` }
						style={ styleProps }
						onClose={ onRegionClose || onClose }
						isClosable={ isClosable }
						isLoading={ isLoading }
					>
						<ContextData component={ c } />
					</Context>
				);
			})}
			{ overlayTransition && overlayTransition( ( styleProps, isOpen ) => {
				if ( !isOpen ) return null;
				return (
					<a.div aria-hidden="true" className={ styles[ 'a-context_overlay' ]} style={ styleProps } onClick={ onCloseHandler } />
				);
			})}
		</div>
	);
}

function ContextData({ component: ContextComponent }) {
	const contextProps = useStore( s => s.contextProps );

	if ( !ContextComponent ) return null;
	return <ContextComponent { ...contextProps } />;
}

ContextRegion.propTypes = {
	siteTitle: PropTypes.string,
	views: PropTypes.object,
	onClose: PropTypes.func,
};
