import { Client } from './dist';

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
        'devcon2'
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
