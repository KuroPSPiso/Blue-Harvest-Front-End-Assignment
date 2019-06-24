<template>
    <div ref="resultsInstance" class="results-component">
      <apex-chart type="bar" :options="options" :series="series"></apex-chart>
    </div>
</template>

<script>
import QuestionStore from '../store/QuestionStore'
import { timeout } from 'q';
import { setTimeout, setInterval } from 'timers';

export default {
  name: 'Results',
  props: {
    pollId: String
  },
  data: function(){
      return {
          query: "",
          answerList: [],
          selectedAnswerIndex: 0,
          options: {
            chart: {
              id: 'poll-result'
            },
            xaxis: {
              type: 'category',
              categories: []
            }
          },
          series: [{
            data: []
          }],
          y: 0
      }
  },
  methods: {
  },
  mounted: function(){
    //TODO: remove when data is fetched from the web
    if(this.pollId === QuestionStore.data.pollId)
    {
        this.answerList = QuestionStore.data.answerList
    }

    //set update sequence
    setInterval(function(){
      //fetch
      
      //restructure data for vuechart
      let categories = []
      let data = []
      for(let answerIndex = 0; answerIndex < this.answerList.length; answerIndex++)
      {
        categories.push(this.answerList[answerIndex].index);
        data.push(this.answerList[answerIndex].votes);
      }
      this.options.xaxis.categories = categories;
      this.series[0].data = data;
    }.bind(this), 1000)
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