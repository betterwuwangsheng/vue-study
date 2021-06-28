<template>
  <div id="app">
    <router-view></router-view>
    <!-- 使用组件 -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/MainTabBar'
  export default {
    name: 'App',
    components: {
      //注册组件
      MainTabBar
    },
  }

</script>

<style>
  /* 动态引用 base.css 文件*/
  @import "assets/css/base.css";

</style>
