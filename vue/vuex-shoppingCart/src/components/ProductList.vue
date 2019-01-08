<template>
  <div>
    <button @click="getAllProducts">点击获取所有商品</button>
    <ul>
      <li v-for="product in products" :key="product.id">
        商品名称： {{ product.title }} -- 单价：{{ product.price | currency }} ---数量：{{ product.inventory}}
        <br>
        <button :disabled="!product.inventory" @click="addProductToCart(product)">添加到购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState({
    products: state => state.products.all
  }),
  methods: {
    // 将 `this.$store.dispatch('products/getAllProducts')` 映射到当前组件的 `this.getAllProducts`方法
    ...mapActions('products', ['getAllProducts']),
    ...mapActions('cart', ['addProductToCart'])
  }
}
</script>

