// console.log(fibonacciRecursion(5));
console.log(fibonacciRecursion2(5));

function fibonacciRecursion(n) {

    if (n <= 0) {
        return 'The number must be positive!';
    } else if (n == 1 || n == 2) {
        return 1;
    }

    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

let a = 0;
let b = 1;
function fibonacciRecursion2(n) {

    let sum = a + b;
    if (n == 1 || n == 2) {
        return sum;
    } else {
        a = b;
        b = sum;
        sum = a + b;
        return fibonacciRecursion2(n - 1);
    }
}