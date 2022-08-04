
//	Dependencies
import { useState, useLayoutEffect } from 'react';
import _ from 'lodash-es';


//
//	Brand Connector Demo / UI / App / Hooks / Property Values
//


function formatPropertyValue( pv ) {
	return pv.trim().replace( /^"|"$/g, '' );
}

export function getPropertyValue( propertyValue ) {
	if ( typeof document === 'undefined' ) return '';
	const pv = getComputedStyle( document.documentElement ).getPropertyValue( propertyValue );
	return formatPropertyValue( pv );
}

export function transformPropertyValues( propertyValues ) {
	if ( !propertyValues ) return;
	return _.map( propertyValues, ( value ) => {
		const propertyValue = getPropertyValue( value?.propertyValue );
		const transformValue = value?.transformValue;
		return transformValue ? transformValue( propertyValue ) : propertyValue;
	});
}

export default function usePropertyValues( propertyValues ) {
	const initialValue = transformPropertyValues( propertyValues );
	const [ value, setValue ] = useState( initialValue );

	if ( typeof document !== 'undefined' ) {
		useLayoutEffect( () => {
			let isCancelled = false;
			const _resizeHandler = () => {
				const value = transformPropertyValues( propertyValues );
				!isCancelled && setValue( value );
			}
			if ( !isCancelled ) {
				window.addEventListener( 'resize', _.debounce( _resizeHandler, 500 ), { passive: true });
				_resizeHandler();
			}
			return () => {
				isCancelled = true;
				window.removeEventListener( 'resize', _resizeHandler );
			};
		}, []);
	}
	return value;
}
