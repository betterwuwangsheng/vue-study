<template>

  <!-- 动态显示图片和文字(插槽)-->
  <!-- 统一管理监听点击-->
  <div class="tab-bar-item" @click="itemClick">

    <!-- 定义插槽时尽量使用 div 包裹-->
    <div v-if="!isActive">
      <!-- 图片插槽(具名插槽) -->
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <!-- 动态绑定外层样式 -->
    <div :class="{active: isActive}">
      <!-- 文字插槽(具名插槽) -->
      <slot name="item-text" :class="{active: isActive}"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    //属性
    props: {
      path: String,
    },
    data() {
      return {
        isActive: true,
      }
    },
    methods: {
      itemClick() {

        //使用当前活跃路由进行跳转
        this.$router.replace(this.path)
      }
    }
  }

</script>

<style>
  /* .获取类名选择 */
  .tab-bar-item {
    /* 均分 */
    flex: 1;

    /* 居中 */
    text-align: center;

    /* tabbar 高度 49px最佳 */
    height: 49px;

    /* 文字大小 */
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;

    /* 上方空间 */
    margin-top: 3px;

    /* 下方空间 */
    vertical-align: middle;

    /* 下方像素 */
    margin-bottom: 2px;
  }

  .active {
    color: red;
  }

</style>
