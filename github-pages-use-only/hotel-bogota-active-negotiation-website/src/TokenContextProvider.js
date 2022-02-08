import React, { createContext, useState, useEffect } from 'react';
import { Client } from '@tokenscript/token-negotiator';

const TokenContext = createContext({ 
  tokens: []
});

const tokenKeys = [
  'devcon-remote'
];

let negotiator;

const TokenContextProvider = (props) => {

  const [tokens, setTokens] = useState([]);

  const [proof, setProof] = useState();
  
  useEffect(() => {
    
    negotiator.on("tokens-selected", (tokens) => { 
    
      let selectedTokens = [];

      tokenKeys.map((token) => {

        selectedTokens.push(...tokens.selectedTokens[token].tokens);
        
      });

      setTokens(selectedTokens);

    });

    negotiator.on("token-proof", (proof) => { 
          
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

    negotiator = new Client({
      type: 'active',
      issuers: tokenKeys,
      options: {
        overlay: {
          heading: "Get discount with Ticket",
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
