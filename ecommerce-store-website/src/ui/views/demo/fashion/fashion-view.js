
// Depenencies
import clsx from 'clsx';

// App
import { useStore } from "base/state";
import { checkNFTEligibility } from "base/utils";
import { Page } from 'ui/app';
import { Animation, ActivationBanner, Nav, Tag, Image, Headline, ProductItem } from 'ui/components';
import { DemoHeader, DemoHero, BrandsList, Demos } from 'ui/sections';

// Styles
import styles from "./fashion-view.module.scss";


//
//	Brand Connector Demo / UI / Views / Fashion
//


export default function Fashion() {
	const meta = {
		title: 'Fashion Store | Brand Connector Demo',
	};

	const exclusiveProducts = [
		{ image: { src: '/images/fashion-exclusive-1.jpg', height: 686, width: 594 }, title: 'Jimmy Choo Mugler Knee Sandal', description: 'Gold Liquid Metal Leather Sandals with Gold Chain Fringes', price: 3700.00 },
		{ image: { src: '/images/fashion-exclusive-2.jpg', height: 686, width: 594 }, title: 'Jimmy Choo Micro Bon Bon', description: 'Black Smooth Nappa Mini Bag', price: 1149.99 },
		{ image: { src: '/images/fashion-exclusive-3.jpg', height: 686, width: 594 }, title: 'Jimmy Choo Azia 95', description: 'Malibu Liquid Metal Leather Sandals', price: 1295.00 },
	];

	const products = [
		{ image: { src: '/images/fashion-item-1.jpg', height: 686, width: 594 }, title: 'Statement - Lili Midi Dress', description: 'Dress like you do in your wildest dreams in the Lilly Midi Dress.', price: 119.99 },
		{ image: { src: '/images/fashion-item-2.jpg', height: 686, width: 594 }, title: 'Real Vibes - Wrap Garden Dress', description: 'A gorgeous spring event dress, this Red Gardens Dress from Real Vibes is an event essential', price: 190.00 },
		{ image: { src: '/images/fashion-item-3.jpg', height: 686, width: 594 }, title: 'Ask Judy - Coat', description: 'Beat the chill without sacrificing style is this Black wool blend detailed coat.', price: 139.99 },
		{ image: { src: '/images/fashion-item-4.jpg', height: 686, width: 594 }, title: 'Lux Looks - Teal Dress', description: 'This teal modern design; delivers a simplified, well-made look for an audience who craves a relaxed coastal lifestyle.', price: 239.99 },
		{ image: { src: '/images/fashion-item-5.jpg', height: 686, width: 594 }, title: 'Statement - Two-piece Outfit', description: 'This piece black outfit for a casual occasion or pair with heels for a more sophisticated look.', price: 179.00 },
		{ image: { src: '/images/fashion-item-6.jpg', height: 686, width: 594 }, title: 'Surfer Girl - Straw Hat', description: 'Complete your summer style with the Sonny Hand Knotted Straw Hat by Surfer Girl.', price: 49.99 },
	];

	const selectedTokens = useStore( s => s.selectedTokens );
	const promotionEnabled = checkNFTEligibility( selectedTokens, [ 'world-of-women' ] );

	return (
		<Page className={ styles[ 'v-fashion' ] } meta={ meta }>
			<DemoHeader className="-t-light" headline="Fashion Store">
				<Nav className="f7 -my0 -color-text-mid">
					<Nav.Item>New Arrivals</Nav.Item>
					<Nav.Item>Dresses</Nav.Item>
					<Nav.Item>Tops</Nav.Item>
					<Nav.Item>Jackets</Nav.Item>
					<Nav.Item>Lingerie & Lounge Wear</Nav.Item>
					<Nav.Item>Beach Wear</Nav.Item>
					<Nav.Item>Blouse</Nav.Item>
					<Nav.Item>Denim</Nav.Item>
					<Nav.Item>Vintage</Nav.Item>
				</Nav>
			</DemoHeader>
			<DemoHero className={ clsx( styles[ 'v-fashion_hero' ] ) } image="/images/fashion-bg.jpg">
				<div className="grid -g-cols-3 -g-max-10">
					<div className="-g-cols-fill-2">
						<div className={ styles[ 'v-fashion_hero-logo' ] }>
							<Image src="/images/jimmy-choo-wow.png" height={ 70 } width={ 658 } />
						</div>
						<div className="-g-max-5">
							<h2 className="-mt5">Exclusive Jimmy Choo early access for WOW NFT Holders</h2>
							<p>Available exclusively to World of Women NFT Holders.</p>
							<Tag size="m" className="f8 -mt0 -style-light-blue -f-medium">2 days left</Tag>
						</div>
					</div>
					<div className="-hide-s">
						<Image className={ styles[ 'v-fashion_hero-image' ] } src="/images/jimmy-choo-shoes.png" width={ 756 } height={ 750 } alt="Jimmy Choo shoes" />
					</div>
				</div>
			</DemoHero>
			<ActivationBanner />

			{ promotionEnabled && (
				<Animation.ScrollReveal>
					<section className={ clsx( styles[ 'v-fashion_promotion' ], 'section -ps -t-purple' ) }>
						<div className={ clsx( styles[ 'v-fashion_promotion-description' ], 'grid -g-cols-2 -g-max-10 -mb6' ) }>
							<h2 className="f4">Exclusive Jimmy Choo early access for WOW NFT Holders</h2>
							<Image className={ styles[ 'v-fashion_promotion-image' ] } src="/images/wow.jpg" alt="World of Women" height={ 260 } width={ 696 } />
						</div>
						<div className="grid -g-cols-3 -g-max-10">
							{ exclusiveProducts && exclusiveProducts.map( ( product, i ) => (
								<ProductItem key={ `exclusive-item-${ i }` } product={ { ...product, tag: 'exclusive' } } />
							))}
						</div>
					</section>
				</Animation.ScrollReveal>
			)}

			<section className="section -t-light -pbs">
				<div className="grid -g-cols-1 -g-max-10">
					<Headline type="h3" className="f5 -f-caps -a-center -style-underline -mxa -mb6">Popular this week</Headline>
				</div>
				<div className="grid -g-cols-3 -g-max-10">
					{ products && products.map( ( product, i ) => (
						<ProductItem key={ `fashion-item-${ i }` } product={ { ...product, tag: 'new' } } />
					))}
				</div>
			</section>
			<BrandsList
				className="-t-light -pt0"
				headline="Brands"
				logos={[
					{ src: '/images/jimmy-choo.png', height: 144, width: 144, alt: 'Jimmy Choo', id: 'jimmy-choo' },
					{ src: '/images/chanel.png', height: 172, width: 230, alt: 'Chanel', id: 'chanel' },
					{ src: '/images/bvlgari.png', height: 50, width: 312, alt: 'Bvlgari', id: 'bvlgari' },
					{ src: '/images/dg.png', height: 92, width: 196, alt: 'Dolce & Gabbana', id: 'dolce' },
					{ src: '/images/prada.png', height: 180, width: 236, alt: 'Prada', id: 'prada' },
					{ src: '/images/louis-vuitton.png', height: 106, width: 432, alt: 'Louis Vuitton', id: 'louis-vuitton' },
				]}
			/>
			<Demos currentDemo="fashion" headline="More demo Shops" />
		</Page>
	);
}
