

//	Dependencies
import { useState, useRef, useEffect } from 'react';

//
//	Brand Connector Demo / UI / App / Hooks / Intersection
//


export default function useIntersection( props = {}) {
	const { root = null, rootMargin, threshold = 1 } = props;
	const [ entry, updateEntry ] = useState({});
	const [ node, setNode ] = useState( null );
	const io = useRef( null );

	useEffect( () => {
		if ( io.current ) io.current.disconnect();
		io.current = new window.IntersectionObserver(
			([ entry ]) => updateEntry( entry ),
			{ root, rootMargin, threshold },
		);
		if ( node ) io.current.observe( node );
		return () => io.current.disconnect();
	}, [ node, root, rootMargin, threshold ]);

	return [ setNode, entry ];
}

