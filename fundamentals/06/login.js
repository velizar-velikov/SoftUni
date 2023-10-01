function login(arr) {
    let username = arr[0];
    let correctPass = arr[0].split('').reverse().join('')
    let wrongAttemptCounter = 0;
    for (let i = 1; i < arr.length; i++) {
        let passAttempt = arr[i];
        if (passAttempt != correctPass) {
            wrongAttemptCounter++;
            if (wrongAttemptCounter == 4) {
                console.log(`User ${username} blocked!`);
                return;
            }
            console.log('Incorrect password. Try again.');
        } else {
            console.log(`User ${username} logged in.`);
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA'])