
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

//	App
import { Image } from 'ui/components';

//	Styles
import styles from "./hero.module.scss";


//
//	Brand Connector Demo / UI / Sections / Hero
//


export default function Hero({ children, className, bgClassName, image, video, poster, videoType = 'video/mp4', imageDimensions = [ 100, 100 ], imagePosition = "50% 50%", theme }) {
	const _classTheme = theme && `-t-${ theme.toLowerCase() }`;

	const [ imageW, imageH ] = imageDimensions;
	const _hasBg = image || video;

	return (
		<section className={ clsx( 'section', styles[ 's-hero' ], _classTheme, className )}>
			{ children &&
				<div className={ styles[ 's-hero_children' ] }>
					{ children }
				</div>
			}
			{ _hasBg && (
				<div className={ clsx( styles[ 's-hero_bg' ], bgClassName )}>
					{ image ? (
						<Image src={ image } width={ imageW } height={ imageH } objectFit="cover" objectPosition={ imagePosition } layout="fill" />
					) : (
						<video width="auto" height="auto" playsInline autoPlay muted loop preload="auto" poster={ poster }>
							<source src={ video } type={ videoType } />
							Sorry, your browser doesn't support embedded videos.
						</video>
					)}
				</div>
			)}
		</section>
	);
}

Hero.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	bgClassName: PropTypes.string,
	image: PropTypes.string,
	video: PropTypes.string,
	poster: PropTypes.string,
	videoType: PropTypes.string,
	theme: PropTypes.string,
};
