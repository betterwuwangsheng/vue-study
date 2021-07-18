<template>

</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: 'GoodsListItem',

    props: {
      goodsOtem: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }

</script>

<style scoped>

</style>
