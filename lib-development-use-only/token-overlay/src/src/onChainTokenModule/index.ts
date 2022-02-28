//@ts-nocheck

import { requiredParams, splitOnChainKey } from './../utils/index';

export class OnChainTokenModule {

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

        // TODO add support XDAI.
        // https://www.xdaichain.com/for-developers/developer-resources/ankr-api

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

        const { address, chain, openSeaSlug } = splitOnChainKey(issuerKey);

        let collectionData = null;

        // try open sea first when there is a slug provided
        if (openSeaSlug) collectionData = await this.getContractDataOpenSea(address, chain, openSeaSlug);

        // if there is no slug or no data try moralis
        if(!openSeaSlug || !collectionData) collectionData = await this.getContractDataMoralis(address, chain);

        // if there is still no data try Alchemy
        if(!openSeaSlug || !collectionData) collectionData = await this.getContractDataAlchemy(address, chain);

        return collectionData;
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
    async getContractDataOpenSea(contractAddress:string, chain:string, openSeaSlug:string) {

        const options = { method: 'GET' };

        if(chain.toLocaleLowerCase() === "rinkeby") {

            return fetch(`https://rinkeby-api.opensea.io/api/v1/assets?asset_contract_address=${contractAddress}&collection=${openSeaSlug}&order_direction=desc&offset=0&limit=20`, options)
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
    
    async getContractDataMoralis(contractAddress:string, chain:string) {

        const options = { 
            method: 'GET',
            headers: {
                'x-api-key': 'WMrMeZLy2pajBLmwf1AUccxFzQy98OEMeDQPaTK8BcTI8XK2f9WZrVpjGYQcujSF' 
            }
        };

        if(chain.toLocaleLowerCase() === "mainnet" || chain.toLocaleLowerCase() === "eth") {

            const _chain = 'eth';

            return fetch(`https://deep-index.moralis.io/api/v2/nft/${contractAddress}?chain=${_chain}&format=decimal&limit=1`, options)
            .then(response => response.json())
            .then(response => {

                const emblem = JSON.parse(response.result[0].metadata).image;

                return {
                    chain,
                    contractAddress,
                    emblem,
                    title: response.result[0].name
                };
            })
            .catch(err => console.error(err));
        
        } 

    }
    
    async getContractDataAlchemy(contractAddress:string, chain:string) {

        var requestOptions = {
            method: 'GET',
            headers: {
                redirect: 'follow'
            }
        };

        const apiKey = "CWaS4PkRjFi3dAzrRD6lsrQ7vAyPYsnU";
        const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}/getNFTsForCollection`;
        const tokenId = "0";
        const withMetadata = "true";
        const fetchURL = `${baseURL}?contractAddress=${contractAddress}&cursorKey=${tokenId}&withMetadata=${withMetadata}`;
    
        const promise = new Promise((resolve, reject) => {
            fetch(fetchURL, requestOptions)
            .then(response => response.json())
            .then((result:any) => {
                
                if(!result.nfts.length) resolve([]);

                resolve({
                    chain,
                    contractAddress,
                    emblem: result.nfts[0].metadata.image,
                    title: result.nfts[0].title
                });
            })
            .catch(error => console.log('error', error)); // reject
            
        });
        return promise;
    }

    async connectOnChainToken (issuerKey:string, owner:string) {

        const { address, chain, openSeaSlug } = splitOnChainKey(issuerKey);

        let tokens = [];

        if(openSeaSlug) tokens = await this.getTokensOpenSea(address, chain, owner);

        if(!openSeaSlug || !tokens.length) tokens = await this.getTokensMoralis(address, chain, owner);

        if(!tokens.length) tokens = await this.getTokensAlchemy(address, chain, owner);

        return tokens;

    }

    async getTokensOpenSea(address:string, chain:string, owner:string, offset=0, limit=20) {

        requiredParams((chain && address && owner), 'cannot search for tokens, missing params');

        if(chain === 'rinkeby') {

            const options = {
                method: 'GET'
            };

            return fetch('https://testnets-api.opensea.io/api/v1/assets?owner=0x647935c1bfa643d27afe0f32a5357975b56b771d&asset_contract_address=0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656&order_direction=desc&offset=0&limit=20', options)
            .then(response => response.json())
            .then(response => {
                return response.assets;
            })
            .catch(err => console.error(err));

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
    
    async getTokensMoralis(address:string, chain:string, owner:string, offset=0, limit=20) {

        requiredParams((chain && address && owner), 'cannot search for tokens, missing params');

        let _chain:string = chain;

        if (chain === 'mainnet') _chain = 'eth';

        const options = {
            method: 'GET',
            headers: {
                'x-api-key': 'WMrMeZLy2pajBLmwf1AUccxFzQy98OEMeDQPaTK8BcTI8XK2f9WZrVpjGYQcujSF' 
            }
        };

        return fetch(`https://deep-index.moralis.io/api/v2/${owner}/nft/${address}?chain=${_chain}&format=decimal`, options)
        .then(response => response.json())
        .then((response:any) => {

            return response.result.map((item:any) => {
                
                const parsedMetaObj = JSON.parse(item.metadata);
                const image = parsedMetaObj.image ? parsedMetaObj.image : '';
                const title = parsedMetaObj.name ? parsedMetaObj.name : '';

                return {
                    title: title,
                    image: image,
                    data: parsedMetaObj
                }

            });

        })
        .catch(err => console.error(err));
        
    }

    async getTokensAlchemy (address:string, chain:string, owner:string) {
        const promise = new Promise((resolve, reject) => {

            var requestOptions = {
            method: 'GET',
            headers: {
                redirect: 'follow'
            }
            };
            
            const baseURL = "https://eth-mainnet.alchemyapi.io/v2/demo/getNFTs/";
            const fetchURL = `${baseURL}?owner=${owner}&contractAddresses[]=${address}`;
            
            fetch(fetchURL, requestOptions)
            .then(response => response.json())
            .then(result => {
                const tokens = result.ownedNfts.map((item) => {
                    return {
                        title: item.title,
                        image: item.metadata.image,
                        data: item
                    }
                });
                resolve(tokens);
            })
            .catch(error => console.log('error', error))
        });

        return promise;
    }

}

export default OnChainTokenModule;
