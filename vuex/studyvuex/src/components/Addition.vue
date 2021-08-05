<template>
  <div>
    <!-- 组件访问 state 中的数据 - 方式一 -->
    <!-- <h1>当前最新 count 值为: {{ $store.state.count }}</h1> -->
    <h3>{{ $store.getters.showNum }}</h3>
    <button @click="add">+1</button>
    <button @click="addN">+3</button>
    <button @click="a">+1 Async</button>
  </div>
</template>
<script>
export default {
  name: 'Addition',
  data() {
    return {}
  },
  methods: {
    // commit 的作用就是调用某个 mutation 函数
    add() {
      // 触发 mutations 的第一种方法
      this.$store.commit('ADD')
    },
    addN() {
      // 触发 mutations 时携带参数
      // this.$store.commit('mutation func', payload)
      this.$store.commit('ADDN', 3)
    },
    // 异步 count + 1
    a() {
      // 使用  this.$store.dispatch('action func') 触发
      this.$store.dispatch('addAsync')
    },
  },
  components: {},
}
</script>
<style scoped></style>
