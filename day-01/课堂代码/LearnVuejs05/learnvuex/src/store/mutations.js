import {
  INCREMENT,
  DECREMENT
} from './mutations-types';

export default {

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
}
