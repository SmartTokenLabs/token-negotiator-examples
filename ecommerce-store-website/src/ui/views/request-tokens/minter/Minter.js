import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected, safeMint } from "./utils/interact.js";
import { Image } from "ui/components";
import { chainMap, supportedChains } from './utils/network';
import nftDataStore from './nftDataStore';

const Minter = () => {

  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [nftCollection, setNFTCollection] = useState([]);
  const [chain, setChain] = useState("");
  const [sentToAddress, setSendToAddress] = useState();
 
  useEffect(async () => {
    getCurrentWalletConnected().then((res) => {
      const {address, status} = res;
      setWallet(address)
      setStatus(status); 
      addWalletListener();
      setNFTCollection(nftDataStore[0]);
      setTimeout(() => {
        if(window.ethereum && window.ethereum.chainId){
          setChain(chainMap[window.ethereum.chainId] ? chainMap[window.ethereum.chainId] : 'unsupported chain: ' + window.ethereum.chainId);
        }
      }, 2000);
    });
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async (event, collectionItem) => {

    if(!nftCollection.contracts[chain]) {
      
      // 

    } else {

      const { status } = await safeMint({
        walletAddress: walletAddress,
        sendTo: sentToAddress ? sentToAddress : walletAddress,
        abi: nftCollection.contracts[chain].abi,
        contract: nftCollection.contracts[chain].contract,
        chain: chain,
        name: collectionItem.name,
        imageURI: collectionItem.ipfs,
        description: collectionItem.description,
        tokenUri: collectionItem.metaUrl
      });

      setStatus(status);

    }

  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on('chainChanged', (chainId) => {
        setChain(chainMap[chainId] ? chainMap[chainId] : 'unsupported chain: ' + chainId );
      });
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("Select an NFT to mint from a collection from the dropdown.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const updateNFTCollection = (event) => {
    setNFTCollection(nftDataStore[event.target.value]);
  }

  const applySentToAddress = (event) => {
    setSendToAddress(event.target.value)
  }

  const closeWarning = (event) => {
    event.target.parentElement.style.display='none';
  }
  
  return (
    <div className="Minter grid -g-cols-1">

      { 
        chain && !(chain === 'Rinkeby' || chain === 'Mumbai') && <div className="alert">
          <span className="closebtn" onClick={closeWarning}>&times;</span> 
            <strong>Alert!</strong> Network is not supported, use Rinkeby or Mumbai.
          </div>
      }

      { !walletAddress &&
      <button id="walletButton" onClick={connectWalletPressed}>
          <span>Connect Wallet</span>
      </button>
      }

      { walletAddress &&
      <div className="text-center">
        Wallect Connected: { String(walletAddress).substring(0, 6) + "..." + String(walletAddress).substring(38) }
        { chain && <span> | {chain} </span> }
      </div>
      }

      <br></br>
      <p className="text-center">[for Rinkeby or Mumbai]</p>

      <div className="input-container">

        <div className="select-container">
        
          <select onChange={updateNFTCollection}>
            {
              nftDataStore.map((o, i) => {
                return <option value={i} key={i}>{o.collection}</option>;
              })
            }
          </select>
        
      </div>
      
      <input className="address-input" onChange={applySentToAddress} placeholder="send to 0x... (optional)" name="address" type="text" />

    </div>

      <div className="collection-container">
        {
          nftCollection.list && nftCollection.list.map((collectionItem, i) => {
            return <div key={i} className="nft-container"><Image src={collectionItem.imagePath}></Image><button onClick={event => onMintPressed(event, collectionItem)}>Mint</button></div>;
          })
        }
      </div>
      
      <p className="status">{status}</p>

      <div className="disclaimer">
        Disclaimer: These NFTs are for Demo purposes only on supported networks: <b>Rinkeby or Mumbai.</b>
      </div>
      
    </div>
  );
};

export default Minter;
