<template id="app">
  <TheHeader />
  <main>
    <div class="products_navigation">
      <div class="logo">
        <img src="./assets/images/gap_logo.svg" alt="" />
      </div>
      <nav>
        <ul>
          <li>NEW</li>
          <li class="active">WOMEN</li>
          <li>MATERNITY</li>
          <li>MEN</li>
          <li>TEEN</li>
          <li>GIRLS</li>
          <li>BOYS</li>
          <li>BACK TO SCHOOL</li>
          <li>JEANS</li>
          <li>SALE</li>
          <li>FACTORY</li>
        </ul>
      </nav>
    </div>

    <section class="main_content">
      <h3>NEW ARRIVALS</h3>
      <div class="products_wrapper">
        <div class="side_menu">
          <div class="bread_crumb">Womens / New Arrivals</div>
          <h4>Just Arrived</h4>
          <ul>
            <li class="active">New Arrivals</li>
            <li>The Work Shop</li>
          </ul>
          <h4>Categories</h4>
          <ul>
            <li>Shop All styles</li>
            <li>Jeans</li>
            <li>Dresses</li>
            <li>Denim Dhorts</li>
            <li>Shorts</li>
          </ul>
          <ul class="accordion_list">
            <li>
              <span>Department</span> <span class="fa fa-angle-down"></span>
            </li>
            <li>
              <span>Category</span> <span class="fa fa-angle-down"></span>
            </li>
            <li><span>Size</span> <span class="fa fa-angle-down"></span></li>
            <li><span>Color</span> <span class="fa fa-angle-down"></span></li>
            <li><span>Price</span> <span class="fa fa-angle-down"></span></li>
            <li><span>Rise</span> <span class="fa fa-angle-down"></span></li>
            <li><span>Wash</span> <span class="fa fa-angle-down"></span></li>
            <li><span>Fit</span> <span class="fa fa-angle-down"></span></li>
          </ul>
        </div>
        <div class="products_section">
          <div class="tags">
            <span>Women <i class="fa fa-times"></i></span>
          </div>
          <div class="filter_select">
            <span>SORT BY</span> <span class="fa fa-angle-down"></span>
          </div>
          <h3 class="category_header">DRESSES & JUMPSUITS</h3>
          <div class="products_list">
            <div class="product_item" v-for="(star, idx) in 8" :key="idx">
              <img
                v-if="idx < 4"
                src="./assets/images/products/1.png"
                alt="Product image"
              />
              <img
                v-else-if="idx === 3"
                src="/assets/images/products/2.png"
                alt="Product image"
              />
              <img
                v-else
                src="./assets/images/products/3.png"
                alt="Product image"
              />
              <div class="product_name">{{ product.name }}</div>
              <div class="price" :class="{discounted: product.isDiscounted}">{{ product.price.value }}</div>
              <div v-if="product.isDiscounted" class="discount_info">
                <div class="price">{{ product.price.sale }}</div>
                <div class="discount_percentage">20%</div>
              </div>
              <div class="category">{{ product.category }}</div>
            </div>
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

  import TheHeader from './components/TheHeader.vue';

  export default {
    components: {
      TheHeader
    },
    mounted() {
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
          this.product.isDiscounted = true;
        }
      });

      this.negotiator.negotiate();
    },
    data () {
      return {
        negotiator: null,
        product: {
          name: "LENZING ECOVERO Midi WRAP DRESS",
          category: "Online Exclusive",
          price: {
            value: "$79.99",
            full: "$79.99",
            sale: "$39.99"
          },
          isDiscounted: false
        }
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

.nav_2 img {
  width: 100%;
}

.products_navigation {
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 16px;
}

.products_navigation .logo {
  margin-right: 30px;
}

.products_navigation ul {
  display: flex;
  list-style: none;
}

.products_navigation li {
  font-size: 14px;
  padding: 0 16px;
  cursor: pointer;
  font-weight: 600;
}

.products_navigation li:hover,
.products_navigation li.active {
  text-decoration: underline;
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

.main_content .side_menu {
  width: 30%;
  min-height: 400px;
}

.main_content .bread_crumb {
  text-align: left;
  padding-left: 30px;
  margin-bottom: 30px;
}

.main_content h4 {
  text-align: left;
  padding-left: 30px;
  padding-bottom: 16px;
}

.main_content ul {
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  font-size: 14px;
}

.main_content li {
  list-style-type: none;
  padding-left: 10px;
  margin-bottom: 16px;
  text-align: left;
}

.main_content li.active {
  font-weight: 600;
  border-left: 4px solid #444;
}

.main_content .accordion_list li {
  width: 80%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-weight: 600;
  margin: 0;
}

.main_content .accordion_list .fa {
  font-size: 20px;
}

.main_content .accordion_list .fa:not(:first-child) {
  border-top: 1px solid #a6a6a6;
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

.products_list .product_item {
  width: 194px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
}

.products_list img {
  width: 100%;
  height: 262px;
}

.products_list .product_name {
  font-size: 12px;
  text-align: left;
  padding: 10px 0 5px;
}

.products_list .price,
.products_list .category {
  font-size: 12px;
  font-weight: 600;
}
.products_list .price.discounted {
  text-decoration: line-through
}
.discount_info {
  display: flex;
}
.discount_percentage {
  font-size: 12px;
  background: red;
  padding: 1px 4px 4px 4px;
  color: white;
  border-radius: 2px;
  position: relative;
  top: -2px;
  left: 4px;
  height: 11px;
}

</style>
