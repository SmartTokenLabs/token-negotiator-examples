
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Styles
import styles from './list.module.scss';


//
//	Brand Connector Demo / UI / Components / List
//


export default function List({ children, format, orientation, className }) {
	const formatClass = { [ `-format-${ format }` ]: format };
	const Component = format === 'ordered' ? 'ol' : 'ul';

	return (
		<Component className={ clsx( styles[ 'c-list' ], className, formatClass, orientation === 'horizontal' && styles[ '-style-horizontal' ] ) }>
			{ React.Children.map( children, ( c ) =>  c ) }
		</Component>
	)
}

export function ListItem({ children, className, ariaHidden }) {
	return (
		<li className={ className } aria-hidden={ ariaHidden }>
			{ children }
		</li>
	);
}

List.Item = ListItem;
ListItem.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	ariaHidden: PropTypes.bool,
};

List.propTypes = {
	orientation: PropTypes.string,
	format: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
};
