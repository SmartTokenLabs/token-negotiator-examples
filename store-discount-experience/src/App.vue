<template id="app">
  <TheHeader />
  <main>
    <MainMenu />
    <section class="main_content">
      <h3>NEW ARRIVALS</h3>
      <div class="products_wrapper">
        <SideFilter />
        <div class="products_section">
          <div class="tags">
            <span>Women <i class="fa fa-times"></i></span>
          </div>
          <div class="filter_select">
            <span>SORT BY</span> <span class="fa fa-angle-down"></span>
          </div>
          <h3 class="category_header">DRESSES & JUMPSUITS</h3>
          <div class="products_list">
            <ProductCard class="product_item" v-for="(item, idx) in products" :key="idx" :product="item" :isDiscounted="isDiscounted" />
          </div>
        </div>
        <div class="overlay-tn"></div>
      </div>
    </section>
  </main>
</template>

<script>
  import { Client } from '@tokenscript/token-negotiator';
  import '@tokenscript/token-negotiator/dist/theme/style.css';
  import { fetchData } from './utils/mockFetch';

  import TheHeader from './components/TheHeader.vue';
  import MainMenu from './components/MainMenu.vue';
  import SideFilter from './components/SideFilter.vue';
  import ProductCard from './components/ProductCard.vue';

  export default {
    components: {
      TheHeader,
      MainMenu,
      SideFilter,
      ProductCard
    },
    mounted() {
      this.products = fetchData();

      this.negotiator = new Client({
        type: 'active',
        issuers:  [
          { 
            onChain: true, 
            collectionID: 'demo-tokens', 
            contract: '0x3d8a0fB32b0F586FdC10447c22F477979dc526ec', 
            chain: 'rinkeby'
          }
        ],
        uiOptions: {
          openingHeading: "Open a new world of discounts available with your tokens.",
          issuerHeading: "Enable Your Style",
          repeatAction: "try again",
          theme: "light",
          position: "bottom-right"
        },
        unSupportedUserAgent: {
          authentication: {
            config: {},
            errorMessage: "No Support for Authentication with this user agent. Try Chrome, Safari or Edge instead."
          }
        }
      });

      this.negotiator.on("tokens-selected", (tokens) => {
        if(tokens.selectedTokens['demo-tokens'].tokens.length > 0) {
          this.isDiscounted = true;
        }
      });

      this.negotiator.negotiate();
    },
    data () {
      return {
        negotiator: null,
        products: [],
        isDiscounted: false
      }
    }
  }

</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style scoped>
.nav_2 img {
  width: 100%;
}

.main_content h3 {
  margin: 40px 0 20px;
}

.main_content .products_wrapper {
  width: 100%;
  display: flex;
  width: 100%;
  min-height: 500px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
}

.products_section {
  width: 70%;
  min-height: 400px;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}

.products_section .tags {
  display: flex;
  align-items: center;
}

.products_section span {
  background: #eee;
  font-size: 10px;
  padding: 5px;
  border-radius: 12px;
}

.products_section i {
  cursor: pointer;
}

.filter_select {
  align-self: flex-end;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.products_section .fa {
  font-size: 20px;
  margin-left: 5px;
}

.products_section .category_header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 16px;
}

.products_section .category_header:before {
  content: "";
  width: 35%;
  height: 2px;
  background: #a6a6a6;
  z-index: 3;
  position: absolute;
  left: 0;
}

.products_section .category_header:after {
  content: "";
  width: 35%;
  height: 2px;
  background: #a6a6a6;
  z-index: 3;
  position: absolute;
  right: 0;
}

.products_list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding-bottom: 16px;
}
</style>
