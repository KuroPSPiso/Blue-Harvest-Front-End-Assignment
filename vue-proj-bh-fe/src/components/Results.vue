<template>
    <div ref="resultsInstance" class="results-component">
      <apex-chart type="bar" :options="options" :series="series"></apex-chart>
      <!--<apex-chart type=pie width=380 :options="piechartOptions" :series="piechartSeries" />-->
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
            },
            legend: {
                position: 'right',
                offsetY: 0,
                height: 230,
            },
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            }
          },
          series: [{
            data: []
          }],
          piechartSeries: [11],
          piechartOptions: {
            dataLabels: {
              enabled: true
            },
            labels: [],
            legend: {
                position: 'right',
                offsetY: 0,
                height: 230,
            }
          }
      }
  },
  methods: {
  },
  mounted: function(){
    //TODO: remove when data is fetched from the web
    console.log(this.pollId)
    console.log(QuestionStore.data.pollId)
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
      let labels = []
      for(let answerIndex = 0; answerIndex < this.answerList.length; answerIndex++)
      {
        categories.push(this.answerList[answerIndex].index)
        labels.push(this.answerList[answerIndex].index)
        data.push(this.answerList[answerIndex].votes)
      }
      this.options.xaxis.categories = categories
      this.series[0].data = data
      this.piechartSeries = data;
      this.piechartOptions.labels = labels;
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