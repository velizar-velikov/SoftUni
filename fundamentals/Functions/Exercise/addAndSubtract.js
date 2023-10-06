function addAndSubtract(intOne, intTwo, intThree) {
    function sum(a, b) {
        return a + b;
    }
    let result = sum(intOne, intTwo);
    function subtract(c, d) {
        return c - d;
    }
    return subtract(result, intThree);
}
console.log(addAndSubtract(23, 6, 10));