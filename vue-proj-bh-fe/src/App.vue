<template>
  <div id="app">
    <DefaultComponent />
    <div class="poll-grid">
      <Question class="cell cell-left" />
      <AnswerSheet class="cell cell-center"/>
    </div>
  </div>
</template>

<script>
import DefaultComponent from './components/DefaultComponent.vue'
import Question from './components/Question.vue'
import AnswerSheet from './components/AnswerSheet.vue'

export default {
  name: 'app',
  components: {
    DefaultComponent,
    Question,
    AnswerSheet
  }, 
  data: function(){
    return{
      pollId: ""
    }
  },
  mounted(){
      this.pollId = this.$route.params.id;
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
.poll-grid{
  display: grid;
  grid-template-columns: 33% 33% auto;
  grid-template-rows: auto;
  grid-template-areas: 
  "gridLeft gridCenter gridRight";
}
.cell{
  padding: 1rem;
  text-align: left;
}
.cell-question{
  grid-area: gridLeft;
}
.cell-answersheet{
  grid-area: gridCenter;
}
.cell-pollresults{
  grid-area: gridRight;
}
</style>
