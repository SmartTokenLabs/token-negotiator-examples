

// App
import { AutomotiveView } from 'ui/views';
import { useStore } from 'base/state';

//
//	Brand Connector Demo / Pages / Automotive
//

export default function Automotive( props ) {
	const tokenNegotiatorInstance = useStore( s => s.tokenNegotiatorInstance );
	const api = useStore( s => s.api );
	api.setIsNegotiatorReady( true );
	if(tokenNegotiatorInstance) tokenNegotiatorInstance.negotiate();
	return <AutomotiveView { ...props } />;
}


