import Vue from 'vue'
import Vuex from 'vuex'
// import 'babel-polyfill'
// import {actions} from './actions'
// import {mutations} from './mutations'
// import dialog from './modules/dialog-store'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // TODO 发布环境请取消严格模式，严格模式会深度监测状态树
  state: {
    fromUrl: '/',
    breads: [], // 面包屑
    user: {id: undefined, account: undefined, name: undefined, orgId: undefined, orgName: undefined},
    city: undefined
  }
  // actions,
  // mutations,
  // modules: {
  //   dialog
  // }
})

export default store
