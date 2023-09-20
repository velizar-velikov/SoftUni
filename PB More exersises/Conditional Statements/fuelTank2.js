function fuelTank2(input) {
    let fuelType = input[0];
    let fuelQuantity = Number(input[1]);
    let card = input[2];

    let price = 0;

    if (card === "Yes") {
        if (fuelType === "Gasoline" && fuelQuantity < 20) {
            price = fuelQuantity * (2.22 - 0.18);
        } else if (fuelType === "Gasoline" && fuelQuantity >= 20 && fuelQuantity <= 25) {
            price = (fuelQuantity * (2.22 - 0.18) * 0.92);
        } else if (fuelType === "Gasoline" && fuelQuantity > 25) {
            price = (fuelQuantity * (2.22 - 0.18) * 0.90);
        } else if (fuelType === "Diesel" && fuelQuantity < 20) {
            price = fuelQuantity * (2.33 - 0.12);
        } else if (fuelType == "Diesel" && fuelQuantity >= 20 && fuelQuantity <= 25) {
            price = (fuelQuantity * (2.33 - 0.12) * 0.92);
        } else if (fuelType === "Diesel" && fuelQuantity > 25) {
            price = fuelQuantity * (2.33 - 0.12) * 0.90;
        } else if (fuelType === "Gas" && fuelQuantity < 20) {
            price = fuelQuantity * (0.93 - 0.08);
        } else if (fuelType === "Gas" && fuelQuantity >= 20 && fuelQuantity <= 25) {
            price = fuelQuantity * (0.93 - 0.08) * 0.92;
        } else if (fuelType === "Gas" && fuelQuantity > 25) {
            price = fuelQuantity * (0.93 - 0.08) * 0.90;
        }
    } else if (card === "No") {
        if (fuelType === "Gasoline" && fuelQuantity < 20) {
            price = fuelQuantity * 2.22;
        } else if (fuelType === "Gasoline" && fuelQuantity >= 20 && fuelQuantity <= 25) {
            price = (fuelQuantity * 2.22 * 0.92);
        } else if (fuelType === "Gasoline" && fuelQuantity > 25) {
            price = (fuelQuantity * 2.22 * 0.90);
        } else if (fuelType === "Diesel" && fuelQuantity < 20) {
            price = fuelQuantity * 2.33;
        } else if (fuelType == "Diesel" && fuelQuantity >= 20 && fuelQuantity <= 25) {
            price = (fuelQuantity * 2.33 * 0.92);
        } else if (fuelType === "Diesel" && fuelQuantity > 25) {
            price = fuelQuantity * 2.33 * 0.90;
        } else if (fuelType === "Gas" && fuelQuantity < 20) {
            price = fuelQuantity * 0.93;
        } else if (fuelType === "Gas" && fuelQuantity >= 20 && fuelQuantity <= 25) {
            price = fuelQuantity * 0.93 * 0.92;
        } else if (fuelType === "Gas" && fuelQuantity > 25) {
            price = fuelQuantity * 0.93 * 0.90;
        }
    }
    console.log(`${(price).toFixed(2)} lv.`)
}
fuelTank2(["Gasoline", "25", "No"])