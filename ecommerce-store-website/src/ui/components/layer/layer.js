
//	Dependencies
import React, { useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useTransition, animated as a } from '@react-spring/web';
import clsx from 'clsx';
import _ from 'lodash-es';

// Styles
import styles from './layer.module.scss';


//
//	Brand Connector Demo / UI / Components / Layer
//


function Layer({ isOpen, parentRef, className, children, onClose }) {
	const classList = clsx( styles[ 'c-layer' ], className, {
		[ styles[ '-is-active' ] ]: isOpen,
	});

	const [ parentEl, setParentEl ] = useState( parentRef?.current );

	const layerTransition = useTransition( children, {
		key: children.key,
		from: { opacity: 0, y: 0, scale: 0.9 },
		initial: { opacity: 1, y: 0, scale: 1 },
		enter: { opacity: 1, y: 0, scale: 1 },
		leave: { opacity: 0, y: 0, scale: 0.9, position: 'absolute' },
		config: { friction: 20, tension: 210 },
	});

	useLayoutEffect( () => {
		if ( !parentRef?.current ) return;
		setParentEl( parentRef?.current );
	}, [ parentRef?.current ]);

	const layer = (
		<div className={ classList }>
			{ layerTransition && layerTransition( ( styleProps, _c ) => {
				if ( !_c ) return null;
				return (
					<a.div className={ styles[ 'c-layer_outline' ] } style={ styleProps }>
						{ _c }
					</a.div>
				);
			})}
			{ isOpen &&
				<div aria-hidden="true" className={ styles[ 'c-layer_overlay' ] } onClick={ onClose } />
			}
		</div>
	);

	return parentEl ? ReactDOM.createPortal( layer, parentEl ) : null;
}

export default React.memo( Layer );

Layer.propTypes = {
	className: PropTypes.string,
};
