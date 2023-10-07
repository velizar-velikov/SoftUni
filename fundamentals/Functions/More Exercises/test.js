let myFactorial = function(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * myFactorial(num - 2);
    }
}

let operation = a => (a - 20) * 3;
let num1 = myFactorial(7);
let num2 = operation(25)

function divide(num1, num2) {
    return num1 - num2;
}
console.log(divide(num1, num2));
