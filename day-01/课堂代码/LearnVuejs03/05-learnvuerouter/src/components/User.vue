<template>
  <div>
    <h2>User Page</h2>
    <p>I'm User Page</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.userId}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: 'User',
    created: function () {
      console.log('created');
    },
    created: function () {
      console.log('User created')
    },
    destroyed: function () {
      console.log('User destroyed')
    },
    //计算属性
    computed: {
      //获取 App 组件通过路由传过来的 userId 属性
      //使用 this.$route.params.数据
      userId() {

        //获取处于活跃状态的路由对象中的信息
        return this.$route.params.userId
      }
    },
    methods: {
      btnClick() {
        console.log(this.$router);

        //当前活跃对象
        console.log(this.$route);
      }
    }
  }

</script>

<style scoped>

</style>
