

//	Dependencies
import React, { useContext } from 'react';
import clsx from 'clsx';

//	App
import { TokenContext } from 'src/providers/TokenContextProvider';
import { Button } from 'ui/components';

//	Styles
import styles from "./stats-disclaimer.module.scss";


//
//	Brand Connector Demo / UI / Sections / Stats Disclaimer
//


export default function StatsDisclaimer() {
	const { agreeToStats, setAgreeToStats } = useContext(TokenContext);

	const handleOnClick = () => {
    setAgreeToStats(true);
  };

	return !agreeToStats && (
		<div className={ styles[ 's-stats-disclaimer' ] }>
			<span className={ styles[ 's-stats-disclaimer_desc' ] }>
				This page collect data for analytics purposes.
			</span>
			<Button
				className={ clsx( styles[ 's-stats-disclaimer_button' ], '-style-light-outline' ) }
				onClick={handleOnClick}>
					Agree
			</Button>
		</div>
	);
}
