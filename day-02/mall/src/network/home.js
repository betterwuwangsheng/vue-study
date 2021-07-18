//对首页数据的请求(首页可能有多个请求 --> 一一封装，统一管理 --> 分层思想)
//导入 不是 export default 则使用 import {} from
//导入 是 export default 则使用 import xx from
import {
  request
} from './request'

//导出
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

//请求首页商品
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
