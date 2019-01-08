<template>
  <div class="cart">
    <h2>购物车</h2>
    <p v-show="!products.length">
      <i>请添加商品.</i>
    </p>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >{{ product.title }} - {{ product.price | currency }} x {{ product.quantity }}</li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p>
      <button :disabled="!products.length" @click="checkout(products)">Checkout</button>
    </p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'ShoppingCart',
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout(products) {
      this.$store.dispatch('cart/checkout', products)
    }
  }
}
</script>

