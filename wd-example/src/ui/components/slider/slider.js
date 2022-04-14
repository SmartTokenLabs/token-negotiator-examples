
//	Dependencies
import ReactDOM from 'react-dom';
import React, { useRef, useCallback, useEffect, useMemo } from 'react';
import { useSpring, useSprings, to as interpolate, animated as a } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import create from 'zustand';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import _debounce from 'lodash-es/debounce';
import _clamp from 'lodash-es/clamp';
import _flatten from 'lodash-es/flatten';
import _isPlainObject from 'lodash-es/isPlainObject';

//	App
import { useMeasure } from 'ui/hooks';
import { SliderNav } from './slider-nav';
import { SliderPager } from './slider-pager';

//	Styles
import styles from "./slider.module.scss";


//
//	TokenScript / UI / Components / Slider
//


const FRICTION = 35;


function createStore( initialState ) {
	const {
		currIndex = 0,
		slideCount = 0,
		opacityTo = 1,
		restMargin = 0,
	} = initialState;
	const _hasSlides = slideCount > 0;

	return create( ( set, get ) => ({
		_isEnabled: false,
		_isDragging: false,
		_isStart: true,
		_isEnd: false,
		_isAutoHeight: false,
		_hasSlides,

		slides: [],
		slideCount,
		slideTrackHeights: [],
		slideFriction: 200,
		sliderRestMarginW: restMargin,
		sliderBoundsSlowdown: 0.8,
		opacityTo,
		viewport: [ 0, 0 ],

		currIndex,
		slidesPerPage: 0,
		slideGutterW: 32,

		sliderPageCount: 1,
		slideW: 0,
		sliderW: 0,
		sliderH: 0,
		maxOffsetX: 0,

		api: {
			setViewport: _debounce( viewport => set( () => ({ viewport }) ), 100 ),
			setSlideW: _debounce( w => set( state => {
				const { slideCount, sliderW, currIndex } = state;
				const slideW = Math.round( w );
				return {
					...getDimensions( slideCount, sliderW, slideW, currIndex ),
					slideW,
				};
			}), 100 ),
			setSliderW: w => set( state => {
				const { slideCount, slideW, currIndex } = state;
				const sliderW = Math.round( w );
				return {
					...getDimensions( slideCount, sliderW, slideW, currIndex ),
					sliderW,
				};
			}),
			setSliderH: h => set( ({ _isEnabled }) => {
				if ( !_isEnabled ) return;
				return {
					sliderH: h,
				};
			}),
			setIndex: i => set( ({ slideCount, slidesPerPage }) => {
				const _maxIndex = slideCount - slidesPerPage;
				const _newIndex = _clamp( i, 0, _maxIndex );
				return {
					currIndex: _newIndex,
					_isStart: _newIndex === 0,
					_isEnd: _newIndex === _maxIndex,
				};
			}),
			setSlideCount: _slideCount => set( state => {
				const { slideCount, sliderW, slideW, currIndex } = state;
				if ( _slideCount === slideCount ) return;
				return {
					...getDimensions( _slideCount, sliderW, slideW, currIndex ),
					slideCount: _slideCount,
				};
			}),
			setByPageIndex: pi => {
				const { api, slidesPerPage } = get();
				return api.setIndex( pi * slidesPerPage );
			},
			nextSlide: () => {
				const { api, currIndex } = get();
				return api.setIndex( currIndex + 1 );
			},
			prevSlide: () => {
				const { api, currIndex } = get();
				return api.setIndex( currIndex - 1 );
			},

			trackSlideH: ( i, height ) => set( state => {
				if ( typeof height !== 'number' ) return;

				let { api, slideTrackHeights, currIndex, slidesPerPage } = state;
				slideTrackHeights[ i - currIndex ] = Math.round( height );
				const lastActiveIndex = currIndex + slidesPerPage - 1;

				if ( i === lastActiveIndex ) {
					const maxHeight = slideTrackHeights.reduce( ( p, v ) => ( p > v ? p : v ) );
					api.setSliderH( maxHeight );
					slideTrackHeights = [];
				}
				return { slideTrackHeights };

			}),

			setIsDragging: _isDragging => set( () => ({ _isDragging }) ),
		},
	}) );
}

function getDimensions( slideCount, sliderW, slideW, currIndex ) {
	if ( slideCount === 0 || sliderW === 0 || slideW === 0 ) {
		return { _isEnabled: false };
	}

	const slidesPerPage = Math.max( ( sliderW > 0 && slideW > 0 ) ? Math.floor( sliderW / slideW ) : 1, 1 );
	const sliderPageCount = Math.ceil( slideCount / slidesPerPage );
	const slideGutterW = Math.round( ( sliderW - slideW * slidesPerPage ) / slidesPerPage );
	const maxI = slideCount - slidesPerPage;
	const _isEnabled = ( slideCount > slidesPerPage );

	return {
		_isEnabled,
		sliderW, slideW, slidesPerPage, slideGutterW, sliderPageCount,
		//	Check bounds
		currIndex: _clamp( currIndex, 0, maxI ),
	};
}


function createSliderStore( initialState ) {
	return useMemo( () => createStore( initialState ), []);
}


export default function Slider( props ) {
	let {
		className, children, size, showSliderBarControls = true, activeIndex,
		opacityTo = 1, restMargin = 0, slideClassName, format,
		onSlideChange,
	} = props;

	const sizeClass = { [ `-size-${ size }` ]: size };
	const formatClass = { [ `-format-${ format }` ]: format };

	let sliderRef;

	const slides = _flatten( Array.isArray( children ) ? children : [ children ]);
	const slideCount = slides.length;

	const useSliderState = createSliderStore({
		currIndex: activeIndex,
		slideCount,
		opacityTo: +opacityTo,
		restMargin: +restMargin,
	});

	const api = useSliderState( s => s.api );
	const viewport = useSliderState( s => s.viewport );
	const sliderPageCount = useSliderState( s => s.sliderPageCount );
	const currIndex = useSliderState( s => s.currIndex );
	const slidesPerPage = useSliderState( s => s.slidesPerPage );
	const _isEnabled = useSliderState( s => s._isEnabled );

	if ( typeof document !== 'undefined' ) {

		useEffect( () => {
			const _resizeHandler = () => void api.setViewport([ window.innerWidth, window.innerHeight ]);
			window.addEventListener( 'resize', _resizeHandler, { passive: true });
			return () => window.removeEventListener( 'resize', _resizeHandler );
		}, []);

		useEffect( () => {
			if ( typeof slideCount !== 'number' ) return;
			api.setSlideCount( slideCount );
		}, [ slideCount ]);

		useEffect( () => {
			if ( typeof activeIndex !== 'number' ) return;
			api.setIndex( activeIndex );
		}, [ activeIndex ]);

		useEffect( () => {
			if ( onSlideChange ) onSlideChange({ currIndex, slidesPerPage });
		}, [ currIndex, slidesPerPage ]);

		sliderRef = useCallback( node => {
			if ( !node ) return;
			api.setSliderW( node.getBoundingClientRect().width );
		}, [ viewport ]);
	}

	return (
		<div className={ clsx( styles[ 'c-slider' ], className, sizeClass, formatClass, {[ styles[ '-is-enabled' ]]: _isEnabled })} ref={ sliderRef }>
			<Slides useSliderState={ useSliderState } items={ slides } slideClassName={ slideClassName } />
			{ ( showSliderBarControls && sliderPageCount > 1 ) && (
				<>
					<SliderNav useSliderState={ useSliderState } />
					<SliderPager useSliderState={ useSliderState } />
				</>
			)}
		</div>
	);
}

