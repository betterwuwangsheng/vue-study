<template>
  <div>
    <h2>User Page</h2>
    <p>I'm User Page</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.userId}}</h2>
    <h1>{{name}}</h1>
  </div>
</template>

<script>
  export default {

    //计算属性
    computed: {
      //获取 App 组件通过路由传过来的 userId 属性
      //使用 this.$route.params.数据
      userId() {

        //获取处于活跃状态的路由对象中的信息
        return this.$route.params.userId
      }
    }
  }

</script>

<style scoped>

</style>
