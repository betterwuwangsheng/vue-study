<template>
  <div id="app">
    <router-view></router-view>
    <!-- 使用组件 -->
    <tab-bar>
      <tab-bar-item path="/home">

        <!-- 使用插槽 标签内部使用 slot 属性 -->
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="shopcart">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile">
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">个人</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  //导入 TabBar 组件
  import TabBar from "./components/tabbar/TabBar"
  import TabBarItem from "./components/tabbar/TabBarItem"

  export default {
    name: 'App',
    components: {
      //注册组件
      TabBar,
      TabBarItem,
    },
  }

</script>

<style>
  /* 动态引用 base.css 文件*/
  @import "./assets/css/base.css";

</style>
