export default class Answer{
    constructor(index, value)
    {
        this.index = index;
        this.value = value;
        this.setId = function(id) {
            this.id = id;
        }
    }
}