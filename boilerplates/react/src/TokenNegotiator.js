import { createContext } from 'react';
import { Client } from "@tokenscript/token-negotiator";
import "@tokenscript/token-negotiator/dist/theme/style.css";

const TokenNegotiatorContext = createContext();

export const TokenNegotiatorProvider = ({ children }) => {

  const tokenNegotiator = new Client({
    type: "active",
    issuers: [
      {
        blockchain: "evm",
        onChain: true,
        collectionID: "expansion-punks",
        contract: "0x0d0167a823c6619d430b1a96ad85b888bcf97c37",
        chain: "eth",
      }
    ],
    uiOptions: {
      openingHeading: "Connect your NFT to access custom content and more.",
      issuerHeading: "Get discount with token",
      repeatAction: "try again",
      theme: "light",
      position: "bottom-right",
    },
  });

  return (
    <TokenNegotiatorContext.Provider value={{ tokenNegotiator }}>
      {children}
    </TokenNegotiatorContext.Provider>
  );
};

export default TokenNegotiatorContext;