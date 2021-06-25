<template>
  <div>
    <h2>我是 Profile 组件</h2>

    <!-- 通过 {{$route.query.变量名}} 获取路由传递的数据-->
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Profile'
  }

</script>

<style scoped>

</style>
