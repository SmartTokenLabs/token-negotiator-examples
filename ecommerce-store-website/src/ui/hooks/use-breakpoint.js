
//	Dependencies
import _ from 'lodash-es';

// App
import { usePropertyValues } from './';


//
//	Brand Connector Demo / UI / App / Hooks / Breakpoint
//


export default function useBreakpoint() {
	const breakpoint = usePropertyValues([{ propertyValue: '--breakpoint' }])[ 0 ];
	if ( !breakpoint ) return 'default';
	return breakpoint
}
