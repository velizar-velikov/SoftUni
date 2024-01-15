function jansNotation(input) {

    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    }
    const nums = [];
    input.forEach(el => {
        if (typeof el === 'number') {
            nums.push(el);
        } else if (typeof el === 'string') {
            const num2 = nums.pop();
            const num1 = nums.pop();
            if (num1 === undefined || num2 === undefined) {
                console.log('Error: not enough operands!');
                return;
            }
            nums.push(operators[el](num1, num2));
        }
    })
    if (nums.length > 1) {
        console.log('Error: too many operands!');
    } else if (nums.length == 1) {
        console.log(nums[0]);
    }
}

jansNotation([3,
    4,
    '+'])