let arr = [1, 2, 3, 4, 5];
let [a, b] = arr;

function addAndMultiply(a, b) {
    return [a + b, a * b];
}
let [sum, product] = addAndMultiply(a, b);
console.log(`%cPrinting with color:\nSum: ${sum}\nProduct: ${product}`, 'font-weight: bold; color: purple');
