
  
<script lang="ts">
	import { onMount } from "svelte";
	let negotiatorClient;

	onMount(async () => {
		negotiatorClient = new negotiator.Client({
			type: 'active',
			issuers: [
				{
					onChain: true, 
					collectionID: "Perion", 
					contract: '0x96af92ae2d822a0f191455ceca4d4e7ee227668e', 
					chain: 'mumbai',
					blockchain: "evm",
				},
			],
			uiOptions: {
				openingHeading: "Open a new world of discounts available with your tokens.",
				issuerHeading: "Get discount with Ticket",
				repeatAction: "try again",
				theme: 'dark',
				position: "bottom-right"
			},
			unSupportedUserAgent: {
				authentication: {
					config: {
						metaMaskAndroid: true,
						alphaWalletAndroid: true,
						mewAndroid: true,
						imTokenAndroid: true,
					},
					errorMessage: "No Support for Authentication with this user agent. Try Chrome, Safari or Edge instead."
				},
				full: {
					config: {
						iE: true,
						iE9: true,
					},
					errorMessage: "This browser is not supported. Please try using Chrome, Edge, FireFox or Safari."
				}
			},
		});

		negotiatorClient.on("tokens-selected", (tokens) => {
			console.log('tokens-selected hook ==>', tokens);
		});

		negotiatorClient.on("connected-wallet", (wallet) => {
			console.log('connected-wallet hook', wallet);
		});

		negotiatorClient.on("token-proof", (proof) => {
			console.log('token-proof hook ==>', proof);
		});

		negotiatorClient.on("disconnected-wallet", () => {
			console.log('disconnected-wallet hook ==>')
		});

		negotiatorClient.negotiate();
	});
</script>

<div class="overlay-tn"></div>