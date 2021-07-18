<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" />
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: 'GoodsList',

    //Home 将数据传给 GoodsList
    props: {
      goods: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      GoodsListItem
    }
  }

</script>

<style scoped>

</style>
