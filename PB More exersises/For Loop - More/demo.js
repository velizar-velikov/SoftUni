function solve(input) {
    let price = Number(input[0]);
    let numberPuzzels = Number(input[1])
    let numberDolls = Number(input[2])
    let numberBears = Number(input[3])
    let numberMinions = Number(input[4])
    let numberTrucks = Number(input[5])
    let check = false;
    if (numberPuzzels + numberBears + numberDolls + numberMinions + numberTrucks >= 50) {
        check = true;
    }
    let sum = (numberPuzzels * 2.60) + (numberDolls * 3) + (numberBears * 4.10) + (numberMinions * 8.20) + (numberTrucks * 2);
    if (check === true) {
        let sale = sum * 25 / 100;
        sum -= sale;
        sale = sum * 10 / 100;
        sum -= sale;
    }
    else {
        let sale = sum * 10 / 100;
        sum -= sale;
    }

    if (price <= sum) {
        console.log(`Yes! ${(sum - price).toFixed(2)} lv left.`)

    } else {
        console.log(`Not enough money! ${(price - sum).toFixed(2)} lv needed.`);
    }
}
