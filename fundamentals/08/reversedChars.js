function reversedChars(char1, char2, char3) {
    let forward = char1 + char2 + char3;
    let backwards = forward.split('').reverse().join(' ');
    console.log(backwards);
}
reversedChars('A', 'B', 'C')