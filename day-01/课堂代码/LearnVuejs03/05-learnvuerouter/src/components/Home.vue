<template>
  <div>
    <h2>Home Page</h2>
    <p>I'm Home Page</p>

    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/news">新闻</router-link>
    <!-- 为子路由添加占位 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}

</script>

<style scoped></style>
