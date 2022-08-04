
//	Dependencies
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated as a } from '@react-spring/web';
import _ from 'lodash-es';

// App
import { useIntersection, useBreakpoint } from 'ui/hooks';


//
//	Brand Connector Demo / UI / Components / Animation / Scroll Reveal
//


export default function ScrollReveal({ children, animProps = { y: [ 50, 0 ], opacity: [ 0, 1 ]}, ...props }) {
	const [ hasIntersected, setHasIntersected ] = useState( false );
	const breakpoint = useBreakpoint();
	const _isMobile = breakpoint === 'small';
	const [ ref, { isIntersecting, intersectionRect }] = useIntersection({ threshold: _isMobile ? 0.2 : 0.4 });

	const springAnimProps = _.mapValues( animProps, a => hasIntersected ? a[ 1 ] : a[ 0 ]);
	const springProps = useSpring({
		...springAnimProps,
		delay: intersectionRect?.x * 0.2 + intersectionRect?.y * 0.1 ?? 0,
	});

	useEffect( () => {
		if ( !isIntersecting ) return;
		setHasIntersected( isIntersecting );
	}, [ isIntersecting ]);

	return (
		<a.div style={ springProps } ref={ ref } { ...props }>
			{ children }
		</a.div>
	);
}

ScrollReveal.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	animProps: PropTypes.object,
};
