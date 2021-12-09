import { SignedDevconTicket } from './Attestation/SignedDevonTicket';

export const tokenLookup = {
    "devcon": {
        onChain: false,
        tokenName: 'devcon-ticket-local-3002',
        attestationOrigin: "https://stage.attestation.id/",
        tokenOrigin: "http://localhost:3002/",
        // tokenOverlayOrigin: "http://192.168.1.13:3003/",
        tokenUrlName: 'ticket',
        tokenSecretName: 'secret',
        tokenIdName: 'id',
        unsignedTokenDataName: 'ticket',
        tokenParser: SignedDevconTicket,
        itemName: 'dcTokens',
        ethKeyItemName: 'dcEthKeys',
        emblem: 'https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/47274.png'
    }
}