<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",

    //自定义属性父组件可以通过属性设置值
    props: {
      probeType: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        scroll: null,
      }
    },
    mounted() {
      // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType
      })

      //监听滚动的位置
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      })
    },
    methods: {
      scrollTo(x, y, time = 1000) {
        this.scroll.scrollTo(x, y, time)
      }
    }
  }

</script>

<style scoped>

</style>
