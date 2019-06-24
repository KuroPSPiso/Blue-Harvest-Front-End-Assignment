<template>
    <div ref="resultsInstance" class="results-component">
      <vue-p5 
        @setup="setup" 
        @draw="draw"
        @windowResized="windowResized"
        ref="p5Instance">
      </vue-p5>
    </div>
</template>

<script>
import QuestionStore from '../store/QuestionStore';
import VueP5 from 'vue-p5';

export default {
  name: 'Results',
  components: {
    "vue-p5": VueP5
  },
  props: {
    pollId: String
  },
  data: function(){
      return {
          query: "",
          answerList: [],
          selectedAnswerIndex: 0
      }
  },
  methods: {
    setup(sketch) {
      sketch.text('Hello p5!', 20, 20)
    },
    draw(sketch) {
    },
    windowResized(sketch) {
      sketch.resizeCanvas(windowWidth, windowHeight);
    }
  },
  render(h){
    return h(VueP5, {on: this})
  },
  mounted: function(){
    //TODO: remove when data is fetched from the web
    if(this.pollId === QuestionStore.data.pollId)
    {
        this.query = QuestionStore.data.query
        this.answerList = QuestionStore.data.answerList
    }
    //fetch

    
  }
}
</script>

<style scoped>

</style>

<style>
.result-component{
    display: block;
}
</style>