function fuelTank(input) {
    let fuelType = input[0];
    let fuelLeft = Number(input[1]);

    if (fuelType === "Diesel") {
        if (fuelLeft >= 25) {
            console.log(`You have enough ${(fuelType).toLowerCase()}.`);
        } else {
            console.log(`Fill your tank with ${(fuelType).toLowerCase()}!`);
        }
    } else if (fuelType === "Gasoline") {
        if (fuelLeft >= 25) {
            console.log(`You have enough ${(fuelType).toLowerCase()}.`);
        } else {
            console.log(`Fill your tank with ${(fuelType).toLowerCase()}!`);
        }
    } else if (fuelType === "Gas") {
        if (fuelLeft >= 25) {
            console.log(`You have enough ${(fuelType).toLowerCase()}.`);
        } else {
            console.log(`Fill your tank with ${(fuelType).toLowerCase()}!`);
        }
    } else {
        console.log('Invalid fuel!');
    }
}
fuelTank(["Diesel", "25"])