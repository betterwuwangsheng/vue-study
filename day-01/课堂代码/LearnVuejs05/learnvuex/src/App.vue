<template>
  <div id="app">
    <h2>----------------- APP 内容--------------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="substraction">-</button>

    <h2>-----------------------App 内容: getters 相关信息-------------------</h2>
    <!-- <h2>{{$store.state.counter * $store.state.counter}} </h2> -->
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>---------------- HelloVuex 内容-----------------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'

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
        this.$store.commit('increment')
      },
      substraction() {
        this.$store.commit('decrement')
      }
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
