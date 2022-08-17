export default [
	{
		collection: "STL_BAYC",
		title: "STL Bored Ape Yacht Club",
		description: "Use a BAYC Token to get VIP room upgrades at the Music & Events demo shop.",
		contracts: {
			"Rinkeby" : {
				contract: "0x3d8a0fB32b0F586FdC10447c22F477979dc526ec",
				abi: require('./abis/erc721-abi.json')
			},
			"Mumbai" : {
				contract: "0x594CeCc147F8F27fF6d269AE23D9a0Ff27d979F4",
				abi: require('./abis/erc721-abi.json')
			},
			"Goerli" : {
				contract: "0xc361201E5B1005cCDE47B32F223BC145DE393F62",
				abi: require('./abis/erc721-abi.json')
			}
		},
		list: [
			{
				ref: "stl-bayc",
				metaUrl: "https://gateway.pinata.cloud/ipfs/QmXdnWNa2CaRCUa4jMTirmkVJkygr2LtnccSuDY3yXrvVm/bayc_1013.json",
				ipfs: "https://gateway.pinata.cloud/ipfs/QmWiozg1axUSpVowzdTvb5vq7pZyERvAFcTeT8qTojq6qe",
				imagePath: "/nfts/tokens/images/BAYC_1013.png",
				name: "#1013",
				id: "1013",
				description: "stl demo nft"
			}
		]
	},
	{
		collection: "STL_WoW",
		title: "STL WoW",
		description: "Use a WoW Token to get access to exclusive early drops at the Fashion demo shop.",
		contracts: {
			"Rinkeby" : {
				contract: "0xf0dDde481a5F3DaF2A5665F88D5767CB0732b638",
				abi: require('./abis/erc721-abi.json')
			},
			"Mumbai": {
				contract: "0xa432AC92c386b9929Bd9308C4e98505ac22d3A00",
				abi: require('./abis/erc721-abi.json')
			}, 
			"Goerli": {
				contract: "0x87644E0A1287A4D96DecC29A13400a1be9759AF8",
				abi: require('./abis/erc721-abi.json')
			}
		},
		list: [
			{
				ref: "stl-wow",
				metaUrl: "https://gateway.pinata.cloud/ipfs/QmUPQTm834uSNo951vh466wJ1Wh5ofSpRBwYRhyYqKfGMW",
				ipfs: "https://gateway.pinata.cloud/ipfs/",
				imagePath: '/nfts/stl-wow-4636.png',
				name: "WoW #4636",
				id: "wow_4636",
				description: "stl demo nft"
			},
			{
				collection: "STL_WoW",
				metaUrl: "https://gateway.pinata.cloud/ipfs/QmQz59bHkB1U4AyZzCKhGvzAbjkWApJQ27ouZ4Bhngeb2T",
				ipfs: "https://gateway.pinata.cloud/ipfs/",
				imagePath: '/nfts/stl-wow-9211.png',
				name: "WoW #9211",
				id: "wow_9211",
				description: "stl demo nft"
			}
		]
	},
	{
		collection: "STL_RIOT_RACER",
		title: "STL Riot Racer",
		description: "Use a Riot Racer Token to book a day at the race tracks at the Automotive demo shop.",
		contracts: {
			"Rinkeby" : {
				contract: "0x399653F4212bf3EA3AF9bCE45a294AB462f22436",
				abi: require('./abis/erc721-abi.json')
			},
			"Mumbai": {
				contract: "0x165B81C550263f6E9AC9B1852D6A8bAC9538E6d7",
				abi: require('./abis/erc721-abi.json')
			},
			"Goerli": {
				contract: "0xae96095fF42B0Cae2DaD3d49E5EE11663280d819",
				abi: require('./abis/erc721-abi.json')
			},
		},
		list: [
			{
				ref: "stl-riot-racer",
				metaUrl: "https://gateway.pinata.cloud/ipfs/QmStVYUYb3CtNV2BoQp8JiHqkR8sJWWzq1KvRKPUoTVBgv",
				ipfs: "https://gateway.pinata.cloud/ipfs/QmdFox1wfNvLSZAodKn1YKhRn3DzYjWpCKq2UncpV1fTSJ",
				imagePath: '/nfts/stl-rr-airbender.png',
				name: "STL Airbender",
				id: "air_bender",
				description: "stl demo nft"
			},
			{
				ref: "stl-riot-racer",
				metaUrl: "https://gateway.pinata.cloud/ipfs/QmQpcGRAP19Q8BkQueUcmWoWxwjZ31Cvat8p7fa3Xr8213",
				ipfs: "https://gateway.pinata.cloud/ipfs/QmQmBW5HVNw5tLzRKtrjNmbvmWVKrMduoepFfbDHWw3tS5",
				imagePath: '/nfts/stl-rr-aurora.png',
				name: "STL Aurora",
				id: "air_aurora",
				description: "stl demo nft"
			}			
		]
	}
]
