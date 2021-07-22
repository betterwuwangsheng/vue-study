<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- 实现吸顶 -->
    <tab-control v-show="isTabFixed" class="tab-control-one" ref="tabControlone" :titles="['流行', '新款', '精选']"
      @tabClick="tabClick" />

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true"
      @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <home-recommend-view :recommends="recommends" />
      <home-feature-view />
      <tab-control ref="tabControl" :titles="['流行', '新款', '精选']" @tabClick="tabClick" />
      <good-list :goods=" showGoods" />
    </scroll>

    <!-- 监听组件的点击事件 @click.native-->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommendView from './childComps/HomeRecommendView'
  import HomeFeatureView from './childComps/HomeFeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import {
    getHomeMultidata,
    getHomeGoods
  } from "network/home"

  import {
    debounce
  } from 'common/utils'

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      HomeRecommendView,
      HomeFeatureView,
      NavBar,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          },
        },

        //记录被选中的 tab
        currentType: 'pop',

        //默认不显示返回顶部按钮
        isShowBackTop: false,

        tabOffsetTop: 0,

        //是否吸顶
        isTabFixed: false,

        //离开时保存位置
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },

    //create() 函数中最好不要使用 dom 操作
    created() {

      // 1.请求多个数据
      this.getHomeMultidata()
      // 2.请求商品数据 
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    mounted() {

      //防抖操作
      //this.$refs.scroll.refresh 获得函数句柄
      const refresh = debounce(this.$refs.scroll.refresh, 500)

      //监听 item 中图片加载完成
      this.$bus.$on('itemImageLoad', () => {


        //实现防抖 -> 将 refresh() 函数传入 防抖函数 debounce()
        refresh()

        //直接执行的话 -> 30 次
        // this.$refs.scroll.refresh()
      })
    },
    methods: {
      /** * 事件监听相关的方法 */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
          default:
            break
        }

        //保持 index 一致(tabControl 跳转是保持一致)
        this.$refs.tabControlone.currentIndex = index
        this.$refs.tabControl.currentIndex = index
      },
      /** * 网络请求相关的方法 */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1

        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1

          //完成上拉加载更多
          this.$refs.scroll.finishPullUp()
        })
      },
      backClick() {

        //获取该标签中的 scroll 对象 (做了一层封装)
        this.$refs.scroll.scrollTo(0, 0, 1000)
      },
      contentScroll(position) {

        //判断 BackTopTop 是否显示
        this.isShowBackTop = -position.y > 1000

        //决定 tabControl 是否吸顶(position: fixed)
        this.isTabFixed = -position.y > this.tabOffsetTop
      },

      //上拉加载更多
      loadMore() {

        //加载更多数据
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad() {

        //获取 tabControl 的 offsetTop
        // 所有的组件都有一个属性 $el: 用于获取组件中的元素
        // console.log(this.$refs.tabControl.$el.offsetTop)
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      }
    },
    //未离开时
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },

    //离开时
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
    }
  }

</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tab-control-one {
    position: relative;
    z-index: 9;
  }

</style>
