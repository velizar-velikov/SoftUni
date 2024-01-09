function mathOperations(num1, num2, operator) {
    let operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b
    }
    console.log(operations[operator](num1, num2));
}

mathOperations(3, 5.5, '*')