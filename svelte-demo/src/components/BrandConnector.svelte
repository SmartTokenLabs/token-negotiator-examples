
  
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
				{ collectionID: 'COOLCATS-#2426-14', onChain: true, contract: '0x3C7e352481F4b2fdEc1e642a3f0018661c77513D', chain: 'Ethereum', openSeaSlug: 'devcon-vi-suit-up-collection' },
				{ collectionID: 'Town-Hall', onChain: true, contract: '0x81b30ff521D1fEB67EDE32db726D95714eb00637', chain: 'Optimism', openSeaSlug: 'Optimistic Explorer' },
				{ collectionID: 'Blusteak Kangaroo #64', onChain: true, contract: '0xa996F7F3BC647EebC98C684aB0A302c9b85d2FA1', chain: 'Avalanche', openSeaSlug: 'Marketing Kangaroos' },
				{ collectionID: 'Alone Pirate', onChain: true, contract: '0x36535ec384B94342558e37282527b5052587af6A', chain: 'Arbitrum', openSeaSlug: 'Alone Pirate' },
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