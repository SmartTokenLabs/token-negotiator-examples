
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import NextImage from 'next/image';
import _ from 'lodash';
import clsx from 'clsx';

//	Styles
import styles from "./image.module.scss";


//
//	TokenScript / UI / Components / Image
//


export default function Image({ className, src, alt, height, width }) {
	if ( !src ) return null;
	const classList = clsx( styles[ 'c-image' ], className );

	return (
		<div className={ classList }>
			<img src={ src } alt={ alt || '' } height={ height } width={ width } />
		</div>
	);
}

Image.propTypes = {
	className: PropTypes.string,
	src: PropTypes.string,
	height: PropTypes.number,
	width: PropTypes.number,
	alt: PropTypes.string,
};
