<template>
  <div class="home">
    <h1>商品列表</h1>
    <ProductList/>
    <!-- <ShoppingCart/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// 商品列表
import ProductList from '@/components/ProductList.vue'
// 购物车
// import ShoppingCart from '@/components/ShoppingCart.vue'
export default {
  name: 'home',
  components: {
    // ShoppingCart,
    ProductList
  }
}
</script>
