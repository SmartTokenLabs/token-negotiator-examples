import { requiredParams } from './../utils/index';
// import mockJson from './mock.json';

export class OnChainTokenModule {

    constructor() {

    }

    // would recieve token address as param
    async connectOnChainToken () {

        // connect with the onchain tokens and return data to the TN 

        // returns

        /*
 
            {
                collection: {
                    title: "",
                    emblem: "",
                    chain: "",
                    contractAddress: ""
                }
                tokens: [
                    {
                        title: "",
                        image: "",
                    }
                ]
            }

        */

        // API strategy to get tokens; OpenSea, Moralis, Alchemy etc...

        return this.getTokensOpenSea();

    }

    // chain:string, contractAddress:string, ownerAddress:string, offset=0, limit=20
    async getTokensOpenSea() {

        // data[0].collection.name - title
        // data[0].collection.name - emblem
        
        // "address": "0x381748c76f2b8871afbbe4578781cd24df34ae0d",
        // "image_url": "https://storage.googleapis.com/opensea-rinkeby/0x381748c76f2b8871afbbe4578781cd24df34ae0d.png",
        // "tokens": []

        return {
            collection: {
                title: "OpenSea Creature Sale",
                emblem: "https://storage.googleapis.com/opensea-rinkeby/0x381748c76f2b8871afbbe4578781cd24df34ae0d.png",
                chain: "polygon",
                contractAddress: "0x381748c76f2b8871afbbe4578781cd24df34ae0d"
            },
            tokens: [
                {
                    title: "",
                    image: "",
                }
            ]
        };

    }

    // async getTokensOpenSea(chain:string, contractAddress:string, ownerAddress:string, offset=0, limit=20) {

    //     // owner = 0x062d6d315e6c8aa196b9072d749e3f3f3579fdd0
    //     // contractAddress =0x381748c76f2b8871afbbe4578781cd24df34ae0d

    //     requiredParams((chain && contractAddress && ownerAddress), 'cannot search for tokens, missing params');

    //     const options = {
    //         method: 'GET',
    //         headers: { Accept: 'application/json', 'X-API-KEY': '5bec8ae0372044cab1bef0d866c98618' }
    //     };

    //     if(chain === 'rinkeby') {

    //         fetch(`https://rinkeby-api.opensea.io/api/v1/assets?owner=${ownerAddress}&asset_contract_address=${contractAddress}&order_direction=desc&offset=${offset}&limit=${limit}`, options)
    //         .then(response => response.json())
    //         .then(response => console.log(response))
    //         .catch(err => console.error(err));
            
    //     }
        
    //     if(chain === 'mainnet') {

    //         fetch(`https://api.opensea.io/api/v1/assets?owner=${ownerAddress}&asset_contract_address=${contractAddress}&order_direction=desc&offset=${offset}&limit=${limit}`, options)
    //         .then(response => response.json())
    //         .then(response => console.log(response))
    //         .catch(err => console.error(err));

    //     } else {

    //         requiredParams(null, 'chain is not supported');

    //     }

    // }

    // async getTokensAlchemy () {

    // }

}
