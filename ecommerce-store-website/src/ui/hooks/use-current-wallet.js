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
	if ( isServer() ) return [];

	let walletAddress = '';
	let walletProvider = '';
	let status = 'Could not find a connected wallet.';
	let nftCollections = nftDataStore;
	let chain = '';

	if(window.connectedWallet) {

		walletAddress = window.connectedWallet.address;
		status = '';
		chain = chainMap[ window.connectedWallet.chainId ] ? chainMap[ window.connectedWallet.chainId ] : 'unsupported chain: ' + window.connectedWallet.chainId;
		walletProvider = window.connectedWallet.provider;

	}

	return [ 
		walletAddress, 
		nftCollections, 
		chain, 
		status,
		walletProvider
	];
}

