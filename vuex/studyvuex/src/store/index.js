import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state 存放唯一公共数据源(共享数据)
  state: {
    // 可以共享的 count 变量
    count: 0,
  },

  // 用于变更 state 中的数据
  // 变更 state 中数据只能在 mutation 中进行
  // 只有 mutations 中的函数才有权利修改 state 中的数据(共享数据)
  mutations: {
    ADD(state) {
      // 在 mutations 中使用异步操作则 vuex 无法实时更新共享数据的值
      // -> mutations 中不能执行异步操作
      // setTimeout(() => {
      //   // 变更状态
      //   state.count++
      // }, 1000)
      // 变更状态
      state.count++
    },
    // 可以在触发 mutations 时传递参数
    ADDN(state, payload) {
      // 变更状态
      state.count += payload
    },
    SUBTRACTION(state) {
      // 变更状态
      state.count--
    },
  },
  // vue 中专门用于处理异步操作
  actions: {
    // 异步增加 count 的值
    addAsync(context) {
      setTimeout(() => {
        // 触发 mutations 中的 ADD 函数
        // 在 actions 中, 不能直接修改 state 中的数据
        // 必须通过 context.commit('mutation func') 触发某个 mutation 函数
        context.commit('ADD')
      }, 1000)
    },
  },
  // 用于对 store 中的数据进行加工处理形成新的数据
  // 类似 computed 属性
  getters: {
    showNum(state) {
      return '当前最新的数量是[ ' + state.count + ' ]'
    },
  },
  modules: {},
})
