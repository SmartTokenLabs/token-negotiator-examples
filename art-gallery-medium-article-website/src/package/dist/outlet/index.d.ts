import { ResponseInterfaceBase } from "../core/messaging";
export interface OutletInterface {
    collectionID: string;
    title?: string;
    attestationOrigin: string;
    attestationInTab?: boolean;
    tokenParser?: any;
    base64senderPublicKeys: {
        [key: string]: string;
    };
    base64attestorPubKey: string;
    signedTokenWhitelist?: string[];
    whitelistDialogWidth: string;
    whitelistDialogHeight: string;
    whitelistDialogRenderer?: (permissionTxt: string, acceptBtn: string, denyBtn: string) => string;
    tokenUrlName?: string;
    tokenSecretName?: string;
    tokenIdName?: string;
    unsignedTokenDataName?: string;
    itemStorageKey?: string;
}
export declare const defaultConfig: {
    tokenUrlName: string;
    tokenSecretName: string;
    tokenIdName: string;
    unsignedTokenDataName: string;
    itemStorageKey: string;
    signedTokenWhitelist: any[];
    whitelistDialogWidth: string;
    whitelistDialogHeight: string;
};
export declare class readSignedTicket {
    ticket: any;
    constructor(source: any);
}
export declare class Outlet {
    tokenConfig: OutletInterface;
    urlParams?: URLSearchParams;
    constructor(config: OutletInterface);
    getDataFromQuery(itemKey: any): string;
    getFilter(): any;
    pageOnLoadEventHandler(): Promise<void>;
    private dispatchAuthCallbackEvent;
    private whitelistCheck;
    prepareTokenOutput(filter: any): any;
    sendTokenProof(evtid: any, token: any, address: string, wallet: string): Promise<void | "error">;
    private getRequestOrigin;
    private sendTokens;
    sendErrorResponse(evtid: any, error: string): void;
    proofRedirectError(issuer: string, error: string): void;
    sendMessageResponse(response: ResponseInterfaceBase): void;
}
