<template>
  <div id="app">
    <addition></addition>
    <p>--------------------------</p>
    <subtraction></subtraction>
  </div>
</template>

<script>
import Addition from './components/Addition.vue'
import Subtraction from './components/Subtraction.vue'

export default {
  name: 'App',
  components: {
    Addition,
    Subtraction,
  },
}
</script>

<style></style>
