<template>

  <!-- 组件用 div 包裹 -->
  <div id="detail">
    <detail-nav-bar class="detail-nav" />

    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-params-info :param-info="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list :goods="recommend" />
    </scroll>
    <!-- <detail-bottom-bar @addToCart='addToCart'></detail-bottom-bar> -->
    <!-- .native监听组件的点击 -->
    <!-- <back-top @click.native="backClick" v-show="isShowBack" class="backtop"></back-top> -->
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamsInfo from './childComps/DetailParamsInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  // import DetailBottomBar from './childComps/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'

  //导入函数用 import{functionname} from ''
  import {
    getDetail,
    GoodsInfo,
    Shop,
    GoodsParam,
    getRecommend
  } from 'network/detail'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      GoodsList
      // DetailBottomBar
    },
    data() {
      return {

        //保存 iid
        iid: null,

        //保存顶部轮播图
        topImages: [],

        //部分商品信息 -> 定义为对象
        goods: {},

        //店铺信息
        shop: {},

        //直接保存数据
        detailInfo: {},

        //参数信息
        paramInfo: {},

        //评论信息
        commentInfo: {},

        //推荐信息
        recommend: []
      }
    },
    created() {
      this.iid = this.$route.params.iid

      //根据 iid 请求数据
      getDetail(this.iid).then(res => {

        //获取商品数据
        const data = res.data.result

        //顶部轮播图片
        this.topImages = res.data.result.itemInfo.topImages

        //自定义要展示的数据
        this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)

        //店铺信息
        this.shop = new Shop(data.shopInfo)

        //商品详细信息
        this.detailInfo = data.detailInfo

        //商品参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        //取出评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      })

      //请求推荐数据
      getRecommend().then(res => {
        this.recommend = res.data.data.list
      })
    },
    methods: {
      imageLoad() {

        //刷新防抖动
        this.$refs.scroll.scroll.refresh()
      }
    }
  }

</script>
<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #ffffff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  }

  .content {
    height: calc(100% - 44px);
  }

</style>
