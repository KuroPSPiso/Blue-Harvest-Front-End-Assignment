<template>
    <div class="answersheet-component">
        <div 
          v-for="answer in answerList"
          v-bind:key="answer.index">
            <input
            type="radio"
            v-bind:value="answer.index - 1"
            v-model="selectedAnswerIndex"
            />
            <label>{{answer.value}}</label>
        </div>
        <input
          type="button"
          value="Vote"
          v-on:click="vote()"
          />
    </div>
</template>

<script>
import QuestionStore from '../store/QuestionStore';

export default {
  name: 'AnswerSheet',
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
    vote: function()
    {
      this.answerList[this.selectedAnswerIndex].addVote()
    }
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
.answersheet-component{
    display: block;
}
</style>