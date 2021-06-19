<template>
  <div id="app">
    <!-- 使用 route-link 标签的 to 属性设置要跳转的路径(与 router/index.js 一致) -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>

    <!-- 相当于占位 -->
    <router-view></router-view>
  </div>
</template>
<script>
import About from "./components/About.vue";
export default {
  components: { About },
  name: "App"
};
</script>

<style></style>
