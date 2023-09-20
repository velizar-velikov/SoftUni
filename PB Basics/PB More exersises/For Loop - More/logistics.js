function logistics(input) {
    let cargoNumber = Number(input[0]);

    let cargoWeight = 0;
    let vehicle = "";
    let pricePerTonne = 0;
    let totalTonnage = 0;

    let microbusTonnage = 0;
    let truckTonnage = 0;
    let trainTonnage = 0;

    for (let i = 1; i < input.length; i++) {
        cargoWeight = Number(input[i]);

        if (cargoWeight <= 3) {
            pricePerTonne = 200;
            microbusTonnage += cargoWeight;
        } else if (cargoWeight <= 11) {
            pricePerTonne = 175;
            truckTonnage += cargoWeight;
        } else {
            pricePerTonne = 120;
            trainTonnage += cargoWeight;
        }
    }
    for (let j = 1; j < input.length; j++) {
        cargoWeight = Number(input[j]);
        totalTonnage += cargoWeight;
    }
    let avgPrice = (microbusTonnage * 200 + truckTonnage * 175 + trainTonnage * 120) / totalTonnage;

    console.log(avgPrice.toFixed(2));
    console.log(`${(microbusTonnage / totalTonnage * 100).toFixed(2)}%`);
    console.log(`${(truckTonnage / totalTonnage * 100).toFixed(2)}%`);
    console.log(`${(trainTonnage / totalTonnage * 100).toFixed(2)}%`);
}
logistics(["4", "1", "5", "16", "3"])