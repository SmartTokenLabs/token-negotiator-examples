
import Web3 from "web3";
import * as ethers from "ethers";

export const safeMint = async ({
	sendTo,
	abi,
	contract,
	chain,
	name,
	imageURI,
	walletAddress,
	description,
	tokenUri
}) => {
	//let web3 = new Web3(window.ethereum);
	let web3

	let walletProvider = await window.negotiator.getWalletProvider();

	console.log("Mint");

	if (walletProvider.getConnectedWalletData().length > 0){
		web3 = new ethers.providers.Web3Provider(walletProvider.getConnectedWalletData()[0].providers);
	} else if (window.ethereum) {
		web3 = new ethers.providers.Web3Provider(window.ethereum);
	}

	window.contract = await new web3.eth.Contract(abi, contract);

	const transactionParameters = {
		to: contract,
		from: walletAddress,
		'data': window.contract.methods.safeMint(sendTo, tokenUri).encodeABI()
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
	if ( window.ethereum ) {
		try {
			const addressArray = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			const obj = {
				status: "",
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
			status: "You must have Metamask, Torus or Wallet Connect."
		};
	}
};

export const getCurrentWalletConnected = async () => {

	if (window.negotiator) {

		let walletProvider = await window.negotiator.getWalletProvider();

		if (walletProvider.getConnectedWalletData().length > 0){

			let provider = new ethers.providers.Web3Provider(walletProvider.getConnectedWalletData()[0].provider);

			try {
				const addressArray = await provider.getAccounts();
				if (addressArray.length > 0) {
					return {
						provider: provider,
						address: addressArray[0],
						status: "",
					};
				} else {
					return {
						address: "",
						status: "You must connect to Metamask, Torus or Wallet Connect to be able to request tokens.",
					};
				}
			} catch (err) {
				return {
					address: "",
					status: "😥 " + err.message,
				};
			}
		}
	}

	return {
		address: "",
		status: "You must have Metamask, Torus or Wallet Connect."
	};
};
