type Calorie = {
    [key: string]: number;
};

function printCalorieObject(productDetails: string[]): void {
    let calorieObject: Calorie = {};

    for (let i = 0; i < productDetails.length; i += 2) {
        calorieObject[productDetails[i]] = Number(productDetails[i + 1]);
    }

    console.log(calorieObject);
}

printCalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
