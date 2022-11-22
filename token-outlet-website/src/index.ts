import {Client, Outlet} from '@tokenscript/token-negotiator';
import "@tokenscript/token-negotiator/dist/theme/style.css";
import {updateTokenConfig} from "../../environment";
// @ts-ignore
import config from '../../tokenConfig.json';

let devconConfig = updateTokenConfig(config);

// Enable test.attestation.id but only for bare-bones demo
//if (document.referrer && (document.referrer.indexOf("3010") > -1 || document.referrer.indexOf("bare-bones") > -1))
//devconConfig.attestationOrigin = "https://test.attestation.id/";

//devconConfig.attestationInTab = true;
devconConfig.tokenOrigin = document.location.href;

devconConfig.whitelistDialogRenderer = (permissionTxt: string, acceptBtn: string, denyBtn: string) => {
	return `
		<div class="tn-auth-box">
			<div class="tn-auth-heading">
				<img alt="devcon" src="devcon_logo.svg" style="width: 150px;" />
			</div>
			<div class="tn-auth-content">
				<p>${permissionTxt}</p>
				${acceptBtn}
				${denyBtn}
			</div>
		</div>
	`;
};

new Outlet(devconConfig);

declare global {
	interface Window {
		authenticateToken?: Function;
	}
}

function negotiate(active: boolean){
	const client = new Client({
		type: active ? "active" : "passive",
		issuers: [devconConfig]
	});

	client.on("token-proof", (data:any) => {
		console.log(data);
	});

	client.on("tokens-selected", (tokens: any) => {
		console.log(tokens);
		updateTokens(tokens.selectedTokens);
	})

	client.on("tokens", (tokens: any) => {
		console.log(tokens);
		updateTokens(tokens);
	})

	window.authenticateToken = (elem: HTMLElement) => {

		let issuer = elem.dataset.issuer;
		let index = elem.dataset.index;

		// authenticate ownership of token
		client.authenticate({
			issuer: issuer,
			unsignedToken: curTokens[issuer].tokens[index]
		});
	};

	client.negotiate(undefined, true);
}

let curTokens: {[key: string]: any} = {};

function updateTokens(tokens: any[]){
	let tokensCtn = document.getElementById("ticketList");

	let html = "";

	console.log(tokens);

	for (let issuer in tokens){

		for (let i=0; i < tokens[issuer].tokens.length; i++){

			let token = tokens[issuer].tokens[i];

			html += `
                <div class="ticketContainer">
                  <div class="ticketDetails">
                    <h5 class="ticketClass">
                      ${token.ticketClass}
                    </h5>
                    <p class="ticketId">
                      ${token.ticketIdString ?? token.ticketIdNumber ?? token.ticketId}
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

	curTokens = tokens;
}

document.getElementById("tn-active-btn").addEventListener("click", () => {
	negotiate(true);
});

document.getElementById("tn-passive-btn").addEventListener("click", () => {
	negotiate(false);
});
