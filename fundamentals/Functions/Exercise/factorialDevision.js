function factorialDevision(intOne, intTwo) {
    let factorial = a => {
        if (a <= 1) {
            return 1;
        } else {
            return a * factorial(a - 1);
        }
    }

    let numOne = factorial(intOne);
    let numTwo = factorial(intTwo);
    return (numOne / numTwo).toFixed(2);
}
console.log(factorialDevision(3, 2))