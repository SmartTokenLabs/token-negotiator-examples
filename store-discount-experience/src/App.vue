<template id="app">
  <header>
    <div class="nav_1">
      <div class="logo_nav">
        <div class="logo">
          <img src="./assets/images/gap_logo.svg" alt="" />
        </div>
        <nav>
          <ul>
            <li>OLD NAVY</li>
            <li>BANANA REPUBLIC</li>
            <li>ATHLETA</li>
            <li>YZY GAP</li>
          </ul>
        </nav>
      </div>
      <div class="promo_text">
        FREE SHIPPING ON $50+. FOR REWARDS MEMBERS
        <a href="">SIGN IN OR JOIN DETAILS</a>
      </div>
      <div class="auth_menu">
        <span>Sign In</span>
        <span>Your account</span>
      </div>
    </div>
    <div class="nav_2">
      <img src="./assets/images/promo_banner.svg" />
    </div>
  </header>
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
              <div class="price">{{ product.price.value }}</div>
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

  export default {
    mounted() {
      this.negotiator = new Client({
          type: 'active',
          issuers: [
              { 
                onChain: true, 
                collectionID: 'demo-tokens', 
                contract: '0x0d0167a823c6619d430b1a96ad85b888bcf97c37', 
                chain: 'eth' 
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
        if(tokens.selectedTokens['demo-tokens'].tokens.length) {
          this.product.price.value = this.product.price.sale; 
        } else {
          this.product.price.value = this.product.price.full;
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
          }
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

header {
  color: #fff;
  background-color: rgb(51, 51, 51);
}

header .nav_1 {
  z-index: 402;
  width: 100%;
  height: auto;
  display: flex;
  margin-inline: auto;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  height: 40px;
}

header .logo_nav {
  display: flex;
  align-items: center;
  height: 100%;
}

header .logo {
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 3.125rem;
  width: 3.125rem;
  height: 100%;
  color: #000;
}

header .promo_text {
  font-size: 12px;
}

header a {
  color: #fff;
}

header .auth_menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 12px;
}

header ul {
  display: flex;
  list-style: none;
  font-size: 12px;
}

header li {
  padding: 0 10px;
  cursor: pointer;
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
</style>
