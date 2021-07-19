<template>

  <!-- 仅仅是文字不同 -> 用 props 传递 title 数组-->
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-contorl-item" :class="{active:index === currentIndex}"
      @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',

    //这里的 prop 属性可以直接在标签上使用
    props: {

      //传特定的 title 值
      titles: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        //记录当前被选中的
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {

        //点击时修改当前 index
        this.currentIndex = index

        //将数据（currentIndex）传出去
        //子传父 
        //利用 this.$emit('自定义事件名称', 数据) 方法
        //把值传递给父组件
        this.$emit('tabClick', index);
      }
    }
  }

</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;
  }

  .tab-contorl-item {
    flex: 1;
  }

  .tab-contorl-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 3px solid var(--color-tint);
  }

</style>