const Slides = React.memo( function Slides({ useSliderState, items, slideClassName }) {

	const index = useRef( 0 );
	const _isDragging = useRef( false );

	const api = useSliderState( s => s.api );
	const _isEnabled = useSliderState( s => s._isEnabled );
	const slideCount = useSliderState( s => s.slideCount );
	const slidesPerPage = useSliderState( s => s.slidesPerPage );
	const sliderH = useSliderState( s => s.sliderH );
	const slideW = useSliderState( s => s.slideW );
	const sliderRestMarginW = useSliderState( s => s.sliderRestMarginW );
	const sliderBoundsSlowdown = useSliderState( s => s.sliderBoundsSlowdown );
	const slideGutterW = useSliderState( s => s.slideGutterW );
	const opacityTo = useSliderState( s => s.opacityTo );
	const currIndex = useSliderState( s => s.currIndex );

	useEffect( () => {
		index.current = currIndex;
	}, [ currIndex ]);

	const [ sliderSpringProps ] = useSpring({
		height: sliderH,
	}, [ sliderH ]);

	const [ slidesSpringProps, slidesSpringRefs ] = useSprings( slideCount, i => ({
		x: _isEnabled ? i * slideW : 0,
		opacity: 1,
		initial: { x: -100, opacity: 0.01 },
		from: { x: -100, opacity: 0.01 },
		reset: true,
		config: { friction: FRICTION, tension: 150 },
	}), [ slideCount ]);

	const updateSlidesSprings = useCallback( ( cI, isDragging = false, deltaX = 0 ) => {
		if ( slideW <= 0 ) return;
		const _maxI = slideCount - slidesPerPage;
		const _cI = _clamp( cI, 0, _maxI );
		const slideTotalW = slideW + slideGutterW;
		const baseX = index.current * slideTotalW;
		const _minBoundsX = 0;
		const _maxBoundsX = _maxI * slideTotalW;
		const _minBoundsDeltaX = _minBoundsX + baseX;
		const _maxBoundsDeltaX = -1 * _maxBoundsX + baseX;

		slidesSpringRefs.current.map( ( slideSpringRef, i ) => {
			let x = 0;
			let xDelta = 0;
			let xDeltaMod = 0;
			let opacity = 1;
			const _isSlideOutsideBounds = ( i < _cI || i > _cI + slidesPerPage - 1 );
			const dir = i < _cI ? -1 : 1;

			if ( _isEnabled ) {
				if ( isDragging ) {
					xDelta = deltaX;

					if ( xDelta > _minBoundsDeltaX ) {
						xDeltaMod = _minBoundsDeltaX - xDelta;
						xDelta += xDeltaMod * sliderBoundsSlowdown;
					}
					if ( xDelta < _maxBoundsDeltaX ) {
						xDeltaMod = _maxBoundsDeltaX - xDelta;
						xDelta += xDeltaMod * sliderBoundsSlowdown;
					}

				} else if ( _isSlideOutsideBounds ) {
					xDelta = sliderRestMarginW * dir;
				}
				x = -1 * baseX + xDelta;
				opacity = _isSlideOutsideBounds ? opacityTo : 1;
			}

			slideSpringRef.start({ x, opacity });
		});
	}, [ _isEnabled, slidesSpringRefs, slideCount, slideW, slidesPerPage ]);

	useEffect( () => {
		updateSlidesSprings( index.current );
	}, [ currIndex, _isEnabled, slideCount, slidesPerPage, slideW ]);

	const bindGesture = useGesture({
		onDrag: ({ down, movement: [ mX ], first, last }) => {
			if ( first ) {
				_isDragging.current = true;
			} else if ( last ) {
				requestAnimationFrame( () => {
					_isDragging.current = false;
				});
			}

			const indexLive = index.current + Math.round( -mX / slideW );
			updateSlidesSprings( indexLive, down, mX );
		},
		onDragEnd: ( gState ) => {
			if ( !_isPlainObject( gState )) return;

			const distance = gState?.distance?.[0] ?? 0;
			const mX = gState?.movement?.[0] ?? 0;
			const vX = gState?.vxvy?.[0] ?? 0;
			const swipeX = gState?.swipe?.[0];
			const offsetX = index.current * slideW - mX;

			if ( swipeX ) {
				const restingX = offsetX - vX * FRICTION * 2.25;
				const restingI = Math[ swipeX > 0 ? 'min' : 'max' ]( index.current - swipeX, Math.round( restingX / slideW ) );
				index.current = _clamp( restingI, 0, slideCount - slidesPerPage );
			} else if ( distance > slideW / 2 ) {
				index.current = _clamp( index.current + Math.round( -mX / slideW ), 0, slideCount - slidesPerPage );
			}

			api.setIndex( index.current );
			updateSlidesSprings( index.current );
		},
		onClick: ({ event }) => {
			if ( !_isDragging.current ) return;
			if ( event ) {
				event.stopPropagation();
				event.preventDefault();
			}
		},
	}, {
		drag: {
			filterTaps: true,
		},
		eventOptions: { passive: true, capture: true, pointer: false },
		enabled: _isEnabled,
	});

	const height = ( _isEnabled && sliderSpringProps && sliderSpringProps.height > 0 ) ? sliderSpringProps.height.to( h => `${ h }px` ) : 'auto';

	return (
		<a.div className={ clsx( styles[ 'c-slider_panel' ])} { ...bindGesture() } style={{ height }}>
			{ slidesSpringProps && slidesSpringProps.map( ( sp, i ) => {
				const child = items[ i ];
				const slideProps = {};
				if ( sp ) {
					slideProps.springProps = sp;
				}
				return (
					<Slide
						component={ child } key={ i }
						className={ slideClassName }
						slideIndex={ i }
						{ ...slideProps }
						isEnabled={ _isEnabled }
						isCurrent={ i >= currIndex && i < currIndex + slidesPerPage }
						updateWidth={ api.setSlideW }
						updateHeight={ api.trackSlideH }
					/>
				);
			})}
		</a.div>
	);
});


const Slide = React.memo( function Slide({ component, className, isEnabled, isCurrent, slideIndex, springProps, updateWidth, updateHeight }) {
	const { x, opacity } = springProps;
	let bindMeasure = {}, width;

	if ( typeof document !== 'undefined' ) {

		if ( slideIndex === 0 ) {
			[ bindMeasure, { width }] = useMeasure();

			useEffect( () => {
				if ( slideIndex !== 0 || !updateWidth || !width ) return;
				updateWidth( width );
			}, [ width, updateWidth ]);
		}
	}

	return (
		<a.div { ...bindMeasure } className={ clsx( styles[ 'c-slider_slide' ], className )} style={{
			opacity,
			transform: interpolate([ x ], ( x ) => `translate3d(${x}px,0,0)` ),
		}}>
			{ component }
		</a.div>
	);
});

Slider.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	size: PropTypes.oneOf([ 's', 'm', 'l' ]),
	format: PropTypes.string,
	activeIndex: PropTypes.number,
	onSlideChange: PropTypes.func,
	slideClassName: PropTypes.string,
	opacityTo: PropTypes.number,
	restMargin: PropTypes.number,
};
