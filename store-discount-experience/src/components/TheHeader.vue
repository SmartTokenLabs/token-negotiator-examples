<template>
  <header>
    <div class="nav_1">
      <div class="logo_nav">
        <div class="logo">
          <img src="../assets/images/gap_logo.svg" alt="" />
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
      <img src="../assets/images/promo_banner.svg" alt="" />
    </div>
  </header>
</template>

<script>
  export default {
    name: "TheHeader"
  }
</script>

<style scoped>
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
</style>
