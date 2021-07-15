import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations"
import actions from "./actions"
import getters from './getters'
import moduleA from "./modules/moduleA"

//1.安装插件
Vue.use(Vuex);

const state = {
  counter: 1000,
  students: [

    {
      id: 201613340520,
      name: '吴汪胜',
      age: 23
    },
    {
      id: 201613340521,
      name: '伍鸿',
      age: 23
    },
    {
      id: 201613340522,
      name: '胡倚豪',
      age: 23
    }
  ],
  info: {
    name: 'kobe',
    age: 40,
    height: 1.98
  }
}

//2.创建对象
const store = new Vuex.Store({

  //Vuex 状态管理
  // state -> vue component -> actions -> mutations
  //保存状态
  state,

  //定义方法(对变量进行操作)
  //mutations 属性中必须使用同步方法
  mutations,

  //此处进行 异步操作(发送网络请求)
  actions,

  //类似计算属性(数据经过变化 -> 可以使用计算性进行操作 [不变化则使用data(){resturn{}}])
  getters,

  //分模块
  modules: {
    moduleA
  }
})

//导出 store 对象
export default store;
