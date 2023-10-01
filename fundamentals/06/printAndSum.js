function printAndSum(start, end) {
    let sum = 0;
    let numAsString = '';
    for (let i = start; i <= end; i++) {
        numAsString += i + ' ';
        sum += i;
    }
    console.log(numAsString);
    console.log('Sum: ' + sum);
}
printAndSum(5, 10)