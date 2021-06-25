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
        message: '你好',
        path: '/home/news'
      }
    },
    created: function () {
      console.log('created');
      // this.$router.push('/home/news')
      document.title = '首页'
    },

    //销毁(生命周期函数)
    destroyed() {

    },

    //页面处于活跃状态时执行
    activated() {
      console.log('activated');
      this.$router.push(this.path)
    },

    //导航离开该组件的对应路由时调用
    beforeRouteLeave(to, from, next) {
      console.log(this.$route.path)
      this.path = this.$route.path
      next()
    }
    // deactivated() {
    //   console.log('deactivated');
    //   this.path = this.$route.path
    // }
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
