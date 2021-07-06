import Vue from "vue";
import Vuex from "vuex";

//1.安装插件
Vue.use(Vuex);

//2.创建对象
const store = new Vuex.Store({

  //Vuex 状态管理
  // state -> vue component -> actions -> mutations
  //保存状态
  state: {
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
    ]
  },

  //定义方法(对变量进行操作)
  mutations: {

    //方法(自带参数 state)
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },

  //异步操作(发送网络请求)
  actions: {},

  //类似计算属性(数据经过变化 -> 可以使用计算性进行操作 [不变化则使用data(){resturn{}}])
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => {
        s.age > 20
      })
    }
  },
  modules: {}
})

//导出 store 对象
export default store;
