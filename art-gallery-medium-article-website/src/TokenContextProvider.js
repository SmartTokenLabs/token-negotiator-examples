import React, { createContext, useState, useEffect } from 'react';
import { Client } from '@tokenscript/token-negotiator';
import "@tokenscript/token-negotiator/dist/theme/style.css";

const TokenContext = createContext({ 
  tokens: []
});

window.negotiator = null;

const TokenContextProvider = (props) => {

  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    
    window.negotiator.on("tokens-selected", (tokens) => { 
    
      setTimeout(() => {
      
        let selectedTokensState = [];

        const { selectedTokens } = tokens;

        if(selectedTokens["demo-tokens"].tokens) {

          selectedTokensState.push(...selectedTokens["demo-tokens"].tokens);

        }

        setTokens(selectedTokensState);

      }, 0);

    });
      
  }, []);

  return (

    <TokenNegotiatorInstance render={({ negotiator }) => (

      <TokenContext.Provider props={negotiator} value={{ tokens, negotiator }}>

        {props.children}

      </TokenContext.Provider>

    )} />

  )
}
class TokenNegotiatorInstance extends React.Component {
  
  constructor(props) {
    
    super(props);

    if(window.negotiator) return;

    window.negotiator = new Client({
      type: 'active',
      issuers: [
        { collectionID: 'demo-tokens', onChain: true, contract: '0x0d0167a823c6619d430b1a96ad85b888bcf97c37', chain: 'eth' },
        { collectionID: 'COOLCATS-#2426-14', onChain: true, contract: '0x3C7e352481F4b2fdEc1e642a3f0018661c77513D', chain: 'Ethereum', openSeaSlug: 'devcon-vi-suit-up-collection' },
        { collectionID: 'Town-Hall', onChain: true, contract: '0x81b30ff521D1fEB67EDE32db726D95714eb00637', chain: 'Optimism', openSeaSlug: 'Optimistic Explorer' },
        { collectionID: 'Blusteak Kangaroo #64', onChain: true, contract: '0xa996F7F3BC647EebC98C684aB0A302c9b85d2FA1', chain: 'Avalanche', openSeaSlug: 'Marketing Kangaroos' },
        { collectionID: 'Alone Pirate', onChain: true, contract: '0x36535ec384B94342558e37282527b5052587af6A', chain: 'Arbitrum', openSeaSlug: 'Alone Pirate' },
      ],
      uiOptions: {
        openingHeading: "Open a new world of discounts available with your tokens.",
        issuerHeading: "Discount with your tokens",
        repeatAction: "try again",
        theme: "light",
        position: "bottom-right"
      }
    });

    window.negotiator.negotiate();
    
  }
  render() {
    return this.props.render({ negotiator: window.negotiator })
  };
}

export { TokenContext, TokenContextProvider }