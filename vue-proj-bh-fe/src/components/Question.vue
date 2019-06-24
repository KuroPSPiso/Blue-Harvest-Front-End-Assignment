<template>
    <div ref="questionComponent" class="question-component">
        <!--<div class="question-form">-->
            <div>
                <input 
                    class="question"
                    type="text"
                    v-on:input="updateQuery($event)"
                    v-bind:value="query"
                    placeholder="Enter your question here..."
                    maxlength="80"
                    />
            </div>
            <div class="answers">
                <div v-for="answer in answerList" v-bind:key="answer.index">
                    <input 
                        type="text" 
                        v-model="answer.value" 
                        maxlength="80"
                        v-bind:placeholder="
                            'Enter your ' +
                            (((answer.index) === 1) ? 
                                '1st' :
                                ((answer.index) === 2) ?
                                    '2nd'
                                    :((answer.index) === 3)? '3rd':
                                        ((answer.index) + 'th')) + 
                            ' here answer...'"
                        v-bind:style="{ 'width': inputWidth + 'px' }"
                        />
                    <input 
                        class="button button-round button-red"
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
                            ' here answer...'"
                        maxlength="80"
                        v-bind:style="{ 'width': inputWidth + 'px' }"
                        />
                    <input 
                        class="button button-blue"
                        type="button"
                        value="Add"
                        v-on:click="addAnswer()"
                        />
                </div>
            </div>
            <div class="reset">
                {{getAnswerSize()}}/{{maxSize}} possible answers
                <input 
                    class="button button-gray"
                    type="button"
                    value="Reset"
                    v-on:click="reset()"
                    />
            </div>
        <!--</div>-->
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
        //create key in dataset
    },
    getAnswers: function(){
        //get answers from dataset
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
    updateQuery: function(event){
        QuestionStore.methods.setQuery(event.target.value)
        this.query = QuestionStore.data.query;
    },
    reset: function(){
        
        let sizeOfArray = this.answerList.length;
        for(var arrayIndex = 0; arrayIndex < sizeOfArray; arrayIndex++)
        {
            this.removeAnswer(0)
        }

        //if there are no answers or lack of answers or it is a new doc fill minimum required answers.
        while(this.answerList.length < this.minSize){
            this.addAnswer()
        }
    }
  },
  computed:{
    inputWidth: function(){
        return this.clientWidth - (16*6.5); //rem spacing
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
          answerList: [],
          clientWidth: 0
      }
  },
  created: function(){
    let self = this
    window.addEventListener("resize", function(){
        self.clientWidth = self.$refs.questionComponent.clientWidth
    })
  },
  mounted: function(){
    this.clientWidth = this.$refs.questionComponent.clientWidth
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
.question{
    width: 100%;
}
.answers{
    margin-bottom: 2rem;
}
.reset{
    position: absolute;
    bottom: 0;
}
</style>

<style>
.question-component{
    display: block;
    position: relative;
}
</style>