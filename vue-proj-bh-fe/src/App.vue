<template>
  <div id="app">
    <DefaultComponent />
    <Question />
  </div>
</template>

<script>
import DefaultComponent from './components/DefaultComponent.vue'
import Question from './components/Question.vue'

export default {
  name: 'app',
  components: {
    DefaultComponent,
    Question
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
