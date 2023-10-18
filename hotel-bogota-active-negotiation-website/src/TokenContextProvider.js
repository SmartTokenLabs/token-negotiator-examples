import React, { createContext, useState, useEffect } from "react";
import { Client } from "@tokenscript/token-negotiator";
import configs from "../../multiTokenConfig.json";
import { updateTokenConfig } from "../../environment";

const TokenContext = createContext({
  tokens: [],
  proof: null
});

const issuerConfigs = [];

let negotiator;

for (let config of configs) {
  issuerConfigs.push(updateTokenConfig(config));
}

const TokenContextProvider = (props) => {
  const [tokens, setTokens] = useState([]);
  const [proof, setProof] = useState(null);

  useEffect(() => {
    negotiator.on("tokens-selected", ({ selectedTokens }) => {
      setTokens({ ...selectedTokens });
    });

    negotiator.on("token-proof", (result) => {
      if (result.error) return;
      if (result.issuers) setProof(result);
      negotiator.getUi().closeOverlay();
    });
    negotiator.negotiate();
  }, []);

  return (
    <TokenNegotiatorInstance
      render={({ negotiator }) => (
        <TokenContext.Provider
          props={negotiator}
          value={{ tokens, proof, negotiator }}
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

    negotiator = new Client({
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
    return this.props.render({ negotiator });
  }
}

export { TokenContext, TokenContextProvider };
