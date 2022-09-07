
import Web3 from "web3";

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

	//sign the transaction via Metamask
	try {

		if(window.connectedWallet) {

			console.log(
				'safe mint: ',
				sendTo,
				abi,
				contract,
				chain,
				name,
				imageURI,
				walletAddress,
				description,
				tokenUri
			);
		
			const web3 = new Web3(window.connectedWallet.provider);

			window.contract = await new web3.eth.Contract(abi, contract);

			const transactionParameters = {
				to: contract,
				from: walletAddress,
				data: window.contract.methods.safeMint(sendTo, tokenUri).encodeABI()
			};

			const txHash = await window.connectedWallet.sendTransaction({
					method: 'eth_sendTransaction',
					params: [transactionParameters],
				});
			return {
				success: true,
				status: "✅ Check out your transaction: " + chain + " " + txHash
			}
			
		}

	} catch (error) {
		return {
			success: false,
			status: "😥 Something went wrong: " + error.message
		}
	}
}

export const connectWallet = async () => {
	if ( window.connectedWallet ) {
		try {
			const addressArray = await window.connectedWallet.provider.listAccounts();
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
			status: "You must have Metamask browser extension to connect."
		};
	}
};

export const getCurrentWalletConnected = async () => {
	if (window.connectedWallet) {
		try {
			const addressArray = await window.connectedWallet.provider.listAccounts();
			if (addressArray.length > 0) {
				return {
					address: addressArray[0],
					status: "",
				};
			} else {
				return {
					address: "",
					status: "You must connect to Metamask browser extension to connect.",
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
			status: "You must have Metamask browser extension to connect."
		};
	}
};
