export default [
  {
    collection: "BAYC",
    contracts: {
      "Rinkeby" : {
        contract: "0x26472AA24D795AbcB687bddb44d733ef55Ebdf09",
        abi: require('./abis/erc721-abi.json')
      },
      "Mumbai" : {
        contract: "0x10125177d4b7063260B4B7200b0FD1dC6d8EdDfd",
        abi: require('./abis/erc721-abi.json')
      }
    },
    list: [
      {
        ipfs: "https://gateway.pinata.cloud/ipfs/QmRAF2zPcy6jJfi3w5JicTs1sdLaqywutyiYkspdeFeNNy",
        imagePath: "./nfts/BAYC_4-1.png",
        name: "4-1",
        description: "stl demo nft"
      },
      {
        ipfs: "https://gateway.pinata.cloud/ipfs/QmSZqeAU5w1ynjgEisy765L84vBTH4QJJLJUXKb9S5NarY",
        imagePath: "./nfts/BAYC_4-2.png",
        name: "4-2",
        description: "stl demo nft"
      }
    ]
  },
  {
    collection: "ZED",
    contracts: {
      "Rinkeby" : {
        contract: "0x7978088051DD32Ff6778c2c2C82893Eb983f7508",
        abi: require('./abis/erc721-abi.json')
      },
      "Mumbai": {
        contract: "0xF2823589834Ad0f66863E5db9a58B4134CEe9d80",
        abi: require('./abis/erc721-abi.json')
      }
    },
    list: [
      {
        ipfs: "https://gateway.pinata.cloud/ipfs/QmfHSGwXhFsBjxTYDRo5aJNvmmAgjAYmihdNXsF7Zfc2jm",
        imagePath: "./nfts/DriversRun.png",
        name: "Drivers Run",
        description: "stl demo nft"
      }
    ]
  },
  {
    collection: "EXPANSION_PUNKS",
    contracts: {
      "Rinkeby" : {
        contract: "0x77187E35640a67f37814706F32425687Ff527544",
        abi: require('./abis/erc721-abi.json')
      },
      "Mumbai" : {
        contract: "0x3C35DE2A81B694507323791594AB09FfF7FD263B",
        abi: require('./abis/erc721-abi.json')
      }
    },
    list: [
      {
        ipfs: "https://gateway.pinata.cloud/ipfs/QmP9pamMk45LxPy6ziCxCYjq435JdyRmCE28Z9QtPAuCHz",
        imagePath: "./nfts/Expansion_Punk_16461.png",
        name: "16461",
        description: "stl demo nft"
      }
    ]
  },
  {
    collection: "WOMEN_TRIBE",
    contracts: {
      "Rinkeby" : {
        contract: "0x24f7753BAc090eA749d1f114D8A78129a39B0D0a",
        abi: require('./abis/erc721-abi.json')
      },
      "Mumbai": {
        contract: "0xeA33E3A170070Da257943dbA6a6361aF4fA7a687",
        abi: require('./abis/erc721-abi.json')
      }
    },
    list: [
      {
        ipfs: "https://gateway.pinata.cloud/ipfs/QmUKcBhBWGDDTwfLKWGJyJ66XNKrTGNCitVAKK4aLcxiKK",
        imagePath: "./nfts/Women_Tribe_1370.png",
        name: "1370",
        description: "stl demo nft"
      },
      {
        ipfs: "https://gateway.pinata.cloud/ipfs/QmUEPVYoB15D2MR1oi2gpHTce4v9FQ3jDMEBAFAKPsaq8V",
        imagePath: "./nfts/Women_Tribe_5274.png",
        name: "5274",
        description: "stl demo nft"
      }
    ]
  },
  {
    collection: "RIOT_RACERS",
    contracts: {
      "Rinkeby" : {
        contract: "0x586707c50670C322697E00275e3Dc72543d1018F",
        abi: require('./abis/erc721-abi.json')
      },
      "Mumbai": {
        contract: "0xae96095fF42B0Cae2DaD3d49E5EE11663280d819",
        abi: require('./abis/erc721-abi.json')
      }
    },
    list: [
      {
        ipfs: "https://gateway.pinata.cloud/ipfs/Qmb5Q4QQSpPYkf6ta355ve3SYXZfbFMp2PiWPKGHiaUFhr",
        imagePath: "./nfts/Octane.png",
        name: "Octane",
        description: "stl demo nft"
      },
      {
        ipfs: "https://gateway.pinata.cloud/ipfs/QmdFox1wfNvLSZAodKn1YKhRn3DzYjWpCKq2UncpV1fTSJ",
        imagePath: "./nfts/AirBender.png",
        name: "Air Bender",
        description: "stl demo nft"
      },
    ]
  }
]