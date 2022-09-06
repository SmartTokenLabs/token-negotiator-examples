<template>
  <div class="products_navigation">
      <div class="logo">
        <img src="../assets/images/gap_logo.svg" alt="" />
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
</template>

<script>
  export default {
    name: 'MainMenu'
  }
</script>

<style scoped>
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
</style>
