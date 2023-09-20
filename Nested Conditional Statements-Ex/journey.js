function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let type = "";
    let price = 0;

    switch (season) {
        case "summer":
            type = "Camp"; break;
        case "winter":
            type = "Hotel"; break;
    }

    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer":
                price = 0.30 * budget; break;
            case "winter":
                price = 0.70 * budget; break;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer":
                price = 0.40 * budget; break;
            case "winter":
                price = 0.80 * budget; break;
        }
    } else {
        destination = "Europe";
        price = 0.90 * budget;
        type = "Hotel";
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);
}
journey(["312", "summer"])
