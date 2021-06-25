<template>
  <div>
    <h2>About Page</h2>
    <p>I'm About Page</p>
  </div>
</template>

<script>
  export default {
    name: 'About',
    created: function () {
      console.log('about created');
      document.title = '关于'
    },
    destroyed: function () {
      console.log('about destroyed')
    }
  }

</script>

<style scoped>
</style>
