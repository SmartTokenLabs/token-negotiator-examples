// Dependencies
import { useState, useEffect } from 'react';

// App
import { isServer } from 'base/utils';
import { chainMap } from 'base/utils/network';
import nftDataStore from 'base/nft-data-store';

//
//	Brand Connector Demo / UI / App / Hooks / Current Wallet
//

export default function useCurrentWallet() {
	const [ walletInstance, setWalletInstance ] = useState(null);
	if ( isServer() ) return [];
	const [ walletAddress, setWallet ] = useState( '' );
	const [ status, setStatus ] = useState( '' );
	const [ nftCollections, setNFTCollections ] = useState( [] );
	const [ chain, setChain ] = useState( '' );
	if(typeof window !== 'undefined' && window.negotiator){
		window.negotiator.on('connected-wallet', (connectedWallet) => {
			if(connectedWallet) {
				setChain( chainMap[ connectedWallet.chainId ] ? chainMap[ connectedWallet.chainId ] : 'unsupported chain: ' + connectedWallet.chainId );
				setWallet( connectedWallet.address );
				setStatus(undefined);
				setWalletInstance(connectedWallet);
				window.connectedWallet = connectedWallet;
			} else {
				setChain('');
				setWallet('');
				setStatus( 'You must connect your wallet to continue.' );
				setWalletInstance(null);
			}
		});
	}
	useEffect(async () => {
		setNFTCollections( nftDataStore );
	}, []);
	return [ walletAddress, nftCollections, chain, status, walletInstance ];
}

