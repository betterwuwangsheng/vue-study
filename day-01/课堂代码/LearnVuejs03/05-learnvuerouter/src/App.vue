<template>
  <div id="app">
    <!-- 使用 route-link 标签的 to 属性设置要跳转的路径(与 router/index.js 一致) -->
    <!-- tag 属性指定 routerlink 渲染为指定组件 -->
    <!-- replace 属性指定页面不可返回 -->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link> -->
    <!-- <router-link to="/about" tag="button" replace>关于</router-link> -->

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="userClick">用户</button> -->
    <h1>我是 App 组件</h1>

    <!-- 使用 /home/xx/xxx -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>

    <!-- 动态绑定属性(构造访问路径) -->
    <router-link :to="'/user/' + userId">用户</router-link>
    <!-- 使用路由必须使用   <router-link :to= -->
    <!-- <router-link to="/profile">档案</router-link> -->
    <!-- 传参型书写方式 :to="{path:'/profile',query:{}}"-->
    <!-- http://localhost:8080/profile?name=wws&age=23 -->
    <router-link :to="{path:'/profile',query:{name:'wws', age:23}}">档案</router-link>
    <!-- 相当于占位(渲染对应 routerlink 组件) -->
    <router-view></router-view>
  </div>
</template>
<script>
  //import About from "./componsents/About.vue";
  export default {
    //components: { About },
    name: "App",
    data() {
      return {
        userId: 'wws' //真实开发为后台获取
      }
    },
    methods: {
      homeClick() {
        //通过代码修改路由
        // this.$router.push('/home')
        this.$router.replace('/home')
        console.log('homeClick');
      },
      aboutClick() {
        // this.$router.push('/about')
        this.$router.replace('/about')
        console.log('aboutClick');
      },
      aboutClick() {
        // this.$router.push('/about')
        this.$router.replace('/user')
        console.log('userClick');
      }
    }
  }

</script>

<style>
  /* .router-link-active{
    color: #f00;
  } */

</style>
