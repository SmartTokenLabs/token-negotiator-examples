/*

to Integrate

import fetch from 'node-fetch';

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const baseURL = "https://eth-mainnet.g.alchemy.com/v2/demo/getNFTs/";
const ownerAddr = "0xfAE46f94Ee7B2Acb497CEcAFf6Cff17F621c693D";
const fetchURL = `${baseURL}?owner=${ownerAddr}`;

fetch(fetchURL, requestOptions)
  .then(response => response.json())
  .then(response => JSON.stringify(response, null, 2))
  .then(result => console.log(result))
  .catch(error => console.log('error', error))

*/

import { requiredParams, splitOnChainKey } from './../utils/index';

export class OnChainTokenModule {

    // chainSupport: { openSea: string[]; alchemy: string[]; moralis: string[]; };

    constructor() {
        
        // Not used at this time.
        const apiLookup = [
            {
                name: 'openSea',
                supports: [
                    'mainnet', 
                    'rinkeby'
                ]
            },
            { 
                name: 'alchemy', 
                supports: [
                    'mainnet', 
                    'rinkeby', 
                    'arbitrum', 
                    'polygon', 
                    'optimism'
                ] 
            },
            { 
                name: 'moralis', 
                supports: [
                    'mainnet', 
                    'rinkeby',
                    'ropsten',
                    'goerli',
                    'kovan',
                    'bsc',
                    'polygon',
                    'mumbai',
                    'avalanche',
                    'fantom'
                ]
            }
        ]
        
        // TODO add support for Polygon & XDAI.

    }

    /**
     * @function getInitialContractAddressMetaData
     * @description returns initial contract address data collection name & image.
     * @param {String} issuerKey a concatenated string of the smart contract address and the chain.
     * @example issuerKey example: 0x381748c76f2b8871afbbe4578781cd24df34ae0d-rinkeby
     * @returns from searching API's
     * {
                chain: "rinkeby",
                contractAddress: "0x381748c76f2b8871afbbe4578781cd24df34ae0d",
                emblem: "https://storage.googleapis.com/opensea-rinkeby/0x381748c76f2b8871afbbe4578781cd24df34ae0d.png",
                title: "OpenSea Creature Sale"
        }
    */
    async getInitialContractAddressMetaData (issuerKey:string) {

        const { address, chain, slug } = splitOnChainKey(issuerKey);

        let collectionData = null;

        if (slug) {
            collectionData = await this.getContractDataOpenSea(address, chain, slug);
        }

        return collectionData;

        // TODO - use strategy to locate data
        // 1. Opensea
        // 2. Moralis
        // 3. Alchemy
        // 4. etc.d

    }

    /**
     * @function getContractDataOpenSea
     * @description returns from OpenSea API initial contract address data collection name & image.
     * @param {string} contractAddress smart contract address
     * @param {string} chain chain name used to search via api
     * @returns 
     * {
                chain: "rinkeby",
                contractAddress: "0x381748c76f2b8871afbbe4578781cd24df34ae0d",
                emblem: "https://storage.googleapis.com/opensea-rinkeby/0x381748c76f2b8871afbbe4578781cd24df34ae0d.png",
                title: "OpenSea Creature Sale"
        }
    */
    async getContractDataOpenSea(contractAddress:string, chain:string, slug:string) {

        // TODO iterate through all owner nfts

        const options = { method: 'GET' };

        /*
            {
                chain: "rinkeby"
                contract: "0x381748c76f2b8871afbbe4578781cd24df34ae0d"
                contractAddress: "0x381748c76f2b8871afbbe4578781cd24df34ae0d"
                emblem: "https://storage.googleapis.com/opensea-rinkeby/0x381748c76f2b8871afbbe4578781cd24df34ae0d.png"
                title: "OpenSea Creature Sale"
            }
        */

        if(chain.toLocaleLowerCase() === "rinkeby") {
            return fetch(`https://rinkeby-api.opensea.io/api/v1/assets?asset_contract_address=${contractAddress}&collection=${slug}&order_direction=desc&offset=0&limit=20`, options)
            .then(response => response.json())
            .then(response => {
                console.log('res', response);
                return  {
                    chain,
                    contractAddress,
                    emblem: response.assets[0].collection.image_url,
                    title: response.assets[0].collection.name
                };
            })
            .catch(err => console.error(err));
        
        } 

        if(chain.toLocaleLowerCase() === "mainnet") {

            // ...

        }

    }

    async connectOnChainToken (issuerKey:string, owner:string) {

        const { address, chain } = splitOnChainKey(issuerKey);

        // return [
        //     {
        //         chain: "rinkeby",
        //         contract: "0x381748c76f2b8871afbbe4578781cd24df34ae0d",
        //         emblem: "https://storage.googleapis.com/opensea-rinkeby/0x381748c76f2b8871afbbe4578781cd24df34ae0d.png",
        //         title: "OpenSea Creature Sale"
        //     }
        // ];

        return this.getTokensOpenSea(address, chain, owner);

    }

    async getTokensOpenSea(address:string, chain:string, owner:string, offset=0, limit=20) {

        requiredParams((chain && address && owner), 'cannot search for tokens, missing params');

        const options = {
            method: 'GET',
            headers: { Accept: 'application/json', 'X-API-KEY': '5bec8ae0372044cab1bef0d866c98618' }
        };

        if(chain === 'rinkeby') {

            const options = {method: 'GET'};

            return fetch('https://testnets-api.opensea.io/api/v1/assets?owner=0x647935c1bfa643d27afe0f32a5357975b56b771d&asset_contract_address=0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656&order_direction=desc&offset=0&limit=20', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                return response.assets;
            })
            .catch(err => console.error(err));

            // return fetch(`https://rinkeby-api.opensea.io/api/v1/assets?owner=${address}&asset_contract_address=${address}&order_direction=desc&offset=${offset}&limit=${limit}`, options)
            // .then(response => response.json())
            // .then(response => {
            //     console.log('response', response);
            //     return response;
            // })
            // .catch(err => console.error(err));
            
        }
        
        // if(chain === 'mainnet') {

        //     fetch(`https://api.opensea.io/api/v1/assets?owner=${ownerAddress}&asset_contract_address=${contractAddress}&order_direction=desc&offset=${offset}&limit=${limit}`, options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));

        // } else {

        //     requiredParams(null, 'chain is not supported');

        // }

    }

    async getTokensAlchemy () {

    }

}

export default OnChainTokenModule;


