function solution(command) {
    if (command == 'upvote') {
        this.upvotes += 1;
    } else if (command == 'downvote') {
        this.downvotes += 1;
    } else if (command == 'score') {
        let upvotes = this.upvotes;
        let downvotes = this.downvotes;
        let balance = upvotes - downvotes;
        if (upvotes + downvotes > 50) {
            let greaterVotes = balance > 0 ? upvotes : downvotes;
            upvotes += Math.ceil(greaterVotes * 0.25);
            downvotes += Math.ceil(greaterVotes * 0.25);
        }

        let rating;
        if ((this.upvotes + this.downvotes) < 10) {
            rating = 'new';
        } else if (this.upvotes > 0.66 * (this.upvotes + this.downvotes)) {
            rating = 'hot';
        } else if (balance >= 0 && (this.upvotes + this.downvotes) > 100) {
            rating = 'controversial';
        } else if (balance < 0) {
            rating = 'unpopular';
        } else {
            rating = 'new';
        }
        return [upvotes, downvotes, balance, rating];
    }
}

///TESTING
var forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

solution.call(forumPost, 'upvote');

var answer = solution.call(forumPost, 'score');
console.log(answer);