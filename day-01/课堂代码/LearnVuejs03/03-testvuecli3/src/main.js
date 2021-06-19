import Vue from 'vue'
import App from './App.vue'

//是否显示提示信息
Vue.config.productionTip = false


// new Vue({
//   el: '#app',
//   render: function (h) {
//     return h(App)
//   }
// })
new Vue({
  render: h => h(App),
}).$mount('#app')
