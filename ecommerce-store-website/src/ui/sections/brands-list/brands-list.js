

//	Dependencies
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

//	App
import { Headline, List, Image } from 'ui/components';

//	Styles
import styles from "./brands-list.module.scss";


//
//	Brand Connector Demo / UI / Sections / Brands List
//


export default function BrandsList({ className, headline, logos }) {
	if ( !logos ) return null;

	return (
		<section className={ clsx( styles[ 's-brands-list' ], 'section', className ) }>
			{ headline && (
				<div className="grid -g-cols-1 -g-max-10 -mb6">
					<Headline type="h3" className="f5 -f-caps -a-center -style-underline -mxa">{ headline }</Headline>
				</div>
			)}
			<List className={ clsx( styles[ 's-brands-list_container' ], 'grid  -g-max-10 -s:g-cols-2',  { [ `-g-cols-${ logos.length}` ]: logos } ) }>
				{ logos.map( ( logo, i ) => (
					<List.Item key={ logo?.id || i } className={ logo?.className }>
						<Image src={ logo?.src } height={ logo?.height } width={ logo?.width } alt={ logo?.alt } />
					</List.Item>
				))}
			</List>
		</section>
	)
}

BrandsList.propTypes = {
	className: PropTypes.string,
	headline: PropTypes.string,
	logos: PropTypes.array,
};
