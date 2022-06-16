
//	Dependencies
import clsx from 'clsx';

// App
import { Page } from 'ui/app';
import { Link, Slider, Button } from 'ui/components';
import { useEffect, useState } from "react";
import { useStore } from "src/base/state";

//	Styles
import styles from "./car-industry-view.module.scss";

import imgCarIndustry1 from "../../../../public/images/car-industry-1.jpg";
import imgCarIndustry2 from "../../../../public/images/car-industry-2.jpg";

//
//	TokenScript / UI / Views / Car Industry
//


export default function CarIndustryView() {
	const meta = {
		title: 'Car Industry Demo | TokenScript',
		ogTitle: 'Car Industry Demo | TokenScript',
	};

	const [ claimedVip, setClaimedVip ] = useState( false );
	const [ claimed, setClaimed ] = useState( false );
	const selectedTokens = useStore( s => s.selectedTokens );

	function isEligible(){

		let tokens = selectedTokens;

		if (!tokens) return false;

		return (tokens["stl-rnd-riot-racers"] && tokens["stl-rnd-riot-racers"].tokens.length > 0);
	}

	async function handleClick(){
		try {
			await window.negotiator.authenticate({
				issuer: "stl-rnd-riot-racers",
				unsignedToken: selectedTokens["stl-rnd-riot-racers"].tokens[0]
			});
		} catch (e) {
			alert(e.message);
			return;
		}

		setClaimedVip(true);
	}

	return (
		<Page className={ styles[ 'v-car-industry'] } meta={ meta }>
			<section className="section">
				<div className="grid -g-cols-1 -a-center">
					<h1>Car Industry</h1>
					<p className="-mt0 -mb6">Use “STLRiotRacers” tokens. Don’t have them? <Link href="/request-tokens">Request</Link></p>
				</div>
				<div className="grid -g-cols-1">
					<Slider opacityTo={ 0.25 } restMargin={ 48 }>
						<div className={ styles[ 'v-car-industry_slide'] } style={{ backgroundImage: `url("${imgCarIndustry2.src}")` }}>
							<div className={ clsx( '-a-center', styles[ 'v-car-industry_slider-overlay' ] ) }>
								<h2 className="-f-family-rubik -f-regular">
									<span className="f5 -f-light -va-center -a-center -my0">Test Drive:</span>
									Test Drive The New BMW
								</h2>
								{ isEligible() ? <Button className={ claimed ? '-style-green' : '' } onClick={handleClick}>{ claimedVip ? 'Success!' : 'Hire Today' }</Button> : <p className="f5 -f-light -color-white">Coming Soon...</p>}
							</div>
						</div>
						<div className={ styles[ 'v-car-industry_slide'] } style={{ backgroundImage: `url("${imgCarIndustry1.src}")` }}>
							<div className={ clsx( '-a-center', styles[ 'v-car-industry_slider-overlay' ] ) }>
								<h2 className="-f-family-rubik -f-regular">
									<span className="f5 -f-light -va-center -a-center -my0">Hire:</span>
									Hire Audi A8 Now
								</h2>
								<Button className={ claimed ? '-style-green' : '' } onClick={() => { setClaimed(true); }}>{ claimed ? 'Success!' : 'Claim' }</Button>
							</div>
						</div>
					</Slider>
				</div>
			</section>
		</Page>
	);
}
