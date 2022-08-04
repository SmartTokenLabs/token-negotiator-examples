export default [
	{
		collection: "BAYC",
		title: "Bored Ape Yacht Club",
		description: "Use a BAYC Token to get VIP room upgrades at the Music & Events demo shop.",
		contracts: {
			"Rinkeby" : {
				contract: "0x3d8a0fB32b0F586FdC10447c22F477979dc526ec",
				abi: require('./abis/erc721-abi.json')
			},
			"Mumbai" : {
				contract: "0x594CeCc147F8F27fF6d269AE23D9a0Ff27d979F4",
				abi: require('./abis/erc721-abi.json')
			}
		},
		list: [
			{
				metaUrl: "https://gateway.pinata.cloud/ipfs/QmXdnWNa2CaRCUa4jMTirmkVJkygr2LtnccSuDY3yXrvVm/bayc_1013.json",
				ipfs: "https://gateway.pinata.cloud/ipfs/QmWiozg1axUSpVowzdTvb5vq7pZyERvAFcTeT8qTojq6qe",
				imagePath: require("/public/nfts/tokens/images/BAYC_1013.png"),
				name: "#1013",
				id: "1013",
				description: "stl demo nft"
			}
		]
	},
	{
		collection: "WoW",
		title: "World of Women",
		description: "Use a WoW Token to get access to exclusive early drops at the Fashion demo shop.",
		contracts: {
			"Rinkeby" : {
				contract: "0xDbaCB1C25d849321727534C1BB2bbd962272eB13",
				abi: require('./abis/erc721-abi.json')
			},
			"Mumbai": {
				contract: "0x601bC9fA3D38Fe78a43c6B4cC4A885823D336288",
				abi: require('./abis/erc721-abi.json')
			}
		},
		list: [
			{
				metaUrl: "",
				ipfs: "",
				imagePath: require("/public/nfts/wow_9211.png"),
				name: "#9211",
				id: "9211",
				description: "stl demo nft"
			},
		]
	},
	{
		collection: "RIOT_RACERS",
		title: "Riot Racers",
		description: "Use a Riot Racer Token to book a day at the race tracks at the Automotive demo shop.",
		contracts: {
			"Rinkeby" : {
				contract: "0x399653F4212bf3EA3AF9bCE45a294AB462f22436",
				abi: require('./abis/erc721-abi.json')
			},
			"Mumbai": {
				contract: "0x487361F1e70a991351Fa48028545DaF545673ADb",
				abi: require('./abis/erc721-abi.json')
			}
		},
		list: [
			{
				metaUrl: "https://gateway.pinata.cloud/ipfs/QmStVYUYb3CtNV2BoQp8JiHqkR8sJWWzq1KvRKPUoTVBgv",
				ipfs: "https://gateway.pinata.cloud/ipfs/QmdFox1wfNvLSZAodKn1YKhRn3DzYjWpCKq2UncpV1fTSJ",
				imagePath: require("/public/nfts/AirBender.png"),
				name: "Air Bender",
				id: "air_bender",
				description: "stl demo nft"
			},
		]
	}
]