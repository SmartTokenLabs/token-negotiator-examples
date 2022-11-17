
// @ts-nocheck

import { Client } from '@tokenscript/token-negotiator';
import config from './../../tokenConfig.json';
import {updateTokenConfig} from "../../environment";
import "@tokenscript/token-negotiator/dist/theme/style.css";
import {SignedUNChallenge} from "@tokenscript/token-negotiator/dist/client/auth/signedUNChallenge";
import {AttestedAddress} from "@tokenscript/token-negotiator/dist/client/auth/attestedAddress";
import {AuthenticationMethod} from "@tokenscript/token-negotiator/dist/client/auth/abstractAuthentication";

declare global {
    interface Window {
        negotiator?: any;
    }
}

let devonConfig = updateTokenConfig(config);

const issuers = [
    devonConfig,
	{ collectionID: 'stl-bayc', onChain: true, contract: '0xc361201E5B1005cCDE47B32F223BC145DE393F62', chain: 'goerli'},
	{ collectionID: 'stl-wow', onChain: true, contract: '0x87644E0A1287A4D96DecC29A13400a1be9759AF8', chain: 'goerli'},
	{ collectionID: 'stl-riot-racer', onChain: true, contract: '0xae96095fF42B0Cae2DaD3d49E5EE11663280d819', chain: 'goerli'},
    { collectionID: 'expansion-punk', onChain: true, contract: '0x0d0167a823c6619d430b1a96ad85b888bcf97c37', chain: 'eth' },
    { collectionID: 'poap', onChain: true, contract: '0x22C1f6050E56d2876009903609a2cC3fEf83B415', chain: 'xdai'},
    { onChain: true, collectionID: "Perion", contract: '0x96af92ae2d822a0f191455ceca4d4e7ee227668e', chain: 'mumbai', blockchain: "evm" },
    { collectionID: 'COOLCATS-#2426-14', onChain: true, contract: '0x3C7e352481F4b2fdEc1e642a3f0018661c77513D', chain: 'eth', openSeaSlug: 'devcon-vi-suit-up-collection' },
    { collectionID: 'Town-Hall', onChain: true, contract: '0x81b30ff521D1fEB67EDE32db726D95714eb00637', chain: 'Optimism' },
    { collectionID: 'Blusteak Kangaroo #64', onChain: true, contract: '0xa996F7F3BC647EebC98C684aB0A302c9b85d2FA1', chain: 'Avalanche' },
    { collectionID: 'Alone Pirate', onChain: true, contract: '0x36535ec384B94342558e37282527b5052587af6A', chain: 'Arbitrum' },
];

// ACTIVE
window.negotiator = new Client({
    type: 'active',
    issuers: [
		{ collectionID: 'stl-bayc', onChain: true, contract: '0xc361201E5B1005cCDE47B32F223BC145DE393F62', chain: 'goerli'},
		{ collectionID: 'stl-wow', onChain: true, contract: '0x87644E0A1287A4D96DecC29A13400a1be9759AF8', chain: 'goerli'},
		{ collectionID: 'stl-riot-racer', onChain: true, contract: '0xae96095fF42B0Cae2DaD3d49E5EE11663280d819', chain: 'goerli'},
		devonConfig
    ],
    uiOptions: {
        //uiType: "inline",
        //containerElement: "#negotiator-inline",
        openingHeading: "Open a new world of discounts available with your tokens.",
        issuerHeading: "Get discount with Ticket",
        repeatAction: "try again",
        theme: "dark",
        position: "bottom-right"
    },
    autoLoadTokens: 3,
    safeConnectOptions: {
        url: "https://safeconnect.tokenscript.org",
        initialProof: false
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

window.negotiator.on("token-proof", (data:any) => {
    console.log(data);
});

window.negotiator.negotiate();

window.authenticateToken = (elem) => {

    let issuer = elem.dataset.issuer;
    let index = elem.dataset.index;

	/*const challengeType = (document.getElementById("challenge-type") as HTMLSelectElement)?.value;
	let challengeClass: AuthenticationMethod;

	switch (challengeType){
		case "attestedAddress":
			challengeClass = AttestedAddress;
			break;
		case "signedUN":
		default:
			challengeClass = SignedUNChallenge;
	}*/

    // authenticate ownership of token
    window.negotiator.authenticate({
        issuer: issuer,
        unsignedToken: curTokens[issuer].tokens[index],
		//type: challengeClass
		options: {
			useRedirect: true
		}
    });
};

window.updateIssuers = () => {
    // choose 3 random issuers to show
    let newIssuers = [];

    while (newIssuers.length < 3){
        let issuer = issuers[Math.floor(Math.random()*issuers.length)]; //NOSONAR Ignore math.random warning as this isn't used for crypto functions

        if (newIssuers.indexOf(issuer) === -1)
            newIssuers.push(issuer)
    }

    window.negotiator.negotiate(newIssuers, true);
};

/*window.clearStoredProofs = () => {
	localStorage.removeItem("tn-proof");
}*/
