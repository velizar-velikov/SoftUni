"use strict";
function calc(num1, operator, num2) {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
    };
    const result = operations[operator](num1, num2);
    console.log(result.toFixed(2));
}
calc(4, '*', 3);
