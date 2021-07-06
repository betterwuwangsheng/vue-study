<template>
  <div>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'HelloVuex',

    data() {
      return {
        message: '我是 APP 组件 的子组件 HelloVuex'
      }
    },
    //父传子 子组件 props 属性
    //父组件标签中 :变量="变量" 进行使用 (加 : => 变量; 不加 : => 字符串)
    // props: {
    //   counter: Number
    // }
  }

</script>

<style>

</style>
