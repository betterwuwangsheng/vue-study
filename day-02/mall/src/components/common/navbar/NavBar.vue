<template>
  <!-- 组件必须要有 <div> 包裹 -->
  <div class="nav-bar">

    <!-- 插槽外层包裹 div 方便控制样式 -->
    <div class="left">

      <!-- 使用具名插槽 进行指定替换 -->
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }

</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
    color: #ffffff;
  }

  .left,
  .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }

</style>
