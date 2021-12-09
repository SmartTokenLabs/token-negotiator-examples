import { SignedDevconTicket } from './Attestation/SignedDevonTicket';

/*

    Changes to implement:

    attestationOrigin = idAttestationOrigin
    tokenOrigin = tokenAttestationOrigin
    tokenIssuerPublicKey: "TODO", // e.g. Issuer would generate this.

*/

export const tokenLookup = {
    "devcon": {
        onChain: false,
        tokenIssuerPublicKey: "TODO", // e.g. Issuer would generate this.
        title: 'Devcon Ticket Holder',
        detail: 'Discount for Hotels and VIP Section',
        tokenName: 'devcon-ticket-local-3002',
        attestationOrigin: "https://stage.attestation.id/",
        tokenOrigin: "http://localhost:3002/",
        tokenUrlName: 'ticket',
        tokenSecretName: 'secret',
        tokenIdName: 'id',
        unsignedTokenDataName: 'ticket',
        itemName: 'dcTokens',
        ethKeyItemName: 'dcEthKeys',
        emblem: 'https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/47274.png',
        tokenParser: SignedDevconTicket,
    },
    "ck": {
        onChain: true,
        title: 'Crypto Kitties Holder',
        detail: 'Discount for Hotels and VIP Section',
        smartContractAddress: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
        symbol: 'CK',
        emblem: 'https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/47274.png',
    }
}