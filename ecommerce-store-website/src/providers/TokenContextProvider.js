import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useRef
} from "react";
import { chainMap } from "src/base/utils/network";
import {
  sendTokensSelectedEvent,
  sendTokenProofEvent,
  sendWalletConnectedEvent,
  loadAgreeToStats,
  storeAgreeToStats
} from "src/base/utils/stats";

const TokenContext = createContext({
  tokens: {},
  wallet: {},
  proof: {},
  negotiator: {},
  walletStatus: "",
  chainId: "",
  switchChain: undefined
});

const mumbaiIssuers = [
  {
    collectionID: "stl-bayc-mumbai",
    onChain: true,
    contract: "0x594CeCc147F8F27fF6d269AE23D9a0Ff27d979F4",
    chain: "mumbai",
    openSeaSlug: undefined
  },
  {
    collectionID: "stl-wow-mumbai",
    onChain: true,
    contract: "0xa432AC92c386b9929Bd9308C4e98505ac22d3A00",
    chain: "mumbai",
    openSeaSlug: undefined
  },
  {
    collectionID: "stl-riot-racer-mumbai",
    onChain: true,
    contract: "0x165B81C550263f6E9AC9B1852D6A8bAC9538E6d7",
    chain: "mumbai",
    openSeaSlug: undefined
  }
];

const goerliIssuers = [
  {
    collectionID: "stl-bayc-goerli",
    onChain: true,
    contract: "0xc361201E5B1005cCDE47B32F223BC145DE393F62",
    chain: "goerli",
    openSeaSlug: undefined
  },
  {
    collectionID: "stl-wow-goerli",
    onChain: true,
    contract: "0x87644E0A1287A4D96DecC29A13400a1be9759AF8",
    chain: "goerli",
    openSeaSlug: undefined
  },
  {
    collectionID: "stl-riot-racer-goerli",
    onChain: true,
    contract: "0xae96095fF42B0Cae2DaD3d49E5EE11663280d819",
    chain: "goerli",
    openSeaSlug: undefined
  }
];

const TokenContextProvider = (props) => {
  const [negotiator, setNegotiator] = useState({});
  const [tokens, setTokens] = useState([]);
  const [proof, setProof] = useState();
  const [wallet, setWallet] = useState();
  const [walletStatus, setWalletStatus] = useState("");
  const [chainId, setChainId] = useState("");
  const [agreeToStats, setAgreeToStats] = useState(false);
  const agreeToStatsValue = useRef();
  agreeToStatsValue.current = agreeToStats;

  useEffect(() => {
    setAgreeToStats(loadAgreeToStats());
  }, []);
  useEffect(() => {
    storeAgreeToStats(agreeToStats);
  }, [agreeToStats]);

  useEffect(() => {
    import("@tokenscript/token-negotiator").then((negotiatorInstance) => {
      let currentIssuers = goerliIssuers;
      const newNegotiator = new negotiatorInstance.Client({
        type: "active",
        issuers: [...currentIssuers],
        uiOptions: {
          openingHeading:
            "Open a new world of perks, benefits and opportunities with your attestation, collectible or token.",
          issuerHeading: "Get discounts with tokens",
          repeatAction: "try again",
          position: "bottom-right"
        },
        ipfsBaseUrl:
          "https://smart-token-labs-demo-server.mypinata.cloud/ipfs/",
        walletOptions: {
          walletConnectV2: {
            chains: ["eip155:5", "eip155:80001"]
          }
        }
      });

      setNegotiator(newNegotiator);
      window.negotiator = newNegotiator;

      newNegotiator.on("tokens-selected", ({ selectedTokens, selectedIssuers }) => {
        if (agreeToStatsValue.current) sendTokensSelectedEvent(selectedTokens);
        setTokens({ ...selectedTokens });
      });

      newNegotiator.on("token-proof", (result) => {
        if (agreeToStatsValue.current) sendTokenProofEvent(result);
        setProof(result.data);
      });

      newNegotiator.on("connected-wallet", (connectedWallet) => {
        if (connectedWallet) {
          if (agreeToStatsValue.current)
            sendWalletConnectedEvent(connectedWallet);
          setWallet(connectedWallet);
          resetIssuers(connectedWallet.chainId);
          setWalletStatus(undefined);
        } else {
          setWallet(null);
          setTokens({});
          setWalletStatus("You must connect your wallet to continue.");
        }
      });

      newNegotiator.on("network-change", (chain) => {
        resetIssuers(chain);
        const walletConnection =
          newNegotiator.web3WalletProvider.getConnectedWalletData();
        if (walletConnection.length > 0) {
          setWallet(walletConnection[0]);
        }
      });

      newNegotiator.negotiate();
    });
  }, []);

  const resetIssuers = (networkId) => {
    if (!networkId) return;

    if (typeof networkId === "string") networkId = parseInt(networkId, 16);

    console.log("New chain ID: ", networkId);

    setChainId(networkId);

    const normalisedNetworkId = chainMap[networkId] ? chainMap[networkId] : "";

    switch (normalisedNetworkId) {
      case "Goerli":
        window.negotiator.negotiate(goerliIssuers);
        break;
      case "Mumbai":
        window.negotiator.negotiate(mumbaiIssuers);
        break;
      default:
        break;
    }
  };

  async function switchChain(nChainId) {
    // Try automatically switching to Goerli
    await wallet.provider.send("wallet_switchEthereumChain", [
      { chainId: "0x" + Number(nChainId).toString(16) }
    ]);
    resetIssuers(nChainId);
  }

  const tokenContextProviderValue = useMemo(
    () => ({
      tokens,
      negotiator,
      wallet,
      proof,
      walletStatus,
      chainId,
      agreeToStats,
      setAgreeToStats,
      switchChain
    }),
    [
      tokens,
      negotiator,
      wallet,
      proof,
      walletStatus,
      chainId,
      agreeToStats,
      switchChain
    ]
  );

  return (
    <TokenContext.Provider value={tokenContextProviderValue}>
      {props.children}
    </TokenContext.Provider>
  );
};

export { TokenContextProvider, TokenContext };
