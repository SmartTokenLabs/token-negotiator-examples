import React, { createContext, useState, useEffect } from 'react';
// import { Client } from '@tokenscript/token-negotiator';
import { Client } from './dist/client/index';

const TokenContext = createContext({ tokens: [] });

// List of keys the Token Negotiator wishes to read from (onchain & offchain).
const tokenKeys = ['devcon'];

const TokenContextProvider = (props) => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    window.addEventListener('message', handleTokenUpdate);

    // cleanup this component
    return () => {
      window.removeEventListener('message', handleTokenUpdate);
    };
  }, []);

  const handleTokenUpdate = (event) => {

    switch (event.data.evt) {

      case 'negotiatedTokensEvt':

        /*

            {
                devcon: ["token", "token", "token"],
                liscon: ["token", "token", "token"],
                kitties: ["token", "token"]
            }

        */

        // let selectedTokens = [];

        // tokenKeys.map((token) => {
        //     selectedTokens.push(...event.data.selectedTokens[token].tokens);
        // });

        // setTokens(selectedTokens);

        console.log('tokens', event.data);

      break;
    }
  }

  return (
    <TokenNegotiatorInstance render={({ negotiator, modalContainer }) => (
      <TokenContext.Provider value={{ tokens, negotiator, modalContainer }}>
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
        },
        filters: {},
      }
    });
    window.negotiator.negotiate();
  }
  render() { return this.props.render({ negotiator: negotiator, modalContainer: null }) };
}

export { TokenContext, TokenContextProvider }
