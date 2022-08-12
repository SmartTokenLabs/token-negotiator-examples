

//	Dependencies
import React from 'react';
import clsx from 'clsx';

//	App
import { Link, Logo } from 'ui/components';

//	Styles
import styles from "./labs-banner.module.scss";


//
//	Brand Connector Demo / UI / Sections / SmartToken Banner
//


export default function LabsBanner() {
	return (
		<section className={ clsx( styles[ 's-labs-banner' ], '-t-brand' ) }>
			<div className="grid -g-cols-2 -va-center">
				<div>
					<h5 className="f5 -mb0 -f-family-rubik">We make tokens smart</h5>
					<p className="-mt1">Smart Token Labs is the creator of TokenScript and AlphaWallet two open source solutions for a tokenized future.</p>
				</div>
				<Link className={ clsx( styles[ 's-labs-banner_logo' ] ) } href="https://smarttokenlabs.com" ariaLabel="Go to SmartToken Labs website">
					<Logo.SmartToken className="-mla -hide-s" />
					<Logo.SmartToken type="icon" className="-show-s" />
				</Link>
			</div>
		</section>
	)
}
