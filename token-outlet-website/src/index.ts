// @ts-nocheck
import {Client, Outlet} from "@tokenscript/token-negotiator";
import "@tokenscript/token-negotiator/dist/theme/style.css";
import {updateTokenConfig} from "../../environment";
// @ts-ignore
import configs from "../../multiTokenConfig.json";
import {Issuer} from "@tokenscript/token-negotiator/dist/client/interface";
import {
  OutletInterface,
  OutletIssuerInterface
} from "@tokenscript/token-negotiator/dist/outlet";

// To test the multi token selection feature
// (with re-direct mode from other sources using this as the issuer outlet)
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("multi-token") === "true") negotiate(true);

const issuerConfigs: OutletIssuerInterface[] = [];

const tokens = [];

for (let config of configs) {
  config = updateTokenConfig(config);
  config.tokenOrigin = document.location.href;
  issuerConfigs.push(config);
}

window.addEventListener("auth-callback", (e: CustomEvent) => {
  console.log("AUTH-CALLBACK: ");
  console.log(e.detail);
});

const outletConfig: OutletInterface = {
  issuers: issuerConfigs,
  whitelistDialogRenderer: (
    permissionTxt: string,
    acceptBtn: string,
    denyBtn: string
  ) => {
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
  }
};

window.tnOutlet = new Outlet(outletConfig);

tnOutlet.ticketStorage.migrateLegacyTokenStorage("devconnectTokens");

// This is here for authentication purposes only
let client = new Client({
  type: "passive",
  issuers: issuerConfigs as unknown as Issuer[]
});

client.on("token-proof", (data: any) => {
  console.log("....PROOF", data);
});

declare global {
  interface Window {
    authenticateToken?: Function;
  }
}

function negotiate(active: boolean) {
  const client = new Client({
    type: active ? "active" : "passive",
    issuers: issuerConfigs as unknown as Issuer[]
  });

  client.on("token-proof", (data: any) => {
    console.log("....PROOF", data);
  });

  client.on("tokens-selected", (tokens: any) => {
    console.log(tokens);
    updateTokens(tokens.selectedTokens);
  });

  window.authenticateToken = (elem: HTMLElement) => {
    let issuer = elem.dataset.issuer;
    let index = elem.dataset.index;

    if (!!document.querySelector("#use-multi-select:checked")) {
      tokens.push({
        issuer: issuer,
        unsignedToken: curTokens[issuer].tokens[index],
        options: {
          useRedirect: !!document.querySelector("#use-redirect:checked")
        }
      });
      if (tokens.length > 1) {
        // authenticate ownership of token
        client.authenticate(tokens);
      }
    } else {
      client.authenticate({
        issuer: issuer,
        unsignedToken: curTokens[issuer].tokens[index],
        options: {
          useRedirect: !!document.querySelector("#use-redirect:checked")
        }
      });
    }
  };

  client.negotiate(undefined, true);
}

let curTokens: {[key: string]: any} = {};

function updateTokens(tokens: any[]) {
  let tokensCtn = document.getElementById("ticketList");

  let html = "";

  for (let issuer in tokens) {
    for (let i = 0; i < tokens[issuer].tokens.length; i++) {
      let token = tokens[issuer].tokens[i];

      html += `
                <div class="ticketContainer">
                  <div class="ticketDetails">
                    <h5 class="ticketClass">
                      ${token.ticketClass}
                    </h5>
                    <p class="devconId">
                      Devcon ID: ${
                        token.ticketIdString ??
                        token.ticketIdNumber ??
                        token.tokenId ??
                        token.ticketId
                      }
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

// For multi-direct
document.getElementById("tn-active-btn").addEventListener("click", () => {
  negotiate(true);
});

document.getElementById("tn-passive-btn").addEventListener("click", () => {
  negotiate(false);
});
