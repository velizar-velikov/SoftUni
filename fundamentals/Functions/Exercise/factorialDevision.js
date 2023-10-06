function factorialDevision(intOne, intTwo) {
    let factorialFirst = a => {
        if (a > 1) {
            return a * factorialFirst(a - 1);
        } else {
            return 1;
        }
    }

    let factorialSecond = b => {
        if (b > 1) {
            return b * factorialSecond(b - 1);
        }else {
            return 1;
        }
    }
    let numOne = factorialFirst(intOne);
    let numTwo = factorialSecond(intTwo);
    return (numOne / numTwo).toFixed(2);
}
console.log(factorialDevision(6, 2))