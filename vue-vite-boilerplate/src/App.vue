<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { onMounted, reactive } from 'vue'

const negotiatorObj = reactive({ client: undefined });

onMounted(() => {
  negotiatorObj.client = new negotiator.Client({
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
      { onChain: true, collectionID: "Perion", contract: '0x96af92ae2d822a0f191455ceca4d4e7ee227668e', chain: 'mumbai', blockchain: "evm" },
      { collectionID: 'COOLCATS-#2426-14', onChain: true, contract: '0x3C7e352481F4b2fdEc1e642a3f0018661c77513D', chain: 'eth', openSeaSlug: 'devcon-vi-suit-up-collection' },
      { collectionID: 'Town-Hall', onChain: true, contract: '0x81b30ff521D1fEB67EDE32db726D95714eb00637', chain: 'Optimism' },
      { collectionID: 'Blusteak Kangaroo #64', onChain: true, contract: '0xa996F7F3BC647EebC98C684aB0A302c9b85d2FA1', chain: 'Avalanche' },
      { collectionID: 'Alone Pirate', onChain: true, contract: '0x36535ec384B94342558e37282527b5052587af6A', chain: 'Arbitrum' },
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
    // safeConnectOptions: {
    //   url: "https://safeconnect.tokenscript.org",
    //   initialProof: false
    // }
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

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);

    &:first-of-type {
      border: 0;
    }

    &.router-link-exact-active {
      color: var(--color-text);
      &:hover {
        background-color: transparent;
      }
    }
  }
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
