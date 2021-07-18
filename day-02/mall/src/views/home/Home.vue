<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend-view :recommends="recommends" />
    <home-feature-view />
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']" />
    <goods-list :goods="goods['pop'].list" />
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommendView from './childComps/HomeRecommendView'
  import HomeFeatureView from './childComps/HomeFeatureView'
  import GoodsList from 'components/content/goods/GoodsList'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'

  import {
    getHomeMultidata,
    getHomeGoods
  } from 'network/home'


  export default {
    name: "Home",
    data() {
      return {
        //定义变量保存 getHomeMultidata 请求的数据 
        banners: [],
        recommends: [],

        //商品数据: 流行, 热款, 精选
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
          }
        }
      }
    },
    //注册组件 
    components: {
      HomeSwiper,
      HomeRecommendView,
      HomeFeatureView,
      NavBar,
      TabControl,
      GoodsList,
    },
    //生命周期函数
    created() {
      //调用 methods 中的方法请求首页的众多数据 
      this.getHomeMultidata()

      //请求商品数据 
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      //封装 
      getHomeMultidata() {
        getHomeMultidata().then(res => {

          //存储 getHomeMultidata 请求的数据
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
      },
      getHomeGoods(type) {

        //获取商品数据的页号 -> 自动增加
        const page = this.goods[type].page + 1

        getHomeGoods(type, page).then(res => {
          console.log(res)

          //数组中添加 xx.push(...yy) 数组
          this.goods[type].list.push(...res.data.data.list)

          //商品数据页码增加
          this.goods[type].page += 1
        })
      }
    }
  }

</script>

<style scoped>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  /* 顶部停靠 */
  .tab-control {
    position: sticky;
    top: 44px;
  }

</style>
