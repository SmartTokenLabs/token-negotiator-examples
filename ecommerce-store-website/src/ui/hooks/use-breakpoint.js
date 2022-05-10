
//	Dependencies
import { useState, useLayoutEffect, useEffect } from 'react';
import _debounce from 'lodash-es/debounce';


//
//	TokenScript / UI / App / Hooks / Breakpoint
//


function formatBreakpoint( bp ) {
	return bp.trim().replace( /^"|"$/g, '' );
}

function getBreakpoint() {
	if ( typeof document === 'undefined' ) return 'default';
	const bpKey = getComputedStyle( document.documentElement ).getPropertyValue( '--breakpoint' );
	if ( !bpKey ) return 'default';
	return formatBreakpoint( bpKey );
}

export default function useBreakpoint() {
	const [ breakpoint, setBreakpoint ] = useState( getBreakpoint() );

	if ( typeof document !== 'undefined' ) {
		useLayoutEffect( () => {
			let isCancelled = false;
			const _resizeHandler = () => !isCancelled && setBreakpoint( getBreakpoint() );
			if ( !isCancelled ) {
				window.addEventListener( 'resize', _debounce( _resizeHandler, 500 ), { passive: true });
				_resizeHandler();
			}
			return () => {
				isCancelled = true;
				window.removeEventListener( 'resize', _resizeHandler );
			};
		}, []);
	}

	return breakpoint;
}

export function useIsMobile() {
	const [ isMobile, setIsMobile ] = useState( false );
	const breakpoint = useBreakpoint();
	useEffect( () => {
		setIsMobile( breakpoint === 'small' );
	}, [ breakpoint ]);
	return isMobile;
}
