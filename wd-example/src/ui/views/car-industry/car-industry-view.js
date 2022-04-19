
//	Dependencies
import clsx from 'clsx';

// App
import { Page } from 'ui/app';
import { Link, Slider, Button } from 'ui/components';
import { useEffect } from "react";

//	Styles
import styles from "./car-industry-view.module.scss";


//
//	TokenScript / UI / Views / Car Industry
//


export default function CarIndustryView() {
	const meta = {
		title: 'Car Industry Demo | TokenScript',
		ogTitle: 'Car Industry Demo | TokenScript',
	};

	useEffect(()=> {

		const init = async () => {

			const { Client } = (await import("@tokenscript/token-negotiator"));

			let negotiator = new Client({
				type: 'active',
				issuers: [
					{
						collectionID: 'rinkeby-punk',
						contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
						chain: 'rinkeby',
						openSeaSlug: 'rinkeby-punk'
					},
					{
						collectionID: 'women-tribe',
						contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
						chain: 'rinkeby',
						openSeaSlug: 'stl-rnd-women-tribe-nfts'
					},
					{
						collectionID: 'zed',
						contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
						chain: 'rinkeby',
						openSeaSlug: 'stl-rnd-zed'
					},
					{
						collectionID: 'stl-rnd-bayc-derivatives',
						contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
						chain: 'rinkeby',
						openSeaSlug: 'stl-rnd-bayc-derivatives'
					},
					{
						collectionID: 'stl-rnd-riot-racers',
						contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656',
						chain: 'rinkeby',
						openSeaSlug: 'stl-rnd-riot-racers'
					}
				],
				options: {
					overlay: {
						openingHeading: "Open a new world of discounts available with your tokens.",
						issuerHeading: "Get discount with Ticket",
						repeatAction: "try again",
						theme: "light",
						position: "bottom-right"
					},
					filters: {},
				}
			});

			negotiator.negotiate();
		};

		init();
	});

	return (
		<Page className={ styles[ 'v-car-industry'] } meta={ meta }>
			<section className="section">
				<div className="grid -g-cols-1 -a-center">
					<h1>Car Industry</h1>
					<p className="-mt0 -mb6">Use “STL RnD Riot Racers” tokens. Don’t have them? <Link href="/request-tokens">Request</Link></p>
				</div>
				<div className="grid -g-cols-1">
					<Slider opacityTo={ 0.25 } restMargin={ 48 }>
						<div className={ styles[ 'v-car-industry_slide'] } style={{ backgroundImage: 'url("/images/car-industry-2.jpg")' }}>
							<div className={ clsx( '-a-center', styles[ 'v-car-industry_slider-overlay' ] ) }>
								<h2 className="-f-family-rubik -f-regular">
									<span className="f5 -f-light -va-center -a-center -my0">Test Drive:</span>
									Test Drive The New BMW
								</h2>
								<p className="f5 -f-light -color-white">Coming Soon...</p>
							</div>
						</div>
						<div className={ styles[ 'v-car-industry_slide'] } style={{ backgroundImage: 'url("/images/car-industry-1.jpg")' }}>
							<div className={ clsx( '-a-center', styles[ 'v-car-industry_slider-overlay' ] ) }>
								<h2 className="-f-family-rubik -f-regular">
									<span className="f5 -f-light -va-center -a-center -my0">Hire:</span>
									Hire Audi A8 Now
								</h2>
								<Button>Hire Today</Button>
							</div>
						</div>
					</Slider>
				</div>
			</section>
			<div className="overlay-tn"/>
		</Page>
	);
}
