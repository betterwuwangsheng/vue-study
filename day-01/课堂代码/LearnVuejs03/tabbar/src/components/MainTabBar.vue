<template>
  <tab-bar>
    <!-- 使用属性进行动态设置活跃时样式 -->
    <tab-bar-item path="/home" activeColor="green">

      <!-- 使用插槽 标签内部使用 slot 属性 -->
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot=" item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">个人</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  //导入 TabBar 组件
  import TabBar from "components/tabbar/TabBar"
  import TabBarItem from "components/tabbar/TabBarItem"

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }

</script>

<style>

</style>
