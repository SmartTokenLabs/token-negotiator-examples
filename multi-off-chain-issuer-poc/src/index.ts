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

const params = new URLSearchParams(document.location.hash.substring(1));
const redirectMode = params.has("redirectMode")
  ? params.get("redirectMode")
  : undefined;

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
  },
  offChainRedirectMode: redirectMode
  //autoLoadTokens: 3,
  // safeConnectOptions: {
  //     url: "https://safeconnect.tokenscript.org",
  //     initialProof: false
  // }
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

window.authenticateToken = (elem) => {
  let issuer = elem.dataset.issuer;
  let index = elem.dataset.index;

  // authenticate ownership of token
  window.negotiator.authenticate({
    issuer: issuer,
    unsignedToken: curTokens[issuer].tokens[index]
  });
};

window.updateIssuers = () => {
  // choose 3 random issuers to show
  let newIssuers = [];

  while (newIssuers.length < 3) {
    let issuer = issuers[Math.floor(Math.random() * issuers.length)]; //NOSONAR Ignore math.random warning as this isn't used for crypto functions

    if (newIssuers.indexOf(issuer) === -1) newIssuers.push(issuer);
  }

  window.negotiator.negotiate(newIssuers, true);
};

window.clearStoredProofs = () => {
  localStorage.removeItem("tn-proof");
};

window.negotiator.readProofCallback();

// This is for testing WalletConnect V2 chain switching
window.sendTransactionOnChain = async (chain: number) => {
  const wallet = await window.negotiator.getWalletProvider();

  const provider = wallet.getConnectedWalletData()[0].provider;
  const ethers = wallet.getConnectedWalletData()[0].ethers;

  if ((await provider.getSigner(0).getChainId()) != chain)
    try {
      await provider.send("wallet_switchEthereumChain", [
        {chainId: "0x" + chain.toString(16)}
      ]);
    } catch (e) {
      console.error(e);
      throw new Error(
        "Connected to wrong chain, please switch the chain to chainId: " +
          chain +
          ", error: " +
          e.message
      );
    }

  let tx = await provider.getSigner(0).sendTransaction({
    to: "0xcFF805b714b24b3dD30cB4a1bea3745e5C5E73ef",
    value: ethers.utils.parseUnits("0.0001", "ether").toHexString()
    //chainId: chain
  });
};
