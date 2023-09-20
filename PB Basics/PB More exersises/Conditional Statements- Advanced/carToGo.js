function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let carClass = "";
    let type = "";
    let price = 0;

    if (budget <= 100) {
        carClass = "Economy class";
        switch (season) {
            case "Summer":
                type = "Cabrio";
                price = 0.35 * budget;
                break;
            case "Winter":
                type = "Jeep";
                price = 0.65 * budget;
                break;
        }
    } else if (budget <= 500) {
        carClass = "Compact class";
        switch (season) {
            case "Summer":
                type = "Cabrio";
                price = 0.45 * budget;
                break;
            case "Winter":
                type = "Jeep";
                price = 0.80 * budget;
                break;
        }
    } else {
        carClass = "Luxury class";
        type = "Jeep";
        price = 0.90 * budget;
    }
    console.log(carClass);
    console.log(`${type} - ${price.toFixed(2)}`);
}
carToGo(["1010", "Summer"])