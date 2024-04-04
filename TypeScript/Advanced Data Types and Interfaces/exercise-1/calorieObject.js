"use strict";
function printCalorieObject(productDetails) {
    let calorieObject = {};
    for (let i = 0; i < productDetails.length; i += 2) {
        calorieObject[productDetails[i]] = Number(productDetails[i + 1]);
    }
    console.log(calorieObject);
}
printCalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
//# sourceMappingURL=calorieObject.js.map