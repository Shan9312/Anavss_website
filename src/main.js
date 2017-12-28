// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import { Tabs } from 'iview'
import 'iview/dist/styles/iview.css' // 导入样式
import 'swiper/dist/css/swiper.css'
import VueResource from 'vue-resource'
Vue.use(VueResource)
// Vue.use(Tabs);

import './config/theme.less'
// import $ from 'jquery'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
