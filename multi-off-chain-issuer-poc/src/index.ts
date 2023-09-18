// @ts-nocheck

import {Client} from "@tokenscript/token-negotiator";
import configs from "../../multiTokenConfig.json";
import {updateTokenConfig} from "../../environment";
import {GitCoin, SmartLayer} from "./multi-event-configs";
import "@tokenscript/token-negotiator/dist/theme/style.css";
declare global {
  interface Window {
    negotiator?: Client;
  }
}

const issuerConfigs = [GitCoin, SmartLayer];

for (let config of configs) {
  issuerConfigs.push(updateTokenConfig(config));
}

// ACTIVE
window.negotiator = new Client({
  type: "active",
  issuers: issuerConfigs,
  uiOptions: {
    openingHeading:
      "Open a new world of perks, benefits and opportunities with your attestation, collectible or token.",
    issuerHeading: "Get discount with Ticket",
    repeatAction: "try again",
    theme: "dark",
    position: "bottom-right"
  }
});

const curTokens = [];

window.negotiator.on("connected-wallet", (wallet) => {
  console.log("connected wallet ==>", wallet);
  window.negotiator.ui.openOverlay();
});

window.negotiator.on("tokens-selected", (tokens: any) => {
  let tokensCtn = document.getElementById("ticketList");

  let html = "";

  console.log(tokens);

  for (let issuer in tokens.selectedTokens) {
    for (let i = 0; i < tokens.selectedTokens[issuer].tokens.length; i++) {
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

window.negotiator.on("token-proof", (data: any) => {
  console.log(data);
});

window.negotiator.negotiate();

