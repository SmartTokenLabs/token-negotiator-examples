import { PopupOptionsInterface } from "./popup";
import { OffChainTokenConfig, OnChainTokenConfig } from "../tokenLookup";
import "./../vendor/keyShape";
interface NegotiationInterface {
    type: string;
    issuers: (OnChainTokenConfig | OffChainTokenConfig)[];
    options: {
        overlay: PopupOptionsInterface;
        filters: {};
    };
    onChainKeys?: {
        [apiName: string]: string;
    };
    ipfsBaseUrl?: string;
}
declare global {
    interface Window {
        KeyshapeJS?: any;
        tokenToggleSelection: any;
        ethereum: any;
    }
}
interface AuthenticateInterface {
    issuer: any;
    tokenId?: number | string;
    unsignedToken: any;
}
export declare class Client {
    private issuers;
    private negotiateAlreadyFired;
    private type;
    private filter;
    private options;
    private offChainTokens;
    private onChainTokens;
    private tokenLookup;
    private selectedTokens;
    private web3WalletProvider;
    private messaging;
    private popup;
    private clientCallBackEvents;
    static getKey(file: string): import("@tokenscript/attestation/dist/libs/KeyPair").KeyPair;
    constructor(config: NegotiationInterface);
    formatCollectionID(collectionID: string): string;
    formatCollectionChain(chain: string): string;
    prePopulateTokenLookupStore: (issuers: any) => any;
    getTokenData(): {
        offChainTokens: any;
        onChainTokens: any;
        tokenLookup: any;
        selectedTokens: any;
    };
    updateTokenLookupStore(tokenKey: any, data: any): void;
    negotiatorConnectToWallet(walletType: string): Promise<any>;
    setPassiveNegotiationWebTokens(offChainTokens: any): Promise<void>;
    httpRequest(request: string): Promise<any>;
    enrichTokenLookupDataOnChainTokens(onChainTokens: any): Promise<void>;
    negotiate(): Promise<void>;
    activeNegotiationStrategy(): Promise<void>;
    setPassiveNegotiationOnChainTokens(onChainTokens: any): Promise<void>;
    passiveNegotiationStrategy(): Promise<void>;
    connectTokenIssuer(issuer: string): Promise<any[]>;
    connectOnChainTokenIssuer(issuer: any): Promise<any>;
    updateSelectedTokens(selectedTokens: any): void;
    createSignature(): void;
    authenticateOnChain(authRequest: AuthenticateInterface): Promise<{
        issuer: any;
        proof: any;
    }>;
    authenticateOffChain(authRequest: AuthenticateInterface): Promise<unknown>;
    authenticate(authRequest: AuthenticateInterface): Promise<void>;
    private handleProofError;
    checkPublicAddressMatch(issuer: string, unsignedToken: any): Promise<any>;
    eventSender: {
        emitAllTokensToClient: (tokens: any) => void;
        emitSelectedTokensToClient: () => void;
        emitProofToClient: (proof: any, issuer: any, error?: string) => void;
    };
    addTokenViaMagicLink(magicLink: any): Promise<any>;
    on(type: string, callback?: any, data?: any): any;
}
export {};
