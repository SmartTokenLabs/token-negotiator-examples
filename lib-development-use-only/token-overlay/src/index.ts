
// @ts-nocheck

// import { Client } from './dist';
import { Client } from './src/client/index';

declare global {
    interface Window {
        negotiator?: any;
    }
}
    
// ACTIVE
window.negotiator = new Client({
    type: 'active',
    issuers: [
        'devcon',
        { contract: '0x381748c76f2b8871afbbe4578781cd24df34ae0d', chain: 'rinkeby', slug: 'opensea-creature-sale' },
        { contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656', chain: 'rinkeby', slug: 'rinkeby-punk' }
    ],
    options: {
        overlay: {
            openingHeading: "Open a new world of discounts available with your tokens.",
            IssuerHeading: "Get discount with Ticket",
            repeatAction: "try again",
            theme: "light",
            position: "bottom-right"
        },
        filters: {},
    }
});

window.negotiator.on("tokens-selected", (tokens:any) => {
    console.log(tokens);
});

window.negotiator.on("token-proof", (proof:any) => {
    console.log(proof);
});

window.negotiator.negotiate();

// PASSIVE
// window.negotiator = new Client({
//     type: 'passive',
//     issuers: [
//         'devcon'
//     ],
//     options: {}
// });

// window.negotiator.negotiate().then((t:any) => {
//     console.log('tokens:', t);
// })
