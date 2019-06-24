export default class AnswerClass{
    constructor(index, value)
    {
        this.index = index;
        this.value = value;
        this.setId = function(id) {
            this.id = id;
        }
    }
}