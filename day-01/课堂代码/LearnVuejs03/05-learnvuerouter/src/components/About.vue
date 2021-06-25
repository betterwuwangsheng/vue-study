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
      console.log('created');
      document.title = '关于'
    },
  }

</script>

<style scoped>
</style>
