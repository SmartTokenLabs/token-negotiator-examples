import React, {createContext, useState, useEffect} from "react";
import {Client} from "@tokenscript/token-negotiator";
import configs from "../../multiTokenConfig.json";
import {updateTokenConfig} from "../../environment";

const TokenContext = createContext({
  tokens: [],
  proof: null
});

const issuerConfigs = [];

for (let config of configs) {
  issuerConfigs.push(updateTokenConfig(config));
}

window.negotiator = null;
var updateCounter = 0;

const TokenContextProvider = (props) => {
  const [tokens, setTokens] = useState([]);

  const [proof, setProof] = useState(null);

  useEffect(() => {
    window.negotiator.on("tokens-selected", (tokens) => {
      setTokens({...tokens.selectedTokens, updateCounter: updateCounter++});
    });

    window.negotiator.on("token-proof", (result) => {
      console.log("token proof", result);
      if (result.error) return;
      if (result.issuers) {
        setProof(result);
      } else {
        // legacy version output.
        setProof(result.data);
      }
      window.negotiator.getUi().closeOverlay();
    });
    window.negotiator.negotiate();
  }, []);

  return (
    <TokenNegotiatorInstance
      render={({negotiator}) => (
        <TokenContext.Provider
          props={negotiator}
          value={{tokens, proof, negotiator}}
        >
          {props.children}
        </TokenContext.Provider>
      )}
    />
  );
};
class TokenNegotiatorInstance extends React.Component {
  constructor(props) {
    super(props);

    const params = new URLSearchParams(document.location.hash.substring(1));
    const redirectMode = params.has("redirectMode")
      ? params.get("redirectMode")
      : undefined;

    window.negotiator = new Client({
      type: "active",
      issuers: issuerConfigs,
      uiOptions: {
        openingHeading:
          "Open a new world of perks, benefits and opportunities with your attestation, collectible or token.",
        issuerHeading: "Get discount with Ticket",
        repeatAction: "try again",
        theme: "light",
        position: "bottom-right"
      },
      offChainRedirectMode: redirectMode
    });
  }

  render() {
    return this.props.render({negotiator: window.negotiator});
  }
}

export {TokenContext, TokenContextProvider};
