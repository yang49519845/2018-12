// 改变数据
export const mutations = {
  // 设置商品
  setProducts(state, products) {
    state.all = products
  },
  // 从库存减少数量
  decrementProductInventory(state, { id }) {
    state.all.find(product => product.id === id).inventory--
  }
}
