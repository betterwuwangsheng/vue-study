import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const Home = () => import('../views/home/Home.vue')
const Profile = () => import('../views/profile/Profile.vue')
const ShopCart = () => import('../views/shopcart/ShopCart.vue')
const Category = () => import('../views/category/Category.vue')

//安装 vue-router 插件
Vue.use(VueRouter)

//创建路由对象
const routes = [

  //默认路由
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile

  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: ShopCart
  }
]

//导出
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
