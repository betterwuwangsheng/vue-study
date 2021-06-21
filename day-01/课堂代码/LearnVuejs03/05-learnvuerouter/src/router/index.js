//配置路由相关信息
import Vue from 'vue';
import VueRouter from "vue-router"

//导入组件
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'

//通过 Vue.use(插件),安装插件
Vue.use(VueRouter);

//创建 routes 对象
const routes = [
  //默认路由(特殊的放在最前面)
  {
    path: "",
    redirect: '/home'
  },
  //配置映射关系(一个路由一个组件)
  {
    //访问路径
    path: '/home',

    //路径访问对应的组件(页面)
    component: Home
  },
  {
    //访问路径
    path: '/about',

    //路径访问对应的组件(页面)
    component: About
  },
  {
    //  /user/:userId 获取访问路径
    path: '/user/:userId',
    component: User
  }
];

//创建路由对象
const router = new VueRouter({
  //配置路由和组件之间的映射关系
  routes,

  //mode: history(无 # 号)    http://localhost:8080/home
  //mode: 默认(hash) http://localhost:8080/#/home
  mode: 'history',
  linkActiveClass: 'active'
});

//将 router 对象传入 Vue 实例(导出对象)
export default router;
