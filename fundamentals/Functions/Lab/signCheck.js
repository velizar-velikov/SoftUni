function signCheck(numOne, numTwo, numThree) {
    let arr = [];
    arr.push(numOne, numTwo, numThree);
    let minusCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            minusCount++;
        } else if (arr[i] == 0) {
            minusCount = 0;
        }
    }
    minusCount % 2 == 0 ? console.log('Positive') : console.log('Negative');
}
signCheck(-2, -4, 6)