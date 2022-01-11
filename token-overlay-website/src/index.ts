import { Client } from './dist/client/index';

declare global {
    interface Window {
        negotiator?: any;
    }
}

// ACTIVE
// window.negotiator = new Client({
//     type: 'active',
//     issuers: [
//         'devcon',
//         'devcon2',
//         'devcon3',
//         'devcon4'
//     ],
//     options: {
//         overlay: {
//             heading: "Get discount with Ticket",
//             theme: "light",
//             position: "bottom-right"
//         },
//         filters: {},
//     }
// });

// window.addEventListener('message', (event) => {

//     switch (event.data.evt) {

//         case 'negotiatedTokensEvt':

//             /*

//                 {
//                     devcon: ["a", "b", "c"],
//                     liscon: ["d", "r", "z"],
//                     kitties: ["s", "w"]
//                 }

//             */

//             console.log('client delivered tokens', event.data.selectedTokens);

//             break;
//     }

// }, false);

// window.negotiator.negotiate();

// PASSIVE
window.negotiator = new Client({
    type: 'passive',
    issuers: [
        'devcon'
    ],
    options: {}
});

window.negotiator.negotiate().then((t:any) => {
    console.log('tokens:', t);
})
