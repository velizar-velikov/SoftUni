const arrayFlatInplementation = require("./ArrayFlatImplementation")

//Testing the method
const arr = [1, [2, 3, [4, 5, [6, 7, [8, 9, [10, 11]]]]]];
const flattenedArr = arr.flatten(5);
const flattenedArr2 = arr.flat(5)
console.log(flattenedArr);
console.log(flattenedArr2);