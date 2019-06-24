<template>
  <div id="app">
    <DefaultComponent />
  </div>
</template>

<script>
import DefaultComponent from './components/DefaultComponent.vue'

export default {
  name: 'app',
  components: {
    DefaultComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
