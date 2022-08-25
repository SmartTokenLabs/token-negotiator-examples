<template>
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
</template>

<script>
  export default {
    name: 'SideFilter'
  }
</script>

<style scoped>
.side_menu {
  width: 30%;
  min-height: 400px;
}

.bread_crumb {
  text-align: left;
  padding-left: 30px;
  margin-bottom: 30px;
}

ul {
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  font-size: 14px;
}

li {
  list-style-type: none;
  padding-left: 10px;
  margin-bottom: 16px;
  text-align: left;
}

li.active {
  font-weight: 600;
  border-left: 4px solid #444;
}

.accordion_list li {
  width: 80%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-weight: 600;
  margin: 0;
}

.accordion_list .fa {
  font-size: 20px;
}

.accordion_list .fa:not(:first-child) {
  border-top: 1px solid #a6a6a6;
}

h4 {
  text-align: left;
  padding-left: 30px;
  padding-bottom: 16px;
}
</style>
