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

  useEffect(() => {

    window.addEventListener('message', handleTokenUpdate);

    return () => {

      window.removeEventListener('message', handleTokenUpdate);

    };

  }, []);

  const handleTokenUpdate = (event) => {

    switch (event.data.evt) {

      case 'token-negotiator-token-proof':

        /*

            String

        */

        setProof(event.data.proof);

        console.log('proof', event.data);

      break;
      case 'token-negotiator-tokens':

        /*

            {
                devcon: ["token", "token", "token"],
                liscon: ["token", "token", "token"],
                kitties: ["token", "token"]
            }

        */

        let selectedTokens = [];

        tokenKeys.map((token) => {

            selectedTokens.push(...event.data.selectedTokens[token].tokens);

        });

        setTokens(selectedTokens);

        console.log('tokens', event.data);

      break;
    }
  }

  return (

    <TokenNegotiatorInstance render={({ negotiator, modalContainer }) => (

      <TokenContext.Provider value={{ tokens, proof, negotiator, modalContainer }}>

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
