<template>
  <div>
    <!-- 组件访问 state 中的数据 - 方式二 -->
    <h1>当前最新 count 值为: {{ count }}</h1>
    <button @click="substraction">-1</button>
  </div>
</template>
<script>
// 从 vuex 中按需导入 mapState 函数
// 从 vuex 中按需导入 mapMutations 函数
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Subtraction',
  data() {
    return {}
  },
  methods: {
    ...mapMutations(['SUBTRACTION']),
    substraction() {
      this.SUBTRACTION()
    },
  },
  components: {},

  // 计算属性
  computed: {
    ...mapState(['count']),
  },
}
</script>
<style scoped></style>
