function flowers(input) {
    let chrysanthemums = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    let totalCount = chrysanthemums + roses + tulips;

    if (season === "Spring" || season === "Summer") {
        chrysanthemumsPrice = 2.00;
        rosesPrice = 4.10;
        tulipsPrice = 2.50;
    } else {
        chrysanthemumsPrice = 3.75;
        rosesPrice = 4.50;
        tulipsPrice = 4.15;
    }
    if (holiday === "Y") {
        chrysanthemumsPrice *= 1.15;
        rosesPrice *= 1.15;
        tulipsPrice *= 1.15;
    }

    let price = chrysanthemums * chrysanthemumsPrice + roses * rosesPrice + tulips * tulipsPrice;
    let arrangement = 2;

    if (season === "Spring" && tulips > 7) {
        price = 0.95 * price;
    } else if (season === "Winter" && roses >= 10) {
        price = 0.90 * price;
    }
    if (totalCount > 20) {
        price = 0.80 * price;
    }
    price = price + arrangement;
    console.log(price.toFixed(2));
}
flowers(["2", "4", "8", "Spring", "Y"])