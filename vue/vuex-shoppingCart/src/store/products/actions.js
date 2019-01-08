import shop from '../../api/shop'
export const actions = {
  getAllProducts({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}
