

// App
import { FashionView } from 'ui/views';
import { useStore } from 'base/state';

//
//	Brand Connector Demo / Pages / Fashion
//

export default function Fashion( props ) {
	const tokenNegotiatorInstance = useStore( s => s.tokenNegotiatorInstance );
	const api = useStore( s => s.api );
	api.setIsNegotiatorReady( true );
	if(tokenNegotiatorInstance) tokenNegotiatorInstance.negotiate();
	return <FashionView { ...props } />;
}


