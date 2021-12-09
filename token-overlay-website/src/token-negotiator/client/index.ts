// @ts-nocheck
import { requiredParams, logger } from './../utils/index';
import { getTokens } from "../core/index";
import { SignedDevconTicket } from '../Attestation/SignedDevonTicket';
import { createOverlayMarkup, createFabButton, createToken } from './componentFactory';
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
    issuerTokens: any;

    // @ts-ignore
    constructor(config: NegotiationInterface) {

        const { type, issuers, options } = config;
        
        requiredParams(type, 'Type is required')
        requiredParams(issuers, 'Issuers are missing');

        this.type = type;
        this.options = options;
        this.issuers = issuers; 
        this.issuerTokens = {};
        
        issuers.map((issuer: any) => {
            this.issuerTokens[issuer] = {
                active: this.type === 'passive' ? true : false,
                tokens: []
            };
        });

        logger(this.issuerTokens);

    }

    async setWebTokens (issuers:string[]) {
        await Promise.all(issuers.map(async (issuer): Promise<any> => {
            // this data should be found outside of the lib e.g. a hosted JSON file.
            const mock = {
                onChain: false,
                tokenName: 'devcon-ticket-local-3002',
                attestationOrigin: "https://stage.attestation.id/",
                tokenOrigin: "http://192.168.1.13:3002",
                tokenOverlayOrigin: "http://192.168.1.13:3003",
                tokenUrlName: 'ticket',
                tokenSecretName: 'secret',
                tokenIdName: 'id',
                unsignedTokenDataName: 'ticket',
                tokenParser: SignedDevconTicket,
                itemName: 'dcTokens',
                ethKeyItemName: 'dcEthKeys',
                emblem: 'https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/47274.png'
            }
            // settings should come from an external file location not inside this lib.
            const tokens = await getTokens({
                filter: {},
                tokenName: mock.tokenName,
                tokensOrigin: mock.tokenOrigin,
                localStorageItemName: mock.itemName,
                tokenParser: mock.tokenParser,
                unsignedTokenDataName: mock.unsignedTokenDataName
            });
            this.issuerTokens[issuer].tokens = tokens;
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
        await this.setWebTokens(this.issuers);
        // await this.setBlockchainTokens(this.issuers);
        if (this.type === 'active'){
            this.activeNegotiationStrategy();
        } else { 
            this.passiveNegotiationStrategy() 
        }
    }

    async passiveNegotiationStrategy() {
        return this.issuerTokens;
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

            this.issuers.map(issuer => {

                const i = this.issuerTokens[issuer];

                if (i.tokens.length) {

                    refTokenContainerSelector.innerHTML = createToken('hi', 0, 'https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/47274.png');

                }

            });

          }
          window.tokenToggleSelection = this.tokenToggleSelection;
        }, 0);
      }
    
      openOverlay(openOverlay:boolean){
        const element = document.querySelector(".overlay-tn .overlay");
        element.classList.toggle("open");
        if(openOverlay) element.classList.add("open");
        else element.classList.remove("open");
      }
      
      overlayClickHandler() {
        const element = document.querySelector(".overlay-tn .overlay");
        const isOpen = element.classList.contains("open");
        element.classList.toggle("open");
        if (!isOpen) this.openOverlay(true);
        else this.openOverlay(false);    
      }

      tokenToggleSelection () {
        logger('share token with client');
      }

}