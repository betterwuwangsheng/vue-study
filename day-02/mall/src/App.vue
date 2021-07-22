<template>
  <div id="app">

    <!-- 占用位置 -->
    <!-- 离开时保持活跃 -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>
<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'
  export default {
    name: 'App',
    components: {
      MainTabBar,
    }
  }

</script>

<style scoped>
  @import "assets/css/base.css";

</style>
