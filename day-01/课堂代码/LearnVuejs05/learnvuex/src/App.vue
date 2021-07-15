<template>
  <div id="app">
    <h2>----------------- APP 内容--------------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="substraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>-----------------------App 内容: getters 相关信息-------------------</h2>
    <!-- <h2>{{$store.state.counter * $store.state.counter}} </h2> -->

    <h2>-------------验证 info 内容是否是响应式的</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <br>
    <br>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>---------------- HelloVuex 内容-----------------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'

  //普通导入
  import {
    INCREMENT,
    DECREMENT,
  } from './store/mutations-types.js'

  export default {
    name: 'App',
    data() {
      return {
        message: '我是 APP 组件',
      }
    },
    components: {
      HelloVuex,
    },
    methods: {
      addition() {
        //使用 /store/index.js 中的 mutations 属性中的方法
        this.$store.commit(INCREMENT)
      },
      substraction() {
        this.$store.commit(DECREMENT)
      },

      //传递参数(number) 给 store 中的 mutations 中的 increaamentCount(state,number)
      addCount(number) {

        //number -> payload(载荷)
        //普通提交
        //this.$store.commit('increamentCount', number)

        //特殊的额提交封装
        this.$store.commit({ //其他文件中使用 store 必须使用 $store
          type: 'increamentCount',
          number,
        })
      },
      addStudent() {
        const stu = {
          id: 201613340523,
          name: '刘东',
          age: 39
        }
        this.$store.commit('incrementStudent', stu)
      },
      updateInfo() {
        // this.$store.commit('updateInfo')
        // this.$store.dispatch('aUpdateInfo', {
        //   message: '我是携带的信息',

        //   //成功后
        //   success: () => {
        //     console.log('成功')
        //   }
        // })

        this.$store
          .dispatch('aUpdateInfo', '我是携带的信息')
          .then(res => {

            console.log('里面完成了提交')
            console.log(res)
          })
      },

    },
    // computed: {
    //   //大于 20 岁的学生
    //   more20stu() {
    //     //filter 过滤
    //     return this.$store.state.students.filter(s => {
    //       return s.age > 20
    //     })
    //   }
    // }
  }

</script>
<style>
</style>
