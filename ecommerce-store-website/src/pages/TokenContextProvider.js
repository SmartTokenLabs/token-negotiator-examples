import { withCoalescedInvoke } from "next/dist/lib/coalesced-function";
import React, { createContext, useState, useEffect } from "react";
import { chainMap } from "src/base/utils/network";

const TokenContext = createContext({
  tokens: [],
  wallet: {},
  proof: {},
  negotiator: {}
});

const mumbaiIssuers = [
  {
    collectionID: "stl-bayc-mumbai",
    onChain: true,
    contract: "0x594CeCc147F8F27fF6d269AE23D9a0Ff27d979F4",
    chain: "mumbai",
    openSeaSlug: undefined,
  },
  {
    collectionID: "stl-wow-mumbai",
    onChain: true,
    contract: "0xa432AC92c386b9929Bd9308C4e98505ac22d3A00",
    chain: "mumbai",
    openSeaSlug: undefined,
  },
  {
    collectionID: "stl-riot-racer-mumbai",
    onChain: true,
    contract: "0x165B81C550263f6E9AC9B1852D6A8bAC9538E6d7",
    chain: "mumbai",
    openSeaSlug: undefined,
  },
];

const goerliIssuers = [
  {
    collectionID: "stl-bayc-goerli",
    onChain: true,
    contract: "0xc361201E5B1005cCDE47B32F223BC145DE393F62",
    chain: "goerli",
    openSeaSlug: undefined,
  },
  {
    collectionID: "stl-wow-goerli",
    onChain: true,
    contract: "0x87644E0A1287A4D96DecC29A13400a1be9759AF8",
    chain: "goerli",
    openSeaSlug: undefined,
  },
  {
    collectionID: "stl-riot-racer-goerli",
    onChain: true,
    contract: "0xae96095fF42B0Cae2DaD3d49E5EE11663280d819",
    chain: "goerli",
    openSeaSlug: undefined,
  },
];

const TokenContextProvider = (props) => {

  const [negotiator, setNegotiator] = useState({});

  const [tokens, setTokens] = useState([]);

  const [proof, setProof] = useState();

  const [wallet, setWallet] = useState();

  useEffect(() => {

    import("@tokenscript/token-negotiator").then((negotiatorInstance) => {
      let currentIssuers = goerliIssuers;
      negotiator = new negotiatorInstance.Client({
        type: "active",
          issuers: [...currentIssuers],
          uiOptions: {
            openingHeading:
              "Open a new world of discounts available with your tokens.",
            issuerHeading: "Get discounts with tokens",
            repeatAction: "try again",
            position: "bottom-right",
          },
          ipfsBaseUrl:
            "https://smart-token-labs-demo-server.mypinata.cloud/ipfs/"
      });

      negotiator.on("tokens-selected", (tokens) => {

        console.log("tokens", tokens);
                
        setTokens({...tokens.selectedTokens});
  
      });
  
      negotiator.on("token-proof", (result) => {
        
        console.log("token proof", result.data);
  
        setProof(result.data);
      });
  
      negotiator.on("connected-wallet", (connectedWallet) => {
  
        setWallet(connectedWallet);
        resetIssuers(connectedWallet.chainId);
  
      });
  
      negotiator.on("network-change", (chain) => {
  
        resetIssuers(chain);
        
      });
  
      const resetIssuers = (networkId) => {
        if (!networkId) return;
  
        const normalisedNetworkId = chainMap[networkId]
          ? chainMap[networkId]
          : "";
  
        if (normalisedNetworkId === "Goerli") {
          // Goerli
          negotiator.negotiate(goerliIssuers);
        }
  
        if (normalisedNetworkId === "Mumbai") {
          // Mumbai
          negotiator.negotiate(mumbaiIssuers);
        }
      };

      negotiator.negotiate();

    });

  }, []);

  return (
    <TokenContext.Provider value={{ tokens, negotiator, wallet, proof }}>
      {props.children}
    </TokenContext.Provider>
  );
};

export { TokenContextProvider, TokenContext };
