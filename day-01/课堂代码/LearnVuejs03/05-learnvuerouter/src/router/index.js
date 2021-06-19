//配置路由相关信息
import Vue from "vue";
import VueRouter from "vue-router";

//导入组件
import Home from "../components/Home.vue";
import About from "../components/About.vue";

//通过 Vue.use(插件),安装插件
Vue.use(VueRouter);

//创建 routes 对象
const routes = [
  //配置映射关系(一个路由一个组件)
  {
    //访问路径
    path: "/home",

    //路径访问对应的组件(页面)
    component: Home
  },
  {
    //访问路径
    path: "/about",

    //路径访问对应的组件(页面)
    component: About
  }
];

//创建路由对象
const router = new VueRouter({
  //配置路由和组件之间的映射关系
  routes
});

//将 router 对象传入 Vue 实例(导出对象)
export default router;
