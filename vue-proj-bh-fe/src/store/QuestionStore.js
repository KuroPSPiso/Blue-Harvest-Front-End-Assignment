import AnswerClass from "../classes/answer";

const QuestionStore = {
    data: {
        editorCode: "blueharvest",
        query: "Will the the second answer be computed?",
        answerList: [
            new AnswerClass(1, 'Yes')
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