function truckDriver(input) {
    let season = input[0];
    let kmsPerMonth = Number(input[1]);

    let payPerKm = 0;

    if (kmsPerMonth <= 5000) {
        switch (season) {
            case "Spring":
            case "Autumn":
                payPerKm = 0.75;
                break;
            case "Summer":
                payPerKm = 0.90;
                break;
            case "Winter":
                payPerKm = 1.05;
                break;
        }
    } else if (kmsPerMonth <= 10000) {
        switch (season) {
            case "Spring":
            case "Autumn":
                payPerKm = 0.95;
                break;
            case "Summer":
                payPerKm = 1.10;
                break;
            case "Winter":
                payPerKm = 1.25;
                break;
        }
    } else {
        payPerKm = 1.45;
    }
    let salary = 0.90 * (kmsPerMonth * payPerKm * 4);

    console.log(salary.toFixed(2));
}
truckDriver(["Spring", "1600"])