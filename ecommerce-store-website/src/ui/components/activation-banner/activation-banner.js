
//	Dependencies
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import _ from 'lodash';

// Styles
import styles from './activation-banner.module.scss';


//
//	Brand Connector Demo / UI / Components / Activation Banner
//


export default function ActivationBanner({ className, theme }) {

	const renderActivationString = ( key ) => {
		return (
			<p className={ clsx( styles[ 'c-activation-banner_content' ], '-f-caps f7 -f-medium' ) }>
				{ _.times( 10, ( i ) => {
					return (
						<span key={ `${ key }-${ i }`} aria-hidden={ true }>
							NFT Exclusives Available<span className={ clsx( styles[ 'c-activation-banner_content-tag' ], '-color-base' )}>&bull; Activate Now &bull;</span>
						</span>
					);
				})}
			</p>
		)
	}

	return (
		<div className={ clsx( styles[ 'c-activation-banner' ], className, { [  `-t-${ theme }` ]: theme } )}>
			<div className={ styles[ 'c-activation-banner_container' ] }>
				{ renderActivationString( 'first-loop' ) }
				{ renderActivationString( 'second-loop' ) }
			</div>
		</div>
	);
}

ActivationBanner.propTypes = {
	className: PropTypes.string,
	theme: PropTypes.string,
};