
//	Dependencies
import React from 'react';
import clsx from 'clsx';

//	App
import { Button } from 'ui/components';

//	Styles
import styles from "./slider.module.scss";


//
//	TokenScript / UI / Components / Slider / SliderNav
//


export const SliderNavPrevButton = React.memo( function NavPrevButton({ useSliderState, size, iconSize, className }) {
	if ( !useSliderState ) return;

	const api = useSliderState( s => s.api );
	const _isEnabled = useSliderState( s => s._isEnabled );
	const _isStart = useSliderState( s => s._isStart );
	const showPrevBtn = _isEnabled && !_isStart;

	return (
		<div className={ clsx( styles[ 'c-slider_prev' ], { [ styles[ '-is-active' ]]: showPrevBtn }, { [ styles[ '-visually-hidden' ]]: !showPrevBtn })}>
			<Button className={ className } format="icon" tabIndex={ showPrevBtn ? 0 : -1 } aria-label="Previous" icon="chevron-left" size={ size } iconSize={ iconSize } onClick={ () => api.prevSlide() } />
		</div>
	);
});

export const SliderNavNextButton = React.memo( function NavPrevButton({ useSliderState, size, iconSize, className }) {
	if ( !useSliderState ) return;

	const api = useSliderState( s => s.api );
	const _isEnabled = useSliderState( s => s._isEnabled );
	const _isEnd = useSliderState( s => s._isEnd );
	const showNextBtn =  _isEnabled && !_isEnd;

	return (
		<div className={ clsx( styles[ 'c-slider_next' ], { [ styles[ '-is-active' ]]: showNextBtn }, { [ styles[ '-visually-hidden' ]]: !showNextBtn })}>
			<Button className={ className } format="icon" tabIndex={ showNextBtn ? 0 : -1 } aria-label="Next" icon="chevron-right" size={ size } iconSize={ iconSize } onClick={ () => api.nextSlide() } />
		</div>
	);
});

export const SliderNav = React.memo( function SliderNav({ useSliderState }) {
	if ( !useSliderState ) return;

	return (
		<div className={ styles[ 'c-slider_nav' ]}>
			<SliderNavPrevButton className="-style-secondary" size="l" iconSize="m" useSliderState={ useSliderState } />
			<SliderNavNextButton className="-style-secondary" size="l" iconSize="m" useSliderState={ useSliderState } />
		</div>
	);
});
