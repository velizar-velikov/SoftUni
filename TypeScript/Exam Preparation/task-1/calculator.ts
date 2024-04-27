type operator = '+' | '-' | '*' | '/' | '%';

function calc(num1: number, operator: operator, num2: number): void {
    type arithmeticFunction = {
        (a: number, b: number): number;
    };
    interface operationsType {
        '+': arithmeticFunction;
        '-': arithmeticFunction;
        '*': arithmeticFunction;
        '/': arithmeticFunction;
        '%': arithmeticFunction;
    }
    const operations: operationsType = {
        '+': (a: number, b: number): number => a + b,
        '-': (a: number, b: number): number => a - b,
        '*': (a: number, b: number): number => a * b,
        '/': (a: number, b: number): number => a / b,
        '%': (a: number, b: number): number => a % b,
    };
    const result: number = operations[operator](num1, num2);
    console.log(result.toFixed(2));
}

calc(4, '*', 3);
