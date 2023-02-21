

//	Dependencies
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

//	App
import { Card, Button, Headline } from 'ui/components';

//	Styles
import styles from "./demos.module.scss";


//
//	Brand Connector Demo / UI / Sections / Demos
//


export default function Demos({ className, headline, currentDemo }) {
	const buttonCopy = currentDemo ? 'Try Demo' : 'Visit Shop';

	return (
		<section className={ clsx( styles[ 's-demos' ], 'section', className ) }>
			{ headline && (
				typeof headline === 'string' ? (
					<div className="grid -g-cols-1 -a-center -mb6">
						<Headline type="h2">{ headline }</Headline>
					</div>
				) : ( headline )
			)}
			<div className={ clsx( 'grid -mbn6', { '-g-max-8 -g-cols-2': currentDemo, '-g-cols-3': !currentDemo } ) }>
				{ currentDemo !== 'music-and-events' && (
					<Card className="-mb6" image="/images/music-and-events-thumbnail.webp">
						<Headline className="f5 -my0 -f-family-rubik" type="h2">Music & Events</Headline>
						<p className="f7 -mb4">Uses: BAYC Token</p>
						<Button href="/demo/music-and-events" element="a">{ buttonCopy }</Button>
					</Card>
				)}
				{ currentDemo !== 'fashion' && (
					<Card className="-mb6" image="/images/fashion-thumbnail.webp">
						<Headline className="f5 -my0 -f-family-rubik" type="h2">Fashion</Headline>
						<p className="f7 -mb4">Uses: WoW Token</p>
						<Button href="/demo/fashion" element="a">{ buttonCopy }</Button>
					</Card>
				)}
				{ currentDemo !== 'automotive' && (
					<Card className="-mb6" image="/images/automotive-thumbnail.webp">
						<Headline className="f5 -my0 -f-family-rubik" type="h2">Automotive</Headline>
						<p className="f7 -mb4">Uses: Riot Racers Token</p>
						<Button href="/demo/automotive" element="a">{ buttonCopy }</Button>
					</Card>
				)}
			</div>
		</section>
	)
}

Demos.propTypes = {
	className: PropTypes.string,
	headline: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	currentDemo: PropTypes.string,
};
