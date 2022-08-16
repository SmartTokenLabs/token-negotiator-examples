

// App
import { MusicAndEventsView } from 'ui/views';
import { useStore } from 'base/state';
//
//	Brand Connector Demo / Pages / Music and Events
//

export default function MusicAndEvents( props ) {
	const tokenNegotiatorInstance = useStore( s => s.tokenNegotiatorInstance );
	const api = useStore( s => s.api );
	api.setIsNegotiatorReady( true );
	if(tokenNegotiatorInstance) tokenNegotiatorInstance.negotiate();
	return <MusicAndEventsView { ...props } />;
}


