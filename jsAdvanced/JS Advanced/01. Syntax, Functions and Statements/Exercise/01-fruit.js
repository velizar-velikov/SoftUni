function fruit(fruitType, weight, price) {
    console.log(`I need $${(weight / 1000 * price).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruitType}.`);
}

fruit('orange', 2500, 1.80)