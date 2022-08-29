
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash-es';
import clsx from 'clsx';

//	App
import { Link } from 'ui/components';

//	Styles
import styles from "./card.module.scss";


//
//	Brand Connector Demo  / UI / Components / Card
//

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

const Card = React.memo( function Card( props ) {
	const { className, children, image, href, external, ...restProps } = props;

	const _isLink = ( typeof href !== 'undefined' );
	const _hasImage = typeof image === 'string';

	const classes = clsx( styles[ 'c-card' ], {
		'-format-image': !_.isUndefined( image ),
	}, className );

	const cardProps = {
		className: classes,
		href, external,
		...restProps,
	};

	const bgImgStyles = image ? {
		'backgroundImage': `url(${ basePath + image })`,
	} : null;

	const renderContent = (
		<>
			{ _hasImage && (
				<div className={ styles[ 'c-card_image' ] } role='img' style={ bgImgStyles } />
			)}
			<div className={ styles[ 'c-card_wrapper' ]}>
				{ children && children }
			</div>
		</>
	);

	return React.createElement( _isLink ? Link : 'div', cardProps, renderContent );
});

Card.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	image: PropTypes.string,
	href: PropTypes.string,
	external: PropTypes.bool,
};

export default Card;
