//using a basic js implementation to more easily decouple from the main project, instead of relying on VueX
import AnswerClass from "../classes/answer";

const QuestionStore = {
    data: {
        editorCode: "blueharvest",
        pollId: "debug",
        query: "Will the the second answer be computed?",
        answerList: [
            new AnswerClass(1, 'Yes').addVote().addVote().addVote(),
            new AnswerClass(2, 'No').addVote()
        ]
    },
    methods: {
        setQuery(query){
            QuestionStore.query = query;
        },
        setAnswerList(answerList)
        {
            QuestionStore.answerList = answerList;
        }
    }
}

export default QuestionStore;