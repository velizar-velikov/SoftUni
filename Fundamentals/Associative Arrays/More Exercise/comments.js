function storeComments(input) {
    let articles = {};
    let users = {};

    while(input.length > 0) {
        let command = input.shift();

        if (command.includes('user')) {
           let [, user] = command.split('user ');
           users[user] = {};
        } else if (command.includes('article')){
            let [, article] = command.split('article ');
           articles[article] = {};
        } else if (command.includes(' posts on')) {
            let [user, info] = command.split(' posts on ');
            let [article, commentInfo] = info.split(': ');
            let [title, content] = commentInfo.split(', ');
            if (user in users && article in articles) {
                articles[article][title] = content;
                users[user][title] = content;
            }
        }
    }

    let articlesEntries = Object.entries(articles).sort((a, b) => Object.keys(articles[b[0]]).length - Object.keys(articles[a[0]]).length);
    for (let [article, comments] of articlesEntries) {
        console.log(`Comments on ${article}`);
        let thisArticleUsers = {};

        for (let [title, content] of Object.entries(comments)){
            for (let user in users) {
                if (title in users[user]) {
                    if (user in thisArticleUsers) {
                        thisArticleUsers[user][title] = content;
                    } else {
                        thisArticleUsers[user] = {};
                        thisArticleUsers[user][title] = content;
                    }
                }
            }

        }

        let thisArticleUsersEntries = Object.entries(thisArticleUsers).sort((a, b) => a[0].localeCompare(b[0]));
        for (let [user, comment] of thisArticleUsersEntries) {

            let [title, content] = Object.entries(comment)[0];
            console.log(`--- From user ${user}: ${title} - ${content}`);
        }
    } 
    
}
// storeComments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])

storeComments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like'])