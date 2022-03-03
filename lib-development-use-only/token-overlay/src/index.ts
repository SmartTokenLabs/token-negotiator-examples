
// @ts-nocheck

// import { Client } from './dist';
import { Client } from '@tokenscript/token-negotiator';

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
        { contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656', chain: 'rinkeby', openSeaSlug: 'rinkeby-punk' },
        { contract: '0x0d0167a823c6619d430b1a96ad85b888bcf97c37', chain: 'eth' }
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

var curTokens = [];

window.negotiator.on("tokens-selected", (tokens:any) => {

    let tokensCtn = document.getElementById("ticketList");

    let html = "";

    console.log(tokens);

    for (let issuer in tokens.selectedTokens){

        for (let i=0; i < tokens.selectedTokens[issuer].tokens.length; i++){

            let token = tokens.selectedTokens[issuer].tokens[i];

            html += `
                <div class="ticketContainer">
                  <div class="ticketDetails">
                    <h5 class="ticketClass">
                      ${token.ticketClass}
                    </h5>
                    <p class="ticketId">
                      ${token.ticketId}
                    </p class="ticketId">
                    <p class="devconId">
                      Devcon ID: ${token.devconId}
                    </p>
                    <button class="authButton" onclick="authenticateToken(this);" data-issuer="${issuer}" data-index="${i}">Authenticate</button>
                  </div>
                  <img alt="ticket-logo" class="ticketImg" src="ticket_example_image.svg"/>
                </div>
            `;
        }
    }

    tokensCtn.innerHTML = html;

    curTokens = tokens.selectedTokens;

});

window.negotiator.on("token-proof", (proof:any) => {
    console.log(proof);
});

window.negotiator.negotiate();

window.authenticateToken = (elem) => {

    let issuer = elem.dataset.issuer;
    let index = elem.dataset.index;

    // authenticate ownership of token
    window.negotiator.authenticate({
        issuer: issuer,
        unsignedToken: curTokens[issuer].tokens[index]
    });
}

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
