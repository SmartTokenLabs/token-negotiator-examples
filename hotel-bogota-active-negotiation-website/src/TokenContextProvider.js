import React, { createContext, useState, useEffect } from 'react';
// import { Client } from '@tokenscript/token-negotiator';
import { Client } from './dist/client/index';

const TokenContext = createContext({ 
  tokens: []
});

const tokenKeys = [
  'devcon'
];

const TokenContextProvider = (props) => {

  const [tokens, setTokens] = useState([]);

  const [proof, setProof] = useState();
  
  setTimeout(() => {

    window.negotiator.on("tokens-selected", (tokens) => { 
    
      let selectedTokens = [];

      tokenKeys.map((token) => {
        selectedTokens.push(...tokens.selectedTokens[token].tokens);
      });

      setTokens(selectedTokens);

    });

    window.negotiator.on("token-proof", (proof) => { 
          
      setProof(proof);

    });

  }, 0);

  return (

    <TokenNegotiatorInstance render={({ negotiator, modalContainer }) => (

      <TokenContext.Provider props={negotiator} value={{ tokens, proof, negotiator, modalContainer }}>

        {props.children}

      </TokenContext.Provider>

    )} />

  )
}
class TokenNegotiatorInstance extends React.Component {
  
  constructor(props) {
    
    super(props);

    window.negotiator = new Client({
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
    window.negotiator.negotiate();
  }
  render() {
    return this.props.render({ 
      negotiator: negotiator, 
      modalContainer: null 
    })
  };
}

export { TokenContext, TokenContextProvider }
