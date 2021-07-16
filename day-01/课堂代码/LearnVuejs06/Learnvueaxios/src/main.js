import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//使用全局 axios 和对应配置进行网络请求
//基础 URL 以及超时设置
// axios.defaults.baseURL = "http://152.136.185.210:7878/api/m5"
// axios.defaults.timeout = 5000

// //使用 axios
// axios({
//   url: '/home/multidata',
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: '/home/data',

//   //拼接的参数
//   params: {
//     type: 'sell',
//     page: 3
//   }
// }).then(res => {
//   console.log(res)
// })

// //axios 发送并发请求
// axios.all([axios({
//     url: '/home/multidata',
//   }), axios({
//     url: '/home/data',
//     //拼接的参数
//     params: {
//       type: 'sell',
//       page: 3
//     }
//   })])

//   //分开数据
//   .then(axios.spread((res1, res2) => {
//     console.log(res1)
//     console.log(res2)
//   }))

// //请求分类数据
// axios({
//   url: '/category'
// }).then(res => {
//   console.log(res)
// })

//创建对应 axios 实例
// const instance = axios.create({
//   baseURL: 'http://152.136.185.210:7878/api/m5',
//   timeout: 5000
// })

// //请求多个数据
// instance({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// //请求首页数据
// instance({

//   //网络请求路径
//   url: '/home/data',

//   //参数
//   params: {
//     type: 'sell',
//     page: 3
//   }
// }).then(res => {
//   console.log(res)
// })

// const instance1 = axios.create({

//   //另一个 URL
//   baseURL: 'http://152.136.185.210:7878/api/m5',

//   //另一个超时时间
//   timeout: 3000
// })

//封装一个 request 模块
import {
  request
} from './network/request'

//1
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })

//2
// request({
//   baseConfig: {},
//   success(res) {},
//   failture(err) {},
// })

//较优方案
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

//终极方案
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
