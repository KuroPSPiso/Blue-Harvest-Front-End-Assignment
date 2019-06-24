export default class AnswerClass{
    constructor(index, value)
    {
        this.index = index
        this.value = value
        this.id = -1 //unset
        this.votes = 0
        this.setId = function(id) {
            this.id = id
        }
        this.setVotes = function(votes) {
            this.votes = votes
        }
        this.addVote = function(){
            this.votes++
        }
    }
}