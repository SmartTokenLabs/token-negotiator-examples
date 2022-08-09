
//	Dependencies
import PropTypes from 'prop-types';
import clsx from 'clsx';

// App
import { Tag, Image } from 'ui/components';

//	Styles
import styles from "./product-item.module.scss";


//
//	Brand Connector Demo / UI / Components / Product Item
//


export default function ProductItem({ product, className, discountEnabled }) {

	const tag = product?.tag;
	const tagsObj = {
		new: { text: 'New Arrival', style: '-style-dark' },
		exclusive: { text: 'NFT Exclusive' },
		featured: { text: 'Featured', style: '-style-dark', className: '-format-featured', theme: 'dark' },
		trending: { text: 'trending', className: '-format-trending', style: '-style-dark' },
	};

	const showSalePrice = discountEnabled && product?.salePrice;
	const isFeatured = tag === 'featured';

	return (
		<div className={ clsx(
			styles[ 'c-product-item' ],
			styles[ tagsObj[ tag ]?.className ],
			{ [ `-t-${ tagsObj[ tag ]?.theme }` ]: tagsObj[ tag ]?.theme },
			className
		 )}>
			{ product?.image && (
				<div className={ styles[ 'c-product-item_image' ] }>
					{ tag && <Tag className={ clsx( styles[ 'c-product-item_tag' ], 'f9 -f-caps -f-medium -style-square', tagsObj[ tag ]?.style ) }>{ tagsObj[ tag ]?.text }</Tag> }
					<Image src={ product?.image.src } alt={ product?.image?.alt } height={ product?.image?.height } width={ product?.image?.width } objectFit={ isFeatured && 'cover' } layout={ isFeatured && 'fill' } />
				</div>
			)}
			<div className={ clsx( styles[ 'c-product-item_content' ] ) }>
				{ product?.title && (
					<h2 className="f6 -f-family-rubik -my0">{ product.title }</h2>
				)}
				{ product?.description && (
					<p className={ clsx( styles[ 'c-product-item_description' ], 'f7 -my1' ) }>{ product.description }</p>
				)}
				<div className={ styles[ 'c-product-item_price' ] }>
					{ showSalePrice && (
						<p className={ clsx( styles[ 'c-product-item_price-sale' ], 'f5 -f-family-neueplak' ) }>
							${ product.salePrice.toFixed(2) }{ product?.priceTag && <span className="f6">/{ product?.priceTag }</span> }
						</p>
					)}
					{ product?.price && (
						<p className="f5 -f-family-neueplak">
							${ product.price.toFixed(2) }{ ( !showSalePrice && product?.priceTag ) && <span className="f6">/{ product?.priceTag }</span> }
						</p>
					)}
				</div>
				{ ( showSalePrice && product?.saleSubText ) && (
					<small className={ clsx( styles[ 'c-product-item_price-subtext' ], 'f9 -f-caps -f-medium' ) }>{ product.saleSubText }</small>
				)}
			</div>
		</div>
	)
}

ProductItem.propTypes = {
	product: PropTypes.object,
	className: PropTypes.string,
	discountEnabled: PropTypes.bool,
	saleSubText: PropTypes.string,
}
