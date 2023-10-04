function simpleCalculator(numOne, numTwo, operator) {
    let multiplyNums = (a, b) => a * b;
    let divideNums = (a, b) => a / b;
    let addNums = (a, b) => a + b;
    let subtractNums = (a, b) => a - b;

    switch (operator) {
        case 'multiply': return multiplyNums(numOne, numTwo);
        case 'divide': return divideNums(numOne, numTwo);
        case 'add': return addNums(numOne, numTwo);
        case 'subtract': return subtractNums(numOne, numTwo);
    }
}
console.log(simpleCalculator(40, 8, 'divide'))