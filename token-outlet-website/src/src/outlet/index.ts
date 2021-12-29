import { readMagicUrl, storeMagicURL } from '../core';
import { requiredParams } from '../utils/index';
import { tokenLookup } from './../tokenLookup';
import { decodeTokens, filterTokens } from './../core/index';

interface OutletInterface {
  tokenName: string;
}

declare global {
  interface Window {
      Authenticator: any;
  }
}

export class Outlet {
  authenticator: any;
  config: any;

  constructor(config: OutletInterface) {

    const { tokenName } = config;

    requiredParams(tokenLookup[tokenName], "Please provide the token name");
    
    const { tokenUrlName, tokenSecretName, tokenIdName, itemStorageKey } = tokenLookup[tokenName];

    const tokens = readMagicUrl(tokenUrlName, tokenSecretName, tokenIdName, itemStorageKey);

    storeMagicURL(tokens, itemStorageKey);
    
    // example of storage tokens
    // [{"token":"MIGWMA0MATYCBWE3ap3-AgEABEEEKJZVxMEXbkSZZBWnNUTX_5ieu8GUqf0bx_a0tBPF6QYskABaMJBYhDOXsmQt3csk_TfMZ2wdmfRkK7ePCOI2kgNCAOOZKRpcE6tLBuPbfE_SmwPk2wNjbj5vpa6kkD7eqQXvBOCa0WNo8dEHKvipeUGZZEWWjJKxooB44dEYdQO70Vgc","secret":"45845870684","id":"mah@mah.com","magic_link":"http://localhost:3002/?ticket=MIGWMA0MATYCBWE3ap3-AgEABEEEKJZVxMEXbkSZZBWnNUTX_5ieu8GUqf0bx_a0tBPF6QYskABaMJBYhDOXsmQt3csk_TfMZ2wdmfRkK7ePCOI2kgNCAOOZKRpcE6tLBuPbfE_SmwPk2wNjbj5vpa6kkD7eqQXvBOCa0WNo8dEHKvipeUGZZEWWjJKxooB44dEYdQO70Vgc&secret=45845870684&id=mah@mah.com"}]
 
    this.sendTokens(tokenName);

  };

  prepareTokenOutput ( tokenName:string ) {

    const storageTokens = localStorage.getItem(tokenLookup[tokenName].itemStorageKey);

    if(!storageTokens) return [];

    const decodedTokens = decodeTokens(storageTokens, tokenLookup[tokenName].tokenParser, tokenLookup[tokenName].unsignedTokenDataName);

    // FIXME: add filter
    const filteredTokens = filterTokens(decodedTokens, {});

    return filteredTokens;
    
  }

  sendTokens( tokenName:string ) {

    let opener = window.opener;
		
    let parentURL = document.referrer;
    
    if (opener && parentURL) {

      let pUrl = new URL(parentURL);

      let parentOrigin = pUrl.origin;

      var storageTokens = this.prepareTokenOutput( tokenName );

      opener.postMessage({ evt: "tokens", data: { issuer: 'devcon', tokens: storageTokens || [] }  }, parentOrigin);

    }	

  }

}


