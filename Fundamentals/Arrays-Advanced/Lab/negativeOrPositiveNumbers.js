let negativeOrPositiveNumbers = input => {
    let result = [];
    input.map(Number).map(x => x < 0 ? result.unshift(x) : result.push(x));
    console.log(result.join('\n'));
}
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])