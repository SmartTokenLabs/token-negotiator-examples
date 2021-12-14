import { SignedDevconTicket } from './Attestation/SignedDevonTicket';

/*

    Changes to implement:

    attestationOrigin = idAttestationOrigin
    tokenOrigin = tokenAttestationOrigin
    tokenIssuerPublicKey: "TODO", // e.g. Issuer would generate this.

*/

interface Item {
    onChain: any;
    tokenIssuerPublicKey?: any;
    title?: any;    
    tokenName?: any;
    attestationOrigin?: any;
    tokenOrigin?: any;
    tokenUrlName?: any;
    tokenSecretName?: any;
    tokenIdName?: any;
    unsignedTokenDataName?: any;
    itemName?: any;
    ethKeyItemName?: any;
    emblem?: any;
    tokenParser?: any;
    smartContractAddress?: any;
    symbol?: any;
}

interface TokenLookupInterface {
    [issuer: string]: Item
}

export const tokenLookup:TokenLookupInterface = {
    "devcon": {
        onChain: false,
        tokenIssuerPublicKey: "TODO", // e.g. Issuer would generate this.
        title: 'Devcon Ticket',
        tokenName: 'devcon-ticket-local-3002',
        attestationOrigin: "https://stage.attestation.id/",
        tokenOrigin: "http://localhost:3002/",
        tokenUrlName: 'ticket',
        tokenSecretName: 'secret',
        tokenIdName: 'id',
        unsignedTokenDataName: 'ticket',
        itemName: 'dcTokens',
        ethKeyItemName: 'dcEthKeys',
        emblem: 'https://raw.githubusercontent.com/TokenScript/token-negotiator/main/mock-images/devcon.svg',
        tokenParser: SignedDevconTicket,
    },
    "ck": {
        onChain: true,
        title: 'Crypto Kitties Holder',
        smartContractAddress: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
        symbol: 'CK',
        emblem: 'https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/47274.png',
    }
}