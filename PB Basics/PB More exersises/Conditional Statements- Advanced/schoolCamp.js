function schoolCamp(input) {
    let season = input[0];
    let group = input[1];
    let count = Number(input[2]);
    let nights = Number(input[3]);

    let priceNight = 0;
    let sport = "";

    if (group === "boys" || group === "girls") {
        switch (season) {
            case "Winter":
                priceNight = 9.60;
                break;
            case "Spring":
                priceNight = 7.20;
                break;
            case "Summer":
                priceNight = 15;
                break;
        }
    } else {
        switch (season) {
            case "Winter":
                priceNight = 10;
                break;
            case "Spring":
                priceNight = 9.50;
                break;
            case "Summer":
                priceNight = 20;
                break;
        }
    }
    if (count >= 10 && count < 20) {
        priceNight = 0.95 * priceNight;
    } else if (count >= 20 && count < 50) {
        priceNight = 0.85 * priceNight;
    } else if (count >= 50) {
        priceNight = 0.50 * priceNight;
    }
    if (group === "girls") {
        switch (season) {
            case "Winter":
                sport = "Gymnastics";
                break;
            case "Spring":
                sport = "Athletics";
                break;
            case "Summer":
                sport = "Volleyball";
                break;
        }
    } else if (group === "boys") {
        switch (season) {
            case "Winter":
                sport = "Judo";
                break;
            case "Spring":
                sport = "Tennis";
                break;
            case "Summer":
                sport = "Football";
                break;
        }
    } else {
        switch (season) {
            case "Winter":
                sport = "Ski";
                break;
            case "Spring":
                sport = "Cycling";
                break;
            case "Summer":
                sport = "Swimming";
                break;
        }
    }
    let price = priceNight * count * nights;
    console.log(`${sport} ${price.toFixed(2)} lv.`);
}
schoolCamp(["Winter", "mixed", "9", "15"])
