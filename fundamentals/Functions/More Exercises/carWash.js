function carWash(arr) {
    let percentage = 0;

    let myArr = {
        'soap': 10,
        'water': 1.20,
        'vacuum cleaner': 1.25,
        'mud': 0.90
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'soap') {
            percentage += myArr[arr[i]];
        } else {
            percentage *= myArr[arr[i]];
        }
    }
    console.log(`The car is ${percentage.toFixed(2)}% clean.`);
}
carWash(["soap", "water", "mud", "mud", "water", "mud",
    "vacuum cleaner"])