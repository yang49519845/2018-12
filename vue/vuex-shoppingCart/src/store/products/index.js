// 商品列表状态管理
// 获取全部的商品
// 选中商品时，从库存减少数量
import { state } from './state'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
