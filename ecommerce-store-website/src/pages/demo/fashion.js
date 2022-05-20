
// App
import { Page } from 'ui/app';
import { Link, ProductItem, Banner } from 'ui/components';
import { useStore } from "src/base/state";


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

	const selectedTokens = useStore( s => s.selectedTokens );

	function magEligible(){

		let tokens = selectedTokens;

		if (!tokens) return false;

		return (tokens["stl-nifty"] && tokens["stl-nifty"].tokens.length > 0) &&
				(tokens["women-tribe"] && tokens["women-tribe"].tokens.length > 0);
	}

	function productsEligible(){

		let tokens = selectedTokens;

		if (!tokens) return false;

		return (tokens["stl-nifty"] && tokens["stl-nifty"].tokens.length > 0) ||
			(tokens["women-tribe"] && tokens["women-tribe"].tokens.length > 0);
	}

	return (
		<Page meta={ meta }>
			<section className="section">
				<div className="grid -g-cols-1 -a-center">
					<h1>Fashion Store</h1>
					<p className="-mt0 -mb6">Use “STLWomenTribe” or ”STLNifty” tokens. Don’t have them? <Link href="/request-tokens">Request</Link></p>
				</div>
				<div className="grid -g-cols-1">
					<Banner
						className="-mb3 -style-center"
						theme="dark"
						image={{ src: '/images/vogue-graphics.png' }}
						headline="10% Off Vogue Magazine Subscription"
						text="With supporting text below as a natural lead-in to additional content."
						fineprint="Available for 2 more days - exclusive to STL Nifty + Women Tribe holders"
						buttonText="Claim"
						onClick={ () => {} }
						enabled={magEligible()}
						selectedTokens={selectedTokens}
						authTokens={["stl-nifty"]}
					/>
				</div>
				<div className="grid -g-cols-3">
					{ products.map( ( p, i ) =>
						<ProductItem key={ i } product={ p }
									 discountEnabled={productsEligible()}
									 selectedTokens={selectedTokens}
									 authTokens={["stl-nifty", "women-tribe"]} /> )
					}
				</div>
			</section>
		</Page>
	);
};
