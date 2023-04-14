
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import NextImage from 'next/image';
import _ from 'lodash';
import clsx from 'clsx';

//	Styles
import styles from "./image.module.scss";

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

const staticImgLoader = ({src, width, quality}) => {
	return basePath + src;
}

//
// Brand Connector Demo / UI / Components / Image
//


export default function Image( props ) {
	const { className, src, height, width, alt, sizes, quality, layout, objectFit, objectPosition } = props;
	if ( !src ) return null;
	const classList = clsx( styles[ 'c-image' ], className );

	return (
		<div className={ classList }>
			<NextImage
				loader={ staticImgLoader }
				src={ src }
				alt={ alt ?? '' }
				layout={ layout ?? (( !height || !width ) && 'fill' )}
				width={ width }
				height={ height }
				objectFit={ objectFit ?? 'contain' }
				objectPosition={ objectPosition ?? 'center' }
				quality={ quality ?? 95 }
				sizes={ sizes }
			/>
		</div>
	);
}

Image.propTypes = {
	className: PropTypes.string,
	height: PropTypes.number,
	width: PropTypes.number,
	alt: PropTypes.string,
};
