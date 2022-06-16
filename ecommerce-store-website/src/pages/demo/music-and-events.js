
// App
import { Page } from 'ui/app';
import { Link, ProductItem, Banner } from 'ui/components';
import { useStore } from "src/base/state";

import imgMusicProduct1 from "../../../public/images/music-product-1.jpg";
import imgMusicProduct2 from "../../../public/images/music-product-2.jpg";
import imgMusicProduct3 from "../../../public/images/music-product-3.jpg";
import imgVipBadge from "../../../public/images/vip-badge.png";

//
//	TokenScript / Pages / Demo / Music & Events
//


export default function MusicEvents() {
	const meta = {
		title: 'Music & Events Store Demo | TokenScript',
		ogTitle: 'Music & Events Store Demo | TokenScript',
	};

	const products = [
		{ title: 'Ed Sheran Concert Live in Glasgow Music Centre', price: 69.90, discountPrice: 49.90, image: { src: imgMusicProduct1, alt: '' } },
		{ title: 'Metallica live in Amsterdam Live Concert', price: 69.90, discountPrice: 49.90, image: { src: imgMusicProduct2, alt: '' } },
		{ title: 'The Dip and myth of her Live in Sydney', price: 69.90, discountPrice: 49.90, image: { src: imgMusicProduct3, alt: '' } },
		{ title: 'Ed Sheran Concert Live in Glasgow Music Centre', price: 69.90, discountPrice: 49.90, image: { src: imgMusicProduct1, alt: '' } },
		{ title: 'Metallica live in Amsterdam Live Concert', price: 69.90, discountPrice: 49.90, image: { src: imgMusicProduct2, alt: '' } },
		{ title: 'The Dip and myth of her Live in Sydney', price: 69.90, discountPrice: 49.90, image: { src: imgMusicProduct3, alt: '' } },
	];

	const selectedTokens = useStore( s => s.selectedTokens );

	function discountEligible(){

		let tokens = selectedTokens;

		if (!tokens) return false;

		return (tokens["stl-nifty"] && tokens["stl-nifty"].tokens.length > 0) || vipEligible();
	}

	function vipEligible(){

		let tokens = selectedTokens;

		if (!tokens) return false;

		return (
			(tokens["stl-bayc"] && tokens["stl-bayc"].tokens.length > 0) ||
			(tokens["stl-mayc"] && tokens["stl-mayc"].tokens.length > 0)
		);
	}

	return (
		<Page meta={ meta }>
			<section className="section">
				<div className="grid -g-cols-1 -a-center">
					<h1>Music & Events Store</h1>
					<p className="-mt0 -mb6">Use “STLBayc”, "STLMayc" or ”STLNifty” tokens. Don’t have them? <Link href="/request-tokens">Request</Link></p>
				</div>
				<div className="grid -g-cols-1">
					<Banner
						className="-mb3"
						theme="beige"
						image={{ src: imgVipBadge }}
						headline={ <h2 className="f4 -f-medium">20% Off for your next VIP experience</h2> }
						text="With supporting text below as a natural lead-in to additional content."
						fineprint="Available for exclusive to BAYC Derivative holders"
						buttonText="Claim"
						code="XYZ15"
						enabled={vipEligible()}
						selectedTokens={selectedTokens}
						authTokens={["stl-bayc", "stl-bayc"]}
						onClick={ () => {} }
					/>
				</div>
				<div className="grid -g-cols-3">
					{ products.map( ( p, i ) => <ProductItem key={ i } product={ p } discountEnabled={discountEligible()} selectedTokens={selectedTokens} authTokens={["stl-bayc", "stl-mayc", "stl-nifty"]} /> ) }
				</div>
			</section>
		</Page>
	);
};
