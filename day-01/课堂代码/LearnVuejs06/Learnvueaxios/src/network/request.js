//封装 axios
import axios from 'axios'

// 1
// export function request(config, success, failture) {

//   //创建 axios 的实例
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:7878/api/m5',
//     timeout: 5000
//   })


//   //发送真正的网络请求
//   instance(config).then(res => {
//     success(res)
//   }).catch(err => {
//     failture(err)
//   })
// }

//2
// export function request(config) {

//   //创建 axios 的实例
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:7878/api/m5',
//     timeout: 5000
//   })


//   //发送真正的网络请求
//   instance(config.baseConfig).then(res => {
//     config.success(res)
//   }).catch(err => {
//     config.failture(err)
//   })
// }

//较优方案
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://152.136.185.210:7878/api/m5',
//       timeout: 5000
//     })


//     //发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

//终极方案
export function request(config) {

  //创建实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  //实现请求拦截
  instance.interceptors.request.use(
    config => {
      console.log(config)

      //1. 比如 config 中的一些信息不符合服务器要求(多配置信息)
      //2. 每次请求时，希望在界面中显示一个请求的图标(加载图标)
      //3. 某些网络请求 （比如登录）,必须携带一些特殊信息(token 等)
      //由于进行了拦截 -> 必须返回 config
      return config
    },
    err => {
      console.log(err)
    })

  //实现响应拦截
  instance.interceptors.response.use(
    res => {
      console.log(res)
    },
    err => {
      console.log(err)
    }
  )

  //发送真正的网络请求
  return instance(config)
}
