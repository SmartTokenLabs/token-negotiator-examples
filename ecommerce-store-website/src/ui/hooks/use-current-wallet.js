// Dependencies
import { useState, useEffect } from 'react';

// App
import { isServer } from 'base/utils';
import { getCurrentWalletConnected } from "base/utils/interact.js";
import { chainMap } from 'base/utils/network';
import nftDataStore from 'base/nft-data-store';


//
//	Brand Connector Demo / UI / App / Hooks / Current Wallet
//


export default function useCurrentWallet() {
	if ( isServer() ) return [];

	const [ walletAddress, setWallet ] = useState( '' );
	const [ status, setStatus ] = useState( '' );
	const [ nftCollections, setNFTCollections ] = useState( [] );
	const [ chain, setChain ] = useState( '' );

	function addWalletListener() {
		if ( window.ethereum ) {
			window.ethereum.on( 'chainChanged', ( chainId ) => {
				setChain( chainMap[ chainId ] ? chainMap[ chainId ] : 'unsupported chain: ' + chainId );
			});
			window.ethereum.on( 'accountsChanged', ( accounts ) => {
				if ( accounts.length > 0 ) {
					setWallet( accounts[ 0 ]);
					setStatus('');
				} else {
					setWallet( '' );
					setStatus( 'You must connect to Metamask, Torus or Wallet Connect to be able to request tokens.' );
				}
			});
		}
	}

	useEffect(async () => {
		getCurrentWalletConnected().then((res) => {
			const { address, status } = res;
			setWallet( address )
			setStatus( status );
			addWalletListener();
			setNFTCollections( nftDataStore );
			setTimeout( () => {
				if( window.ethereum && window.ethereum.chainId ){
					setChain( chainMap[ window.ethereum.chainId ] ? chainMap[ window.ethereum.chainId ] : 'unsupported chain: ' + window.ethereum.chainId );
				}
			}, 2000);
		});
	}, []);

	return [ walletAddress, nftCollections, chain, status ];
}

