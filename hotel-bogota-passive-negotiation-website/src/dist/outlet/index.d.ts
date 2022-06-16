import { MessageResponseInterface } from "../client/messaging";
interface OutletInterface {
    config: any;
}
export declare class readSignedTicket {
    ticket: any;
    constructor(source: any);
}
export declare class Outlet {
    tokenConfig: any;
    urlParams?: URLSearchParams;
    constructor(config: OutletInterface);
    getDataFromQuery(itemKey: any): string | null | undefined;
    getFilter(): any;
    pageOnLoadEventHandler(): void;
    prepareTokenOutput(filter: any): any;
    sendTokenProof(evtid: any, token: any): Promise<"error" | undefined>;
    private sendTokens;
    sendErrorResponse(evtid: any, error: string): void;
    sendMessageResponse(response: MessageResponseInterface): void;
}
export {};
