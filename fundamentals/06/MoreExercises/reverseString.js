function reverseString(input) {
    let  inputAsString = `${input}`;
    let output = inputAsString.split('').reverse().join('');
    console.log(output);
    return input.toString();
}
reverseString(4321)