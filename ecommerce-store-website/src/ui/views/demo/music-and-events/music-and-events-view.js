
// Dependencies
import clsx from 'clsx';

// App
import { TokenContext } from 'src/providers/TokenContextProvider';
import { checkNFTEligibility } from "base/utils";
import { Page } from 'ui/app';
import { Animation, ActivationBanner, Banner, Nav, Headline, ProductItem } from 'ui/components';
import { DemoHeader, DemoHero, BrandsList, Demos } from 'ui/sections';

//	Styles
import styles from "./music-and-events-view.module.scss";
import { useContext } from 'react';


//
//	Brand Connector Demo / UI / Views / Music and Events View
//



export default function MusicAndEventsView() {
	const meta = {
		title: 'Music and Events Store | Brand Connector Demo',
	};

	const products = [
		{ image: { src: '/images/music-item-1.jpg', height: 862, width: 1306 }, title: 'The Kid Laroi', description: 'End of The World Tour 2022', price: 119.99, salePrice: 100.99, tag: 'featured' },
		{ image: { src: '/images/music-item-2.jpg', height: 612, width: 594 }, title: 'DOJA Cat', description: 'Hot Pink Tour 2022-23, new dates added.', price: 78.99, salePrice: 59.99, tag: 'trending' },
		{ image: { src: '/images/music-item-3.jpg', height: 282, width: 594 }, title: 'JOJI', description: 'Nectar the finale 2022', price: 68.99, salePrice: 49.99 },
		{ image: { src: '/images/music-item-4.jpg', height: 282, width: 594 }, title: 'Dua Lipa', description: 'Future Nostalgia Feat. Elton John 2022', price: 84.99, salePrice: 65.99 },
		{ image: { src: '/images/music-item-5.jpg', height: 282, width: 594 }, title: 'Coachella 2023', description: 'General Access', price: 449.00, salePrice: 430.00 },
	];

	const { tokens: selectedTokens } = useContext(TokenContext)
	const promotionEnabled = checkNFTEligibility(selectedTokens, ['stl-bayc-goerli', 'stl-bayc-mumbai']);

	return (
		<Page className={ styles[ 'v-events' ] } meta={ meta }>
			<DemoHeader className="-t-light" headline="Music & Events Store">
				<Nav className="f7 -my0 -color-text-mid">
					<Nav.Item>Homepage</Nav.Item>
					<Nav.Item>Tours</Nav.Item>
					<Nav.Item>Artists</Nav.Item>
					<Nav.Item>Upcoming</Nav.Item>
					<Nav.Item>Festivals</Nav.Item>
					<Nav.Item>Calendar</Nav.Item>
				</Nav>
			</DemoHeader>
			<DemoHero className={ styles[ 'v-events_hero' ] } image="/images/music-and-events-bg.jpg">
				<div className="grid -g-cols-1 -g-max-8 -a-center">
					<Headline type="h2">Exclusive for BAYC Holders, Coachella VIP Upgrades & 20% off Storewide</Headline>
					<p className={ clsx( styles[ 'v-events_hero-tagline' ], '-color-grey-20' ) }>Available exclusively to BAYC Holders.</p>
				</div>
			</DemoHero>
			<ActivationBanner theme="burnt-orange" />

			<section className="section -t-light -pbs">
				<div className="grid -g-cols-1 -g-max-10 -mb6">
					<Headline type="h3" className="f5 -f-caps -a-center -style-underline -mxa">Upcoming</Headline>
				</div>
				{ promotionEnabled && (
					<Animation.ScrollReveal>
						<div className={ clsx( styles[ 'v-events_vip' ], 'grid -g-cols-1 -g-max-10' ) }>
							<Banner
								className="-t-burnt-orange"
								image="/images/vip-crowd.jpg"
								overlayImage="/images/bayc-monkey.png"
								headline="Exclusive Choachella 2023 VIP Upgrade"
								text="Hotel and VIP Experience"
								selectedTokens={ selectedTokens }
								authTokens={ [ "stl-bayc-goerli", "stl-bayc-mumbai" ] }
							/>
						</div>
					</Animation.ScrollReveal>
				)}
				<div className={ clsx( 'grid -g-cols-1 -g-max-10', styles[ 'v-events_products' ] ) }>
					{ products && products.map( ( product, i ) => (
						<ProductItem
							key={ `music-item-${ i }` }
							product={ { ...product, saleSubText: 'NFT Discount' } }
							discountEnabled={ promotionEnabled }
							selectedTokens={ selectedTokens }
							authTokens={ ["stl-bayc", "stl-mayc", "stl-nifty", "stl-bayc-goerli", "stl-bayc-mumbai"] }
						/>
					))}
				</div>
			</section>
			<BrandsList
				className="-t-light -pt0"
				headline="Popular Brands"
				logos={[
					{ src: '/images/yeezus.png', height: 114, width: 230, alt: 'Yeezus', id: 'yeezus' },
					{ src: '/images/slipknot.png', height: 126, width: 298, alt: 'Slipknot', id: 'slipknot' },
					{ src: '/images/red-hot-chili-peppers.png', height: 178, width: 178, alt: 'Red Hot Chili Peppers', id: 'chili-peppers' },
					{ src: '/images/marshmallow.png', height: 146, width: 178, alt: 'Marshmallow', id: 'marshmallow' },
					{ src: '/images/abba.png', height: 112, width: 296, alt: 'ABBA', id: 'abba' },
					{ src: '/images/bts.png', height: 192, width: 192, alt: 'BTS', id: 'bts' },
				]}
			/>
			<Demos currentDemo="music-and-events" headline="More demo Shops" />
		</Page>
	);
}
