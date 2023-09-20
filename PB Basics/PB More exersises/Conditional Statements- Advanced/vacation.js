function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let place = "";
    let location = "";
    let price = 0;

    if (budget <= 1000) {
        place = "Camp";
        switch (season) {
            case "Summer":
                location = "Alaska";
                price = 0.65 * budget;
                break;
            case "Winter":
                location = "Morocco";
                price = 0.45 * budget;
                break;
        }
    } else if (budget <= 3000) {
        place = "Hut";
        switch (season) {
            case "Summer":
                location = "Alaska";
                price = 0.80 * budget;
                break;
            case "Winter":
                location = "Morocco";
                price = 0.60 * budget;
                break;
        }
    } else {
        place = "Hotel";
        price = 0.90 * budget;
        switch (season) {
            case "Summer":
                location = "Alaska";
                break;
            case "Winter":
                location = "Morocco";
                break;
        }
    }
    console.log(`${location} - ${place} - ${price.toFixed(2)}`);
}
vacation(["3460", "Summer"])