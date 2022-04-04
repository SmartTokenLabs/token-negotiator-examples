import React, { createContext, useState, useEffect } from 'react';
import { Client } from '@tokenscript/token-negotiator';
import config from '../../tokenConfig.json';

const TokenContext = createContext({ 
  tokens: []
});

const tokenKeys = [
  'devcon'
];

let negotiator;

const TokenContextProvider = (props) => {

  const [tokens, setTokens] = useState([]);

  const [proof, setProof] = useState();
  
  useEffect(() => {
    
    negotiator.on("tokens-selected", (tokens) => { 
    
      let selectedTokensState = [];

      const { selectedTokens } = tokens;

      tokenKeys.map((token) => {

        selectedTokensState.push(...tokens.selectedTokens[token].tokens);
        
      });

      console.log('selected tokens', selectedTokens);

      setTokens(selectedTokensState);

    });

    negotiator.on("token-proof", (proof) => { 

      console.log('token proof', proof);
          
      setProof(proof);

    });
    
  }, []);

  return (

    <TokenNegotiatorInstance render={({ negotiator }) => (

      <TokenContext.Provider props={negotiator} value={{ tokens, proof, negotiator }}>

        {props.children}

      </TokenContext.Provider>

    )} />

  )
}
class TokenNegotiatorInstance extends React.Component {
  
  constructor(props) {
    
    super(props);

    config.collectionID = "devcon";
    config.tokenOrigin = (document.location.hostname === "localhost" ? "http://localhost:3002/" : "https://tokenscript.github.io/token-negotiator-gh-pages/token-outlet-website/build/")

    negotiator = new Client({
      type: 'active',
      issuers: [
        config
      ],
      options: {
        overlay: {
          openingHeading: "Open a new world of discounts available with your tokens.",
          issuerHeading: "Get discount with Ticket",
          repeatAction: "try again",
          theme: "light",
          position: "bottom-right"
        }
      },
      filter: {}
    });

    negotiator.negotiate();
    
  }
  render() {
    return this.props.render({ negotiator: negotiator })
  };
}

export { TokenContext, TokenContextProvider }
