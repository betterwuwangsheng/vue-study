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
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null,
      }
    },
    mounted() {
      // 1.创建 BScroll 对象
      this.scroll = new BScroll(this.$refs.wrapper, {

        //监听点击
        click: true,
        probeType: this.probeType,

        //监听上拉加载
        pullUpLoad: this.pullUpLoad
      })

      //监听滚动的位置并传递给父组件 position 信息
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      })

      //监听 scroll 滚动到底部
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      scrollTo(x, y, time = 1000) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
    }
  }

</script>

<style scoped>

</style>
