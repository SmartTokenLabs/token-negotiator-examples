
export const safeMint = async ({
	connectedWallet,
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
	
	window.negotiator.ui.showLoaderDelayed([
		"<h4>Mint Demo NFT...</h4>",
		"<small>Sign the new transaction in your wallet</small>"
	], 600, true);

	try {

		window.contract = new _ethers.Contract(contract, abi, connectedWallet.provider.getSigner());
		const txHash = await window.contract.safeMint(sendTo, tokenUri);

		window.negotiator.ui.showLoaderDelayed([ 
			"<h4>Minting...</h4>",
			"<small>Transaction in progress</small>"
		], 0, true);

		setTimeout(() => { window.negotiator.ui.dismissLoader() }, 5000);
		
		return {
			success: true,
			status: "✅ Check out your transaction: " + chain + " " + txHash?.hash
		}

	} catch (error) {

		window.negotiator.ui.showError('Something went wrong, please try again.');

		console.warn(error.message);
		
		return {
			success: false,
			status: "Something went wrong, please try again.");
		}

	}

}

