
//	Dependencies
import { useState, useRef, useEffect, useCallback } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import _debounce from 'lodash-es/debounce';


//
//	TokenScript / UI / App / Hooks / Measure
//


export default function useMeasure( isObserver=true ) {
	let ref;
	const [ bounds, set ] = useState({ left: 0, top: 0, width: 0, height: 0 });
	const setBounds = useCallback( _debounce( set, 500 ), [ set ]);

	if ( isObserver ) {
		ref = useRef();
		const [ ro ] = useState( () => new ResizeObserver( ([ entry ]) => setBounds( entry.contentRect ) ) );
		useEffect( () => {
			if ( ref.current ) ro.observe( ref.current );
			return () => ro.disconnect();
		}, []);
	} else {
		const [ node, setNode ] = useState();
		ref = setNode;
		useEffect( () => {
			const _resizeHandler = () => {
				if ( node ) {
					const { left, top, width, height } = node.getBoundingClientRect();
					setBounds({ left, top: Math.round( top + window.scrollY ), width, height });
				}
			};
			_resizeHandler();
			window.addEventListener( 'resize', _resizeHandler, { passive: true });
			return () => window.removeEventListener( 'resize', _resizeHandler );
		}, [ node ]);
	}

	return [{ ref }, bounds ];
}
