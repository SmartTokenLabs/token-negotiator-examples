import React, {createContext, useState, useEffect} from "react";
import {Client} from "@tokenscript/token-negotiator";
import config from "../../tokenConfig.json";
import {updateTokenConfig} from "../../environment";

const TokenContext = createContext({
  tokens: [],
  proof: null
});

export const collectionID = config.collectionID;

const tokenKeys = [collectionID];

window.negotiator = null;

const TokenContextProvider = (props) => {
  const [tokens, setTokens] = useState([]);

  const [proof, setProof] = useState(null);

  useEffect(() => {
    window.negotiator.on("tokens-selected", (tokens) => {
      let selectedTokensState = [];

      const {selectedTokens} = tokens;

      tokenKeys.forEach((token) => {
        selectedTokensState.push(...tokens.selectedTokens[token].tokens);
      });

      console.log("selected tokens", selectedTokens);

      setTokens(selectedTokensState);
    });

    window.negotiator.on("token-proof", (result) => {
      
      console.log("token proof", result);

      if (result.error) {
        return;
      }

      if(result.issuers) {
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

    let devconConfig = config;

    devconConfig = updateTokenConfig(devconConfig);

    const params = new URLSearchParams(document.location.hash.substring(1));
    const redirectMode = params.has("redirectMode")
      ? params.get("redirectMode")
      : undefined;

    window.negotiator = new Client({
      type: "active",
      issuers: [devconConfig],
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
