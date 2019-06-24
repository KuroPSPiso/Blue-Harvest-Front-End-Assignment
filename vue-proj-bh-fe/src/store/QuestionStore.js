const QuestionStore = {
    data: {
        question: "",
        answers: []
    },
    methods: {
        setQuestion(question){
            QuestionStore.question = question;
        },
        setAnswer(answer)
        {
            QuestionStore.answer = answer;
        }
    }
}

export default QuestionStore;