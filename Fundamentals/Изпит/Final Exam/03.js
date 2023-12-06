function solveFollowers(input) {
    let followers = {};

    let command = input.shift();

    while (command !== 'Log out') {
        let [action, username, ...tokens] = command.split(': ');
        if (action === 'New follower') {
            if (!followers.hasOwnProperty(username)) {
                followers[username] = { 'likes': 0, 'comments': 0 };
            }
        } else if (action === 'Like') {
            let count = Number(tokens[0]);
            if (followers.hasOwnProperty(username)) {
                followers[username].likes += count;
            } else {
                followers[username] = { 'likes': count, 'comments': 0 };
            }
        } else if (action === 'Comment') {
            if (followers.hasOwnProperty(username)) {
                followers[username].comments += 1;
            } else {
                followers[username] = { 'likes': 0, 'comments': 1 };
            }
        } else if (action === 'Blocked') {
            if (followers.hasOwnProperty(username)) {
                delete followers[username];
            } else {
                console.log(`${username} doesn't exist.`);
            }
        }
        command = input.shift();
    }
    let followersCount = Object.keys(followers).length;
    console.log(`${followersCount} followers`);
    Object.entries(followers)
        .forEach(([username, { likes, comments }]) => console.log(`${username}: ${likes + comments}`));
}

// solveFollowers(["New follower: George",
// "Like: George: 5",
// "New follower: George",
// "Log out"])

// solveFollowers(["Like: Katy: 3",
// "Comment: Katy",
// "New follower: Bob",
// "Blocked: Bob",
// "New follower: Amy",
// "Like: Amy: 4",
// "Log out"])

solveFollowers(["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"])