function printAndSum(start, end) {
    let sum = 0;
    let numbersAsString = '';
    for (let i = start; i <= end; i++) {
        numbersAsString += i + ' ';
        sum += i;
    }
    console.log(numbersAsString.trimEnd());
    console.log(`Sum: ${sum}`);
}
printAndSum(50, 60);
//# sourceMappingURL=printAndSum.js.map