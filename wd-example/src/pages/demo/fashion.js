
// App
import { Page } from 'ui/app';
import { Link, ProductItem, Banner } from 'ui/components';


//
//	TokenScript / Pages / Demo / Fashion
//


export default function Fashion() {
	const meta = {
		title: 'Fashion Store Demo | TokenScript',
		ogTitle: 'Fashion Store Demo | TokenScript',
	};

	const products = [
		{ title: 'Topshop casual shirt in khaki', price: 69.90, image: { src: '/images/fashion-product-1.jpg', alt: '' } },
		{ title: 'Natural crinkle top with side ties in oatmeal', price: 69.90, image: { src: '/images/fashion-product-2.jpg', alt: '' } },
		{ title: 'Long sleeve blouse with pocket detail in black', price: 69.90, image: { src: '/images/fashion-product-3.jpg', alt: '' } },
		{ title: 'Topshop casual shirt in khaki', price: 69.90, image: { src: '/images/fashion-product-1.jpg', alt: '' } },
		{ title: 'Natural crinkle top with side ties in oatmeal', price: 69.90, image: { src: '/images/fashion-product-2.jpg', alt: '' } },
		{ title: 'Long sleeve blouse with pocket detail in black', price: 69.90, image: { src: '/images/fashion-product-3.jpg', alt: '' } },
	];

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
					/>
				</div>
				<div className="grid -g-cols-3">
					{ products.map( ( p, i ) => <ProductItem key={ i } product={ p } /> ) }
				</div>
			</section>
		</Page>
	);
};
