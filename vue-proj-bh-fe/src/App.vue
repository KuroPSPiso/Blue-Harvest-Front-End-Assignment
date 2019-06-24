<template>
  <div id="app">
    <h1>Poll for BlueHarvest</h1>
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

<style scoped>
.poll-grid{
  display: grid;
  grid-template-columns: 33% 33% auto;
  grid-template-rows: auto;
  grid-template-areas: 
  "gridLeft gridCenter gridRight";
  min-width: 768px;
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


<style>
html, body{
  background-color: #1b1b29;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Cutive Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffc418;
}
*{
  margin-bottom: 0.1rem;
  outline: 0;
}
*:hover, *:active, *:focus{
  outline: 0;
}
*::-moz-focus-inner {border:0;}
*:focus{
  box-shadow: 0 0  0.3rem 0.3rem #ffffff40;
}
.cell{
  padding: 1rem;
  text-align: left;
  word-break: break-all;
}
input{
  border-radius: 1rem;
  border-style: solid;
  padding: 0.5rem;
}
.button{
  border: none;
  margin: 0 0.1rem;
  transition: 250ms;
  box-shadow: 0 0 0.1rem 0.1rem #ffffff20;
}
.button:focus{
  box-shadow: 0 0  0.3rem 0.3rem #ffffff40;
}
.button-round{
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  border: none;
}
.button-red{
  color: #ffffff;
  background-color: #ec554a;
}
.button-red:hover {
  background-color: #bc0c0e;
}
.button-red:active {
  color: #ec554a;
  background-color: #ffffff;
}
.button-blue{
  color: #ffffff;
  background-color: #269ffb;
}
.button-blue:hover {
  background-color: #0c00ce;
}
.button-blue:active {
  color: #269ffb;
  background-color: #ffffff;
}
.button-gray{
  color: #ffffff;
  background-color: #62657e;
}
</style>
