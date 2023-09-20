function solve(input) {
    let fatProcent = Number(input[0]);
    let proteinProcent = Number(input[1]);
    let carbsProcent = Number(input[2]);
    let totalCals = Number(input[3]);
    let waterContentProcent = Number(input[4]);

    let fatGrams = fatProcent / 100 * totalCals / 9;
    let proteinGrams = proteinProcent / 100 * totalCals / 4;
    let carbsGrams = carbsProcent / 100 * totalCals / 4;

    let foodWeight = fatGrams + proteinGrams + carbsGrams;
    let calsPerGramFood = totalCals / foodWeight;
    let res = (100 - waterContentProcent) / 100 * calsPerGramFood;

    console.log(res.toFixed(4));
}
solve(["40",
    "40",
    "20",
    "3000",
    "40"])