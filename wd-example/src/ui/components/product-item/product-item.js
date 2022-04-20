
//	Dependencies
import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// App
import { Button, Image } from 'ui/components';

//	Styles
import styles from "./product-item.module.scss";


//
//	TokenScript / UI / Components / Product Item
//


export default function ProductItem({ product, className, onClick, discountEnabled }) {
	const [ success, setSuccess ] = useState( false );

	const handleAddToCart = async() => {
		// TODO: Actually pass the tokens through component
		if (discountEnabled) {
			try {
				await window.negotiator.authenticate({
					issuer: "zed",
					unsignedToken: {name: "some token", desc: "a really cool token"}
				});
			} catch (e) {
				alert(e.message);
				return;
			}
		}

		setSuccess(true);

		if ( onClick ) onClick( product );
	}

	return (
		<div className={ clsx( styles[ 'c-product-item' ], className )}>
			{ product?.image && (
				<div className={ styles[ 'c-product-item_image' ] }>
					<Image src={ product.image.src } alt={ product.image.alt } />
				</div>
			)}
			<div className={ clsx( '-a-center', styles[ 'c-product-item_description' ] ) }>
				{ product?.title && (
					<h2 className="f7 -f-regular -f-family-rubik">{ product.title }</h2>
				)}
				<div className={ styles[ 'c-product-item_priceBox' ] }>
					{ product?.price && (
						<p className="f5 -f-extra-bold" style={{textDecoration: discountEnabled ? "line-through 2px" : "none", display: "inline-block"}}>${ product.price.toFixed(2) }</p>
					)}
					{ discountEnabled && product?.discountPrice && (
						<p className="f5 -f-extra-bold discountPrice" style={{display: "inline-block"}}>${ product.discountPrice.toFixed(2) }</p>
					)}
					<small style={{display: "block"}}>{discountEnabled && product?.discountPrice ? "Exclusive discount for NFT holders!" : "Discounts available for NFT holders"}</small>
				</div>
			</div>
			<Button className={ clsx( '-mxa', success ? '-style-green' : '-style-outline' ) } onClick={ handleAddToCart }>
				{ success ? 'Added' : 'Add to Cart' }
			</Button>
		</div>
	)
}

ProductItem.propTypes = {
	product: PropTypes.object,
	className: PropTypes.string,
	onClick: PropTypes.func,
}
