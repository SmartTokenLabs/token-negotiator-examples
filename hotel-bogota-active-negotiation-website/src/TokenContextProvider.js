import React, { createContext, useState } from 'react';
import { Client } from '@tokenscript/token-negotiator';

const TokenContext = createContext({ tokens: [] });

const TokenContextProvider = (props) => {
  const [tokens, setTokens] = useState([]);
  window.addEventListener('message', (event) => {
    switch(event.data.evt) {
      case 'setSelectedTokens':
        setTokens(event.data.selectedTokens);
        break;
    }
  }, false);

  return (
    <TokenNegotiatorInstance render={({ negotiator, modalContainer }) => (
        <TokenContext.Provider value={{ tokens, negotiator, modalContainer }}>
          {props.children}
        </TokenContext.Provider>
      )} /> 
    )
}
class TokenNegotiatorInstance  extends React.Component {
  constructor(props) {
    super(props);
    // add filters when specific tokens are required.
    const filter = {};
    // for localhost development token use:
    const tokenName = "devcon-ticket-local-3002";
    // set required negotiator options.
    const options = { useOverlay: true, tokenSelectorContainer: ".tokenSelectorContainerElement" };
    // create new instance of the Negotiator with params
    window.negotiator = new Client({ tokenName, filter, options });
    // instance of negotiator
    this.state = { negotiator: window.negotiator };
    window.negotiator.negotiate();
  }
  render() { return this.props.render({ negotiator: negotiator, modalContainer: this.state.modalContainer }) };
}

export { TokenContext, TokenContextProvider }
