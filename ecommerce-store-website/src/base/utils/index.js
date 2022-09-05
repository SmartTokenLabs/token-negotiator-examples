
//
//	Brand Connector Demo / Base / Utils
//


export function isServer() {
	return typeof window === 'undefined';
}

export function isClient() {
	return !isServer();
}

export function checkNFTEligibility( tokens, eligibleNFTs = [] ) {
	if ( !eligibleNFTs.length ) return false;
	return eligibleNFTs.some( nft => tokens[ nft ] && tokens[ nft ].tokens.length > 0 );
}
