
//	Dependencies
import Router from 'next/router';
import create from 'zustand';


//
//	TokenScript / Base / State
//


export const useStore = create( set => ({
	isMenuOpen: false,
	selectedTokens: {},
	api: {
		toggleMenuView: ( ) => { set( ( state ) => ({ isMenuOpen: !state.isMenuOpen }) ) },
		closeMenuView: ( ) => { set( () => ({ isMenuOpen: false }) ) },
		setSelectedTokens: ( selectedTokens ) => { set( () => ({ selectedTokens: selectedTokens }) ) }
	},
}) );

const state = useStore.getState();

function handleRouteChange() {
	state.api.closeMenuView();
}

Router.events.on( 'routeChangeStart', handleRouteChange );
