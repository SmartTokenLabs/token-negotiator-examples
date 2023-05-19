
  
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
				{ onChain: true, collectionID: "Perion", contract: '0x96af92ae2d822a0f191455ceca4d4e7ee227668e', chain: 'mumbai', blockchain: "evm" },
				{ collectionID: 'COOLCATS-#2426-14', onChain: true, contract: '0x3C7e352481F4b2fdEc1e642a3f0018661c77513D', chain: 'eth', openSeaSlug: 'devcon-vi-suit-up-collection' },
				{ collectionID: 'Town-Hall', onChain: true, contract: '0x81b30ff521D1fEB67EDE32db726D95714eb00637', chain: 'Optimism' },
				{ collectionID: 'Blusteak Kangaroo #64', onChain: true, contract: '0xa996F7F3BC647EebC98C684aB0A302c9b85d2FA1', chain: 'Avalanche' },
				{ collectionID: 'Alone Pirate', onChain: true, contract: '0x36535ec384B94342558e37282527b5052587af6A', chain: 'Arbitrum' },
				{ collectionID: 'TNM', onChain: true, contract: '0x3cC6c9c6DC13814c6ba4da3520d2Ae40332A831F', chain: 'goerli', fungible: true },
				{ collectionID: 'Tether-USD', onChain: true, contract: '0xdac17f958d2ee523a2206206994597c13d831ec7', chain: 'eth', fungible: true },
				{ collectionID: 'AdEx-Network', onChain: true, contract: '0xade00c28244d5ce17d72e40330b1c318cd12b7c3', chain: 'eth', fungible: true },
				{ collectionID: 'AAVEPool', contract: "0xb7fd3398484ea4eff33e003db4c85d4984f8d62e", fungible: true, onChain: true, chain: 'polygon' },
				{ collectionID: 'Minereum-AVAX', contract: "0xf9d922c055a3f1759299467dafafdf43be844f7a", fungible: true, onChain: true, chain: 'Avalanche' },
				{ collectionID: "Testv4", contract: "0x499d11e0b6eac7c0593d8fb292dcbbf815fb29ae", fungible: true, onChain: true, chain: 'goerli' },
				{ collectionID: 'Dummy ERC20', contract: "0xfe4f5145f6e09952a5ba9e956ed0c25e3fa4c7f1", fungible: true, onChain: true, chain: 'mumbai' },
				{ collectionID: 'Domains', onChain: true, contract: 'A.233eb012d34b0070.Domains', chain: 'mainnet', blockchain: 'flow' },
        		{ collectionID: 'AllDay', onChain: true, contract: 'A.e4cf4bdc1751c65d.AllDay', chain: 'mainnet', blockchain: 'flow' },
        		{ collectionID: "NBA", onChain: true, contract: "A.0b2a3299cc857e29.TopShot", chain: "mainnet", blockchain: "flow"},
			],
			uiOptions: {
				openingHeading: "Open a new world of perks, benefits and opportunities with your attestation, collectible or token.",
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