import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',

  /* 使用 render: h => h(), render 属性加箭头函数使用组件 */
  render: h => h(App)
})
