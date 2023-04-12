import { OffChainTokenConfig, OnChainTokenConfig } from '@tokenscript/token-negotiator/dist/client/interface';

const issuersData: (OffChainTokenConfig | OnChainTokenConfig)[] = [
  {
    collectionID: "devcon",
    onChain: false,
    title: "Devcon",
    image: "https://raw.githubusercontent.com/TokenScript/token-negotiator/main/mock-images/devcon.svg",
    tokenOrigin: "https://tokenscript.github.io/token-negotiator-gh-pages/token-outlet-website/",
    unEndPoint: "https://crypto-verify.herokuapp.com/use-devcon-ticket",
    base64senderPublicKeys: {
       6: "MIIBMzCB7AYHKoZIzj0CATCB4AIBATAsBgcqhkjOPQEBAiEA/////////////////////////////////////v///C8wRAQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBEEEeb5mfvncu6xVoGKVzocLBwKb/NstzijZWfKBWxb4F5hIOtp3JqPEZV2k+/wOEQio/Re0SKaFVBmcR9CP+xDUuAIhAP////////////////////66rtzmr0igO7/SXozQNkFBAgEBA0IABGMxHraqggr2keTXszIcchTjYjH5WXpDaBOYgXva82mKcGnKgGRORXSmcjWN2suUCMkLQj3UNlZCFWF10wIrrlw="
    },
    base64attestorPubKey: "MIIBMzCB7AYHKoZIzj0CATCB4AIBATAsBgcqhkjOPQEBAiEA/////////////////////////////////////v///C8wRAQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBEEEeb5mfvncu6xVoGKVzocLBwKb/NstzijZWfKBWxb4F5hIOtp3JqPEZV2k+/wOEQio/Re0SKaFVBmcR9CP+xDUuAIhAP////////////////////66rtzmr0igO7/SXozQNkFBAgEBA0IABL+y43T1OJFScEep69/yTqpqnV/jzONz9Sp4TEHyAJ7IPN9+GHweCX1hT4OFxt152sBN3jJc1s0Ymzd8pNGZNoQ="
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
  { collectionID: "NBA", onChain: true, contract: "A.0b2a3299cc857e29.TopShot", chain: "mainnet", blockchain: "flow" },
];

export default issuersData;