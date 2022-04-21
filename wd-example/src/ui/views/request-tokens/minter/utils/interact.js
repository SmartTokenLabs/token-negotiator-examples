import { pinJSONToIPFS } from './pinata.js'
//import 'dotenv/config';

const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

export const safeMint = async ({
  sendTo,
  abi,
  contract,
  chain,
  name,
  imageURI,
  walletAddress,
  description
}) => {
  
  if (imageURI.trim() === "" || (name.trim() === "")) {
    return {
      success: false,
      status: "❗Please make sure all fields are completed before minting.",
    }
  }

  const metadata = new Object();
  metadata.name = name;
  metadata.image = imageURI;
  metadata.description = description;

  const pinataResponse = await pinJSONToIPFS(metadata);

  if (!pinataResponse.success) {
    return {
      success: false,
      status: "😢 Something went wrong while uploading your tokenURI.",
    }
  }

  const tokenURI = pinataResponse.pinataUrl;

  window.contract = await new web3.eth.Contract(abi, contract);

  console.log("Send to:" + sendTo);
  console.log("Token URI: " + tokenURI);

  const transactionParameters = {
    to: contract,
    from: walletAddress,
    'data': window.contract.methods.safeMint(sendTo, tokenURI).encodeABI()
  };

  //sign the transaction via Metamask
  try {
    const txHash = await window.ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
    return {
      success: true,
      status: "✅ Check out your transaction: " + chain + " " + txHash
    }
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message
    }
  }
}

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "Select an NFT to mint from a collection from the dropdown.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "Select an NFT to mint from a collection from the dropdown.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};
