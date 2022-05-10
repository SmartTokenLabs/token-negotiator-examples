
//	Dependencies
import React from 'react';
import clsx from 'clsx';
import shallow from 'zustand/shallow';

//	Styles
import styles from "./slider.module.scss";


//
//	TokenScript / UI / Components / Slider / SliderPager
//


export const SliderPager = React.memo( function SliderPager({ useSliderState }) {
	if ( !useSliderState ) return;

	const { currIndex, slideCount, slidesPerPage } = useSliderState( s => ({ ...s }), shallow );
	const api = useSliderState( s => s.api );

	const _sliderPagesCount = Math.ceil( slideCount / slidesPerPage );
	const _currentPageIndex = Math.ceil( currIndex / slidesPerPage );

	return (
		<div className={ styles[ 'c-slider_pager' ]}>
			{ Array.from( Array( _sliderPagesCount ) ).map( ( n, i ) => {
				let ariaText = 'View next';
				const _isCurrentPage = _currentPageIndex === i;
				if ( i < _currentPageIndex ) ariaText = 'View previous';
				return (
					<button aria-label={ ariaText } key={ i } type="button" className={ clsx({ [ styles[ '-is-current' ]]: _isCurrentPage }) } onClick={ () => api.setByPageIndex( i ) } />
				);
			})}
		</div>
	);
});
