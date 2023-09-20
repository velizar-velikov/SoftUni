function coffeeMachine(input) {
    let drinkType = input[0];
    let sugarOption = input[1];
    let drinkNumber = Number(input[2]);

    let price = 0;

    if (drinkType === "Espresso") {

        switch (sugarOption) {
            case "Without":
                price = 0.90 * drinkNumber;
                break;
            case "Normal":
                price = 1 * drinkNumber;
                break;
            case "Extra":
                price = 1.20 * drinkNumber;
                break;
        }

    } else if (drinkType === "Cappuccino") {

        switch (sugarOption) {
            case "Without":
                price = 1.00 * drinkNumber;
                break;
            case "Normal":
                price = 1.20 * drinkNumber;
                break;
            case "Extra":
                price = 1.60 * drinkNumber;
                break;
        }

    } else {

        switch (sugarOption) {
            case "Without":
                price = 0.50 * drinkNumber;
                break;
            case "Normal":
                price = 0.60 * drinkNumber;
                break;
            case "Extra":
                price = 0.70 * drinkNumber;
                break;
        }

    }

    if (sugarOption === "Without") {
        price *= 0.65;
    }
    if (drinkType === "Espresso" && drinkNumber >= 5) {
        price *= 0.75;
    }
    if (price > 15) {
        price *= 0.80;
    }

    console.log(`You bought ${drinkNumber} cups of ${drinkType} for ${price.toFixed(2)} lv.`);
}
coffeeMachine(["Espresso", "Without", "10"])