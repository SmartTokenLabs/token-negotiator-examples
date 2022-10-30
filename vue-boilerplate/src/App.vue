<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <div class="overlay-tn"></div>
</template>

<script setup>
  import { onMounted, reactive } from 'vue'
  import { Client } from '@tokenscript/token-negotiator';
  import '@tokenscript/token-negotiator/dist/theme/style.css';

  const negotiatorObj = reactive({ client: undefined });

  onMounted(() => {
  negotiatorObj.client = new Client({
    type: 'active',
    issuers: [
      {
        collectionID: "penthouse-panther-club",
        collectionAddress: "ff846ef2eed57e5367cf8826e63f4d53fe28d28aa67417accb6e4b48cbd19136",
        onChain: true,
        collectionSymbol: "PPC",
        chain: "mainnet",
        blockchain: "solana",
      },
      {
        collectionID: "pixel",
        collectionAddress: "166424b16c4c7f40eb852f9eb2d0d6869a9ed7ac54a8e6afbd516676bfbbeb19",
        onChain: true,
        collectionSymbol: "PIXEL",
        chain: "mainnet",
        blockchain: "solana",
      },
      {
        onChain: true,
        collectionID: "expansion-punks",
        contract: '0x0d0167a823c6619d430b1a96ad85b888bcf97c37',
        chain: 'eth',
        blockchain: "ethereum",
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
        position: "top-right"
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
    safeConnectOptions: {
      url: "https://safeconnect.tokenscript.org",
      initialProof: false
    }
  });

  negotiatorObj.client.on("tokens-selected", (tokens) => {
    console.log(tokens);
  });

  negotiatorObj.client.on("token-proof", (proof) => {
    console.log(proof);
  });

  negotiatorObj.client.negotiate();
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
