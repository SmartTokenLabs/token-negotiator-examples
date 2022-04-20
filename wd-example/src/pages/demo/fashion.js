
// App
import { Page } from 'ui/app';
import { Link, ProductItem, Banner } from 'ui/components';
import { useEffect, useState } from "react";


//
//	TokenScript / Pages / Demo / Fashion
//


export default function Fashion() {
	const meta = {
		title: 'Fashion Store Demo | TokenScript',
		ogTitle: 'Fashion Store Demo | TokenScript',
	};

	const products = [
		{ title: 'Topshop casual shirt in khaki', price: 69.90, discountPrice: 49.90, image: { src: '/images/fashion-product-1.jpg', alt: '' } },
		{ title: 'Natural crinkle top with side ties in oatmeal', price: 69.90, discountPrice: 49.90, image: { src: '/images/fashion-product-2.jpg', alt: '' } },
		{ title: 'Long sleeve blouse with pocket detail in black', price: 69.90, discountPrice: 49.90, image: { src: '/images/fashion-product-3.jpg', alt: '' } },
		{ title: 'Topshop casual shirt in khaki', price: 69.90, discountPrice: 49.90, image: { src: '/images/fashion-product-1.jpg', alt: '' } },
		{ title: 'Natural crinkle top with side ties in oatmeal', price: 69.90, discountPrice: 49.90, image: { src: '/images/fashion-product-2.jpg', alt: '' } },
		{ title: 'Long sleeve blouse with pocket detail in black', price: 69.90, discountPrice: 49.90, image: { src: '/images/fashion-product-3.jpg', alt: '' } },
	];

	const [selectedTokens, setSelectedTokens] = useState();

	useEffect(()=> {

		const init = async () => {

			const { Client } = (await import("@tokenscript/token-negotiator"));

			window.negotiator = new Client({
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

			window.negotiator.negotiate();

			window.negotiator.on("tokens-selected", (data) => {
				setSelectedTokens({...data.selectedTokens});
			});
		};

		if (document.getElementsByClassName("overlay-tn")[0].childElementCount === 0)
			init();
	});

	function magEligible(){

		let tokens = selectedTokens;

		if (!tokens) return false;

		return (tokens["rinkeby-punk"] && tokens["rinkeby-punk"].tokens.length > 0) &&
				(tokens["women-tribe"] && tokens["women-tribe"].tokens.length > 0);
	}

	function productsEligible(){

		let tokens = selectedTokens;

		if (!tokens) return false;

		return (tokens["rinkeby-punk"] && tokens["rinkeby-punk"].tokens.length > 0) ||
			(tokens["women-tribe"] && tokens["women-tribe"].tokens.length > 0);
	}

	return (
		<Page meta={ meta }>
			<section className="section">
				<div className="grid -g-cols-1 -a-center">
					<h1>Fashion Store</h1>
					<p className="-mt0 -mb6">Use “STL RnD Women Tribe NFTs” or ”Rinkby Punk” tokens. Don’t have them? <Link href="/request-tokens">Request</Link></p>
				</div>
				<div className="grid -g-cols-1">
					<Banner
						className="-mb3 -style-center"
						theme="dark"
						image={{ src: '/images/vogue-graphics.png' }}
						headline="10% Off Vogue Magazine Subscription"
						text="With supporting text below as a natural lead-in to additional content."
						fineprint="Available for 2 more days - exclusive to BAYC Derivative + Women Tribe holders"
						buttonText="Claim"
						onClick={ () => {} }
						enabled={magEligible()}
					/>
				</div>
				<div className="grid -g-cols-3">
					{ products.map( ( p, i ) => <ProductItem key={ i } product={ p } discountEnabled={productsEligible()} /> ) }
				</div>
			</section>
			<div className="overlay-tn"/>
		</Page>
	);
};
