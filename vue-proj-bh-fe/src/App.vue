<template>
  <div id="app">
    <DefaultComponent />
    <div class="poll-grid">
      <Question class="cell cell-left" :editorCode="$route.params.editorCode"/>
      <AnswerSheet class="cell cell-center" :pollId="$route.params.pollId"/>
      <Results class="cell cell-right" :pollId="$route.params.pollId"/>
    </div>
  </div>
</template>

<script>
import DefaultComponent from './components/DefaultComponent'
import Question from './components/Question'
import AnswerSheet from './components/AnswerSheet'
import Results from './components/Results'

export default {
  name: 'app',
  components: {
    DefaultComponent,
    Question,
    AnswerSheet,
    Results
  }, 
  data: function(){
    return{
      pollId: "",
      editorCode: ""
    }
  },
  created(){
      this.pollId = this.$route.params.pollId
      this.editorCode = this.$route.params.editorCode
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
