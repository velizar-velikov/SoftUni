"use strict";
const mathOperations = (a, b, operator) => {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b,
    };
    console.log(operations[operator](a, b));
};
mathOperations(5, 6, '+');
//# sourceMappingURL=mathOperations.js.map