//封装 axios
import axios from 'axios'

export function request(config) {
  //创建实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  //发送真正的网络请求
  return instance(config)
}
