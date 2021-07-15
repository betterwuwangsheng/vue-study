import Vue from "vue";
import Vuex from "vuex";
import {
  INCREMENT,
  DECREMENT
} from './mutations-types';

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
    ],
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98
    }
  },

  //定义方法(对变量进行操作)
  //mutations 属性中必须使用同步方法
  mutations: {

    //方法(自带参数 state)
    //increment -> 事件类型
    //(state) { state.counter++ } -> 回调函数
    [INCREMENT](state) {
      state.counter++
    },
    [DECREMENT](state) {
      state.counter--
    },
    increamentCount(state, payload) {
      //state.counter += number
      state.counter += payload.number
    },
    incrementStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {

      //同步操作
      state.info.name = 'wws'

      //异步操作(mutations 属性中不使用异步操作)
      // setTimeout(() => {
      //   state.info.name = 'wws'
      // }, 1000);

      // state.info['address'] = '四川'

      //增加属性
      // Vue.set(state.info, 'address', '四川')
      // delete state.info.age

      //删除属性
      //Vue.delete(state.info, 'age')
    }
  },

  //此处进行 异步操作(发送网络请求)
  actions: {

    // context 上下文
    //传递参数
    // aUpdateInfo(context, payload) {

    //   //模拟异步操作
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.message)

    //     //回调
    //     payload.success()
    //   }, 1000);
    // }

    aUpdateInfo(context, payload) {

      //模拟异步操作
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload)

          //回调
          resolve('11')
        }, 1000)
      })
    }
  },

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
