<template>
  <div class="product_item">
    <img
      :src="product.image"
      alt="Product image"
    />
    <div class="product_name">{{ product.name }}</div>
    <div class="price" :class="{discounted: isDiscounted}">{{ product.price.value }}</div>
    <div v-if="isDiscounted" class="discount_info">
      <div class="price">{{ product.price.sale }}</div>
      <div class="discount_percentage">20%</div>
    </div>
    <div class="category">{{ product.category }}</div>
  </div>
</template>

<script>
  export default {
    name: 'ProductCard',
    props: {
      product: {},
      isDiscounted: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
.product_item {
  width: 194px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
}

.product_item img {
  width: 100%;
  height: 262px;
}

.product_item .product_name {
  font-size: 12px;
  text-align: left;
  padding: 10px 0 5px;
}

.product_item .price,
.product_item .category {
  font-size: 12px;
  font-weight: 600;
}
.product_item .price.discounted {
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
