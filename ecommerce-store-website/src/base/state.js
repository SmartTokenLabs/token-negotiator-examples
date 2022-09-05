
//	Dependencies
import create from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware'
import _debounce from 'lodash-es/debounce';
import _isNil from 'lodash-es/isNil';


//
//	Brand Connector Demo / Base / State
//


export const useStore = create( subscribeWithSelector( set => ({
	imagesLoaded: 0,

	isContextOpen: false,
	contextView: null,
	contextProps: null,

	selectedTokens: {},
	isNegotiatorReady: false,
	tokenNegotiatorInstance: null,

	api: {
		setImageLoaded: () => set( state => ({
			imagesLoaded: state.imagesLoaded + 1,
		})),

		setContextView: ( contextView, contextProps ) => set( state => {
			const _isToggleClosed = state.contextView === contextView;
			return {
				isContextOpen: !_isToggleClosed && !_isNil( contextView ),
				contextView: _isToggleClosed ? null : contextView,
				contextProps: _isToggleClosed ? null : contextProps,
			};
		}),
		setIsNegotiatorReady: ( isNegotiatorReady )=> set( () => ({ isNegotiatorReady }) ),
		setSelectedTokens: ( selectedTokens ) => { set( () => ({ selectedTokens: selectedTokens }) ) },
		setTokenNegotiatorInstance: ( tokenNegotiatorInstance ) => { set( () => ({ tokenNegotiatorInstance }) ) },
	},
}) ));
