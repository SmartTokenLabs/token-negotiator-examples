
export function updateNegotiatorIssuers( issuers, onReady ) {
	let intId = setInterval( () => {
		if ( window.negotiator ){
			clearInterval( intId );
			window.negotiator.negotiate( issuers );
			onReady && onReady();
		}
	}, 1000);
}
