<template>
  <div>
    <h2>Home Page</h2>
    <p>I'm Home Page</p>

    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/news">新闻</router-link>
    <!-- 为子路由添加占位 -->
    <router-view></router-view>

    <h2>{{message}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        message: '你好'
      }
    },
    created: function () {
      console.log('created');
      document.title = '首页'
    },
    // mounted: function () {
    //   console.log('mounted');
    // },

    // //(界面刷新)数据更新完后调用 update
    // updated: function () {
    //   console.log('updated');
    // }
  }

</script>

<style scoped></style>
