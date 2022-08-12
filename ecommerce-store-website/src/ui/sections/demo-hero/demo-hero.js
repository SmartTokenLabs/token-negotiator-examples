
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// App
import { Hero } from 'ui/sections';

//	Styles
import styles from "./demo-hero.module.scss";


//
//	Brand Connector Demo / UI / Sections / Demo Hero
//


export default function DemoHero({ children, className, ...rest }) {
	return (
		<Hero className={ clsx( styles[ 's-demo-hero' ], className ) } { ...rest }>
			{ children && children }
		</Hero>
	)
}

DemoHero.propTypes = {
	children: PropTypes.node,
}
