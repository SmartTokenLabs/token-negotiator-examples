export default [
  {
    collection: "BAYC",
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
        imagePath: require("../../../../../public/nfts/tokens/images/BAYC_1013.png"),
        name: "#1013",
        description: "stl demo nft"
      }
    ]
  },
  {
    collection: "MAYC",
    contracts: {
      "Rinkeby" : {
        contract: "0x70F6aCb098d57917CD46e8c647fa9c45800D29f2",
        abi: require('./abis/erc721-abi.json')
      },
      "Mumbai" : {
        contract: "0xF19C56362cfdF66f7080e4A58bf199064e57E07c",
        abi: require('./abis/erc721-abi.json')
      }
    },
    list: [
      {
        metaUrl: "https://gateway.pinata.cloud/ipfs/QmXdnWNa2CaRCUa4jMTirmkVJkygr2LtnccSuDY3yXrvVm/mayc_19748.json",
        ipfs: "https://gateway.pinata.cloud/ipfs/QmZSGPAFQfnPWRTRjwdUz3TtEBfvGk99iCzMWjwRWHBdpn",
        imagePath: require("../../../../../public/nfts/tokens/images/MAYC_19748.png"),
        name: "#19748",
        description: "stl demo nft"
      }
    ]
  },
  {
    collection: "NIFTY_DERIVATIVES",
    contracts: {
      "Rinkeby" : {
        contract: "0x60E04A774aD2Eca9e4093445dA67e649bb267879",
        abi: require('./abis/erc721-abi.json')
      },
      "Mumbai" : {
        contract: "0x46187667817C50251bA0bF266ffF49Cb39b2de2B",
        abi: require('./abis/erc721-abi.json')
      }
    },
    list: [
      {
        metaUrl: "https://gateway.pinata.cloud/ipfs/QmXdnWNa2CaRCUa4jMTirmkVJkygr2LtnccSuDY3yXrvVm/nifty_1013_15.json",
        ipfs: "https://resources.niftytailor.com/1/0x0c8b0e8f975bf3dfb99904005385e825a391af81/380.png",
        imagePath: require("../../../../../public/nfts/tokens/images/NIFTY_1013_15.png"),
        name: "BAYC #1013-15",
        description: "stl demo nft"
      },
      {
        metaUrl: "https://gateway.pinata.cloud/ipfs/QmXdnWNa2CaRCUa4jMTirmkVJkygr2LtnccSuDY3yXrvVm/nifty_1013_3.json",
        ipfs: "https://resources.niftytailor.com/1/0x0c8b0e8f975bf3dfb99904005385e825a391af81/272.png",
        imagePath: require("../../../../../public/nfts/tokens/images/NIFTY_1013_3.png"),
        name: "BAYC #1013-3",
        description: "stl demo nft"
      },
      {
        metaUrl: "https://gateway.pinata.cloud/ipfs/QmXdnWNa2CaRCUa4jMTirmkVJkygr2LtnccSuDY3yXrvVm/nifty_19748_2.json",
        ipfs: "https://resources.niftytailor.com/1/0x0c8b0e8f975bf3dfb99904005385e825a391af81/249.png",
        imagePath: require("../../../../../public/nfts/tokens/images/NIFTY_19748_3.png"),
        name: "MAYC #19748-3",
        description: "stl demo nft"
      },
      {
        metaUrl: "https://gateway.pinata.cloud/ipfs/QmXdnWNa2CaRCUa4jMTirmkVJkygr2LtnccSuDY3yXrvVm/nifty_19748_3.json",
        ipfs: "https://resources.niftytailor.com/1/0x0c8b0e8f975bf3dfb99904005385e825a391af81/93.png",
        imagePath: require("../../../../../public/nfts/tokens/images/NIFTY_19748_2.png"),
        name: "MAYC #19748-2",
        description: "stl demo nft"
      }
    ]
  },
  /*{
    collection: "BAYC",
    contracts: {
      "Rinkeby" : {
        contract: "0x80A679106f24684BB4c92828ACce5e92d2AfFcad",
        abi: require('./abis/erc721-abi.json')
      },
      "Mumbai" : {
        contract: "0x7573933eB12Fa15D5557b74fDafF845B3BaF0ba2",
        abi: require('./abis/erc721-abi.json')
      }
    },
    list: [
      {
        metaUrl: "https://gateway.pinata.cloud/ipfs/QmQumKykjybk95oF5QdkbQ6pkao7uLKBjES1ZtqeHYLBme",
        ipfs: "https://gateway.pinata.cloud/ipfs/QmRAF2zPcy6jJfi3w5JicTs1sdLaqywutyiYkspdeFeNNy",
        imagePath: require("../../../../../public/nfts/BAYC_4-1.png"),
        name: "4-1",
        description: "stl demo nft"
      },
      {
        metaUrl: "https://gateway.pinata.cloud/ipfs/QmSi2PjWCeZ4VbiGf7yxruxySFMdbyWnVKCDdAHJd7wmMg",
        ipfs: "https://gateway.pinata.cloud/ipfs/QmSZqeAU5w1ynjgEisy765L84vBTH4QJJLJUXKb9S5NarY",
        imagePath: require("../../../../../public/nfts/BAYC_4-2.png"),
        name: "4-2",
        description: "stl demo nft"
      }
    ]
  },
  {
    collection: "ZED",
    contracts: {
      "Rinkeby" : {
        contract: "0x8E3De6062c7041d483Cc1BE2654728f6956F7965",
        abi: require('./abis/erc721-abi.json')
      },
      "Mumbai": {
        contract: "0x4B468F549c58A9227bd8Fc4b0381c06a1C78a4cC",
        abi: require('./abis/erc721-abi.json')
      }
    },
    list: [
      {
        metaUrl: "https://gateway.pinata.cloud/ipfs/QmezFufvu59KkR4SJUeMf6EAhzZwsg3mJeGyztLhSL1z78",
        ipfs: "https://gateway.pinata.cloud/ipfs/QmfHSGwXhFsBjxTYDRo5aJNvmmAgjAYmihdNXsF7Zfc2jm",
        imagePath: require("../../../../../public/nfts/DriversRun.png"),
        name: "Drivers Run",
        description: "stl demo nft"
      }
    ]
  },
  {
    collection: "EXPANSION_PUNKS",
    contracts: {
      "Rinkeby" : {
        contract: "0x6d3495B5d83f6479Ab3023784f52B11AC3794e2F",
        abi: require('./abis/erc721-abi.json')
      },
      "Mumbai" : {
        contract: "0xaFd1a2f17Ce2A694d2EF649fe5Ba51Cc0282448A",
        abi: require('./abis/erc721-abi.json')
      }
    },
    list: [
      {
        metaUrl: "https://gateway.pinata.cloud/ipfs/QmdN4aSrCV6rpmVDLPAvXVAMcQ7FMJGYB1kWDtikqzP1r9",
        ipfs: "https://gateway.pinata.cloud/ipfs/QmP9pamMk45LxPy6ziCxCYjq435JdyRmCE28Z9QtPAuCHz",
        imagePath: require("../../../../../public/nfts/Expansion_Punk_16461.png"),
        name: "16461",
        description: "stl demo nft"
      }
    ]
  },*/
  {
    collection: "WOMEN_TRIBE",
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
        metaUrl: "https://gateway.pinata.cloud/ipfs/QmcQVZJxAvVQ7obNPAjcpxEKrLV6ox9TgyrcnX5uXDzKMR",
        ipfs: "https://gateway.pinata.cloud/ipfs/QmUKcBhBWGDDTwfLKWGJyJ66XNKrTGNCitVAKK4aLcxiKK",
        imagePath: require("../../../../../public/nfts/Women_Tribe_1370.png"),
        name: "1370",
        description: "stl demo nft"
      },
      {
        metaUrl: "https://gateway.pinata.cloud/ipfs/QmXcau2Mhsbm3UQ8xeQq62ZrcSbFNzNk2ffE6x9KMs1crX",
        ipfs: "https://gateway.pinata.cloud/ipfs/QmUEPVYoB15D2MR1oi2gpHTce4v9FQ3jDMEBAFAKPsaq8V",
        imagePath: require("../../../../../public/nfts/Women_Tribe_5274.png"),
        name: "5274",
        description: "stl demo nft"
      }
    ]
  },
  {
    collection: "RIOT_RACERS",
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
        metaUrl: "https://gateway.pinata.cloud/ipfs/QmXZ7HxVR5FpXKyjc9aWTdEe3DhQXMRA6FHkoWEorkp2j7",
        ipfs: "https://gateway.pinata.cloud/ipfs/Qmb5Q4QQSpPYkf6ta355ve3SYXZfbFMp2PiWPKGHiaUFhr",
        imagePath: require("../../../../../public/nfts/Octane.png"),
        name: "Octane",
        description: "stl demo nft"
      },
      {
        metaUrl: "https://gateway.pinata.cloud/ipfs/QmStVYUYb3CtNV2BoQp8JiHqkR8sJWWzq1KvRKPUoTVBgv",
        ipfs: "https://gateway.pinata.cloud/ipfs/QmdFox1wfNvLSZAodKn1YKhRn3DzYjWpCKq2UncpV1fTSJ",
        imagePath: require("../../../../../public/nfts/AirBender.png"),
        name: "Air Bender",
        description: "stl demo nft"
      },
    ]
  }
]