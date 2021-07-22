<template>

  <!-- 只有一个元素时 可以不使用 div 包裹 -->
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {
    Swiper,
    SwiperItem
  } from 'components/common/swiper'

  export default {
    name: 'DetailSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    //用于获取父组件传来的数据
    props: {
      topImages: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }

</script>

<style scoped>
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }

</style>
