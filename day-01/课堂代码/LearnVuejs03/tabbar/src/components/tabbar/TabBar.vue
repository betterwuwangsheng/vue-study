<template>
  <div id="tab-bar">

    <!-- 使用插槽管理 <img> 和 <div> 标签-->
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar' //使用 keep-alive 时 exclude 和 include 属性可以使用
  }

</script>

<style>
  /* #id 选择器 */
  #tab-bar {

    /* flex 布局 */
    display: flex;

    /* 背景颜色 */
    background-color: #f6f6f6;

    /* 使 tabbar 位于下方 */
    /* position:fixed 生成绝对定位的元素，相对于浏览器窗口进行定位。 */
    /* 元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /* 阴影 */
    box-shadow: 0px -2.4px 1px rgba(100, 100, 100, 0.2);
  }

</style>
