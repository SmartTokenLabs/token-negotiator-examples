
// Depenencies
import clsx from 'clsx';

// App
import { useStore } from "base/state";
import { Page } from 'ui/app';
import { checkNFTEligibility } from "base/utils";
import { Animation, ActivationBanner, Nav, ProductItem, Button, Banner, Image, Tag, Headline } from 'ui/components';
import { DemoHeader, DemoHero, BrandsList, Demos } from 'ui/sections';

//	Styles
import styles from "./automotive-view.module.scss";

import lamboImg from "../../../../../public/images/lambo-vehicle.jpg";
import porschImg from "../../../../../public/images/porsch-vehicle.jpg";
import lamboUrusImg from "../../../../../public/images/lambo-urus-vehicle.jpg";
import mercImg from "../../../../../public/images/mercedes-vehicle.jpg";
import farrariImg from "../../../../../public/images/ferrari-vehicle.jpg";
import astonImg from "../../../../../public/images/aston-martin-vehicle.jpg";

import porschLogo from "../../../../../public/images/porsch.png";
import mercedesLogo from "../../../../../public/images/mercedes.png";
import lamboLogo from "../../../../../public/images/lambo.png";
import astonLogo from "../../../../../public/images/aston-martin.jpg";
import ferrariLogo from "../../../../../public/images/ferrari.jpg";
import rangeLogo from "../../../../../public/images/range-rover.png";

//
//	Brand Connector Demo / UI / Views / Automotive
//

console.log("Base path: ");
console.log(process.env.BASE_PATH);

export default function AutomotiveView() {
	const meta = {
		title: 'Automotive | Brand Connector Demo',
	};

	const vehicles = [
		{ image: { src: lamboImg, height: 282, width: 594 }, title: 'Lamborghini', description: 'Rare Aventador LP780-4 ‘22', price: 550, salePrice: 500 },
		{ image: { src: porschImg, height: 282, width: 594 } , title: 'Porche', description: '911 GT3 RS Limited Edition ‘20', price: 290, salePrice: 250 },
		{ image: { src: lamboUrusImg, height: 282, width: 594 } , title: 'Lamborghini Urus Esteso 19', description: 'Limited Edition Urus Esteso ‘19', price: 450, salePrice: 400 },
		{ image: { src: mercImg, height: 282, width: 594 } , title: 'Mercedes', description: 'AMG GT Night Edition ‘21', price: 320, salePrice: 270 },
		{ image: { src: farrariImg, height: 282, width: 594 } , title: 'Ferrari', description: 'Vulcan ‘21', price: 310, salePrice: 260 },
		{ image: { src: astonImg, height: 282, width: 594 } , title: 'Aston Martin', description: 'Vulcan ‘21', price: 550, salePrice: 500 },
	]

	const selectedTokens = useStore( s => s.selectedTokens );
	const promotionEnabled = checkNFTEligibility( selectedTokens, [ 'stl-riot-racer' ] );

	return (
		<Page className={ clsx( styles[ 'v-automotive' ], '-t-dark' ) } meta={ meta }>
			<DemoHeader headline="Automotive">
				<Nav className="f7 -my0 -color-text">
					<Nav.Item>Luxury Rental Cars</Nav.Item>
					<Nav.Item>Experiences</Nav.Item>
					<Nav.Item>Vehicles</Nav.Item>
				</Nav>
			</DemoHeader>
			<DemoHero className={ styles[ 'v-automotive_hero' ] } image="/images/automotive-bg.jpg">
				<div className="grid -g-cols-1 -g-max-10">
					<div>
						<div className={ styles[ 'v-automotive_hero-logo' ] }>
							<Image src="/images/topgear-and-riot.png" alt="Top Gear and Riot" height={ 72 } width={ 594 } />
						</div>
						<div className="-g-max-6">
							<h2 className="-mt3">Exclusive track day experience with Top Gear.</h2>
							<p className={ styles[ 'v-automotive_hero-tagline' ] } >Available exclusively to Riot Racer NFT holders.</p>
						</div>
					</div>
				</div>
			</DemoHero>
			<ActivationBanner theme="light-purple" />

			<section className="section -pbs">
				{ promotionEnabled &&
					<Animation.ScrollReveal>
						<div className="grid -g-cols-1 -g-max-10 -mb6">
							<Banner
								className="-style-rounded -t-light-purple"
								image="/images/automotive-bg.jpg"
								overlayImage="/images/topgear-and-riot.png"
								headline="Book your exclusive track day now"
								text="Enjoy your once in a lifetime experience as a Riot Racer NFT holder!"
								selectedTokens={ selectedTokens }
								authTokens={ [ 'stl-riot-racers' ] }
							/>
						</div>
					</Animation.ScrollReveal>
				}
				<div className="grid -g-cols-1 -g-max-10">
					<Headline type="h2" className={ clsx( styles[ 'v-automotive_aside-headline' ], 'f5 -f-caps' ) }>Select Vehicle</Headline>
				</div>
				<div className="grid -g-cols-3 -g-max-10">
					<div className={ clsx( styles[ 'v-automotive_aside' ], '-hide-s' ) }>
						<h4 className="f7">Pickup Location</h4>
						<Image className={ styles[ 'v-automotive_aside-image' ] } src="/images/location-input.png" alt="Input example of selected pickup location" height={ 84 } width={ 490 } />
						<h4 className="f7">Drop-off Location</h4>
						<Image className={ styles[ 'v-automotive_aside-image' ] } src="/images/location-input.png" alt="Input example of selected drop-off location" height={ 84 } width={ 490 } />
						<h4 className="f7">Select Dates</h4>
						<Image className={ styles[ 'v-automotive_aside-image' ] } src="/images/calendar.png" alt="Calender example of selected rental dates" height={ 497 } width={ 498 } />
						<div className="-va-center">
							<h4 className="f7">Age of primary driver</h4>
							<Tag className={ styles[ 'v-automotive_aside-tag' ] }>32</Tag>
						</div>
						<p className="f7 -mb4">Note, all prices include standard insurance cover & roadside assistance for all driver over 25 years of age.</p>
						<Button className={ clsx( styles[ 'v-automotive_aside-button' ], '-style-light-outline' ) } format="block">Search</Button>
					</div>
					<div className="-g-cols-fill-2 -mtn2">
						<div className="grid -g-cols-2">
							{ vehicles && vehicles.map( ( vehicle, i ) => (
								<ProductItem
									className="-t-dark"
									key={ `vehicle-${ i }` }
									product={{ ...vehicle, priceTag: 'day' }}
									discountEnabled={ promotionEnabled }
									selectedTokens={ selectedTokens }
									authTokens={[ 'stl-riot-racer' ]}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
			<BrandsList
				className="-py0"
				headline="Manufacturers"
				logos={[
					{ src: porschLogo, height: 154, width: 306, alt: 'Porsh', id: 'porsh' },
					{ src: mercedesLogo, height: 190, width: 196, alt: 'Mercedes', id: 'mercedes' },
					{ src: lamboLogo, height: 188, width: 164, alt: 'Lamborghini', id: 'lambo' },
					{ src: astonLogo, height: 182, width: 340, alt: 'Aston Martin', id: 'aston-martin' },
					{ src: ferrariLogo, height: 186, width: 117, alt: 'Ferrari', id: 'ferrari', className: '-hide-s' },
					{ src: rangeLogo, height: 134, width: 304, alt: 'Range Rover', id: 'range-rover', className: '-hide-s' },
				]}
			/>
			<Demos currentDemo="automotive" headline="More demo Shops" />
		</Page>
	);
}