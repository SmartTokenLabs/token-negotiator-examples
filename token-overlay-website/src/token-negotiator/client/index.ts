// @ts-nocheck
import { requiredParams, logger } from './../utils/index';
import { getTokens } from "../core/index";
import { createOverlayMarkup, createFabButton, createToken } from './componentFactory';
import { tokenLookup } from './../tokenLookup';
import "./../../theme/style.css";

interface NegotiationInterface {
    type: string;
    issuers: string[];
    options: any
}

export class Client {

    issuers: string[];
    type: string;
    options: any;
    offChainTokens: any;
    onChainTokens: any;

    // @ts-ignore
    constructor(config: NegotiationInterface) {

        const { type, issuers, options } = config;
        
        requiredParams(type, 'Type is required');
        
        requiredParams(issuers, 'Issuers are missing');

        this.type = type;
        
        this.options = options;
        
        this.issuers = issuers; 
        
        this.offChainTokens = { tokenKeys: [] };
        
        this.onChainTokens = { tokenKeys: [] };
        
        /*

            this.onChainTokens / this.offChainTokens: {
                tokenKeys: ['devcon'],
                devcon: {
                    active: '', 
                    tokens: [] 
                }
            }

        */

        issuers.map((issuer: any) => {

            if(tokenLookup[issuer]?.onChain === true) {

                this.onChainTokens.tokenKeys.push(issuer);

                this.onChainTokens[issuer] = {
                    active: this.type === 'passive' ? true : false,
                    tokens: []
                };

            } else {

                this.offChainTokens.tokenKeys.push(issuer);
                
                this.offChainTokens[issuer] = {
                    active: this.type === 'passive' ? true : false,
                    tokens: []
                };

            }

        });

    }

    async setWebTokens (offChainTokens:any) {

        await Promise.all(offChainTokens.tokenKeys.map(async (issuer): Promise<any> => {

            const { tokenName, tokenOrigin, itemName, tokenParser, unsignedTokenDataName } = tokenLookup[issuer];

            const tokens = await getTokens({
                filter: {},
                tokenName: tokenName,
                tokensOrigin: tokenOrigin,
                localStorageItemName: itemName,
                tokenParser: tokenParser,
                unsignedTokenDataName: unsignedTokenDataName
            });

            this.offChainTokens[issuer].tokens = tokens;

            return tokens;

        }));
    }

    async setBlockChainTokens (issuers:string[]) {

        /*

            Gather blockchain tokens from a source/s (
                - The Graph
                - Custom API
                - EtherScan API
                - ...
            )

        */
       
        return true;

    }

    async negotiate () {

        await this.setWebTokens(this.offChainTokens);
        // await this.setBlockchainTokens(this.issuers);

        if (this.type === 'active'){

            this.activeNegotiationStrategy();

        } else { 

            this.passiveNegotiationStrategy() 

        }
    }

    async passiveNegotiationStrategy() {

        return [ ...this.onChainTokens, ...this.offChainTokens ];

    }

    async activeNegotiationStrategy() {

        this.embedClientOverlay('devcon');

    }

    embedClientOverlay(tokenName) {

        setTimeout(() => {

          let refTokenSelector = document.querySelector(".overlay-tn");

          if (refTokenSelector) {

            refTokenSelector.innerHTML += createOverlayMarkup();
            
            refTokenSelector.innerHTML += createFabButton("");

            let refTokenContainerSelector = document.querySelector(".token-container");

            this.offChainTokens.tokenKeys.map(issuer => {

                const i = this.offChainTokens[issuer];

                if (i.tokens.length) {

                    refTokenContainerSelector.innerHTML = createToken(
                        'data', 
                        0, 
                        tokenLookup[tokenName].emblem
                    );

                }

            });

          }

          window.tokenToggleSelection = this.tokenToggleSelection;

        }, 0);

      }
    
      openOverlay(openOverlay:boolean){
        
        const element = document.querySelector(".overlay-tn .overlay");
        
        element.classList.toggle("open");
        
        if(openOverlay) {
            
            element.classList.add("open");
        
        } else {
            
            element.classList.remove("open");

        }
      }
      
      overlayClickHandler() {

        const element = document.querySelector(".overlay-tn .overlay");
        
        const isOpen = element.classList.contains("open");
        
        element.classList.toggle("open");
        
        if (!isOpen) { 
            
            this.openOverlay(true);

        } else {
            
            this.openOverlay(false); 

        }

      }

      tokenToggleSelection () {

        logger('share token with client');

      }

}