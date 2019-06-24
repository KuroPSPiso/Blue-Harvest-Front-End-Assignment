<template>
    <div class="question-component">
        <div class="question-form">
            <div>
                <input type="text" v-model="query" placeholder="Enter your question here"/>
            </div>
            <div>
                <div v-for="answer in answerList" v-bind:key="answer.index">
                    <input 
                        type="text" 
                        v-model="answer.value" 
                        />
                    <input 
                        type="button"
                        value="x"
                        v-on:click="removeAnswer(answer.index-1)"
                        />
                </div>
                <div v-if="getAnswerSize() < maxSize" >
                    <input 
                        ref="addAnswerField"
                        type="text"
                        v-bind:placeholder="
                            'Enter your ' +
                            (((getAnswerSize()+1) === 1) ? 
                                '1st' :
                                ((getAnswerSize()+1) === 2) ?
                                    '2nd'
                                    :((getAnswerSize()+1) === 3)? '3rd':
                                        ((getAnswerSize()+1) + 'th')) + 
                            ' answer here'"
                        />
                    <input 
                        type="button"
                        value="Add"
                        v-on:click="addAnswer()"
                        />
                </div>
            </div>
            <div>
                {{getAnswerSize()}}/{{maxSize}} possible answers
                <input type="button" value="Reset" v-on:click="reset()">
            </div>
        </div>
    </div>
</template>

<script>
import AnswerClass from '../classes/answer'
import QuestionStore from '../store/QuestionStore' //TODO: remove when using imported data

export default {
  name: 'Question',
  methods:{
    //generateKey: a unique key for the owner of a question to return to and edit later. 
    generateKey: function(){
        
    },
    getAnswers: function(){

    },
    getAnswerSize: function(){
        if(this.answerList === undefined)
            return 0
        else if(this.answerList === null)
            return 0
        else
            return this.answerList.length
    },
    addAnswer: function(){
        let answerFieldVal = this.$refs.addAnswerField.value
        if(answerFieldVal === undefined || answerFieldVal === null){
            //handle/pop error when empty answers are not allowed to be added
            answerFieldVal = ""
        }
        else if(answerFieldVal === ""){
            //handle/pop error when empty answers are not allowed to be added
        }
        let answerToPush = new AnswerClass(this.answerList.length + 1, answerFieldVal) //obj[0] = 1, obj[1] = 2, etc.
        this.answerList.push(answerToPush)
        this.$refs.addAnswerField.value = ""
    },
    removeAnswer: function(index){
        this.answerList.splice(index, 1)
        for(let updateIndex = index; updateIndex < this.answerList.length; updateIndex++)
        {
            this.answerList[updateIndex].index = updateIndex + 1 //obj[0] = 1, obj[1] = 2, etc.
        }
        while(this.answerList.length < this.minSize)
        {
            this.addAnswer()
        }
    },
    reset: function(){
        this.query = ""
        this.answerList = []
        this.$refs.addAnswerField.value = ""
    }
  },
  props:{
      maxSize: {
          type: Number,
          default: 10
      },
      minSize: {
          type: Number,
          default: 2
      },
      editorCode: {
          type: String,
          default: ""
      }
  },
  data: function(){
      return {
          query: "",
          answerList: []
      }
  },
  mounted: function(){
    //TODO: remove when data is fetched from the web
    if(this.editorCode === QuestionStore.data.editorCode)
    {
        this.query = QuestionStore.data.query
        this.answerList = QuestionStore.data.answerList
    }
    //fetch

    //if there are no answers or lack of answers or it is a new doc fill minimum required answers.
    while(this.answerList.length < this.minSize){
        this.addAnswer()
    }
  }
}
</script>

<style scoped>

</style>

<style>
.question-component{
    display: block;
}
</style>