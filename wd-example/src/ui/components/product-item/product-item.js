
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


export default function ProductItem({ product, className, onClick }) {
	const [ success, setSuccess ] = useState( false );

	const handleAddToCart = () => {
		setSuccess( true );
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
				{ product?.price && (
					<p className="f5 -f-extra-bold">${ product.price.toFixed(2) }</p>
				)}
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
