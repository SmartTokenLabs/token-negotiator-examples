export const safeMint = async ({
	sendTo,
	abi,
	contract,
	chain,
	name,
	imageURI,
	walletAddress,
	description,
	tokenUri,
	walletProvider
}) => {

	window.negotiator.ui.showLoaderDelayed([
		"<h4>Mint Demo NFT...</h4>",
		"<small>Sign the new transaction in your wallet</small>"
	], 600, true);

	try {

		window.contract = new _ethers.Contract(contract, abi, walletProvider.getSigner());
		const txHash = await window.contract.safeMint(sendTo, tokenUri);

		window.negotiator.ui.showLoaderDelayed([ 
			"<h4>Minting...</h4>",
			"<small>Transaction in progress</small>"
		], 0, true);

		setTimeout(() => { window.negotiator.ui.dismissLoader() }, 5000);

		console.log('txHash', txHash);
		
		return {
			success: true,
			status: "✅ Check out your transaction: " + chain + " " + txHash?.hash
		}

	} catch (error) {

		window.negotiator.ui.showError(error.message);
		
		return {
			success: false,
			status: "😥 Something went wrong: " + error.message
		}

	}

}
