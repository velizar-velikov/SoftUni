const mathOperations = (a: number, b: number, operator: string): void => {
    interface Operation {
        [key: string]: (a: number, b: number) => number;
    }
    const operations: Operation = {
        '+': (a: number, b: number): number => a + b,
        '-': (a: number, b: number): number => a - b,
        '*': (a: number, b: number): number => a * b,
        '/': (a: number, b: number): number => a / b,
        '%': (a: number, b: number): number => a % b,
        '**': (a: number, b: number): number => a ** b,
    };

    console.log(operations[operator](a, b));
};

mathOperations(5, 6, '+');
