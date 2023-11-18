function computerStore(arr) {
    let index = 0;
    let command = arr[index];
    index++;
    let price = 0;

    while (command != 'special' && command != 'regular') {
        let curentPartPrice = Number(command);
        if (curentPartPrice < 0) {
            console.log('Invalid price!');
        } else {
            price += curentPartPrice;
        }
        command = arr[index];
        index++;
    }
    let tax = 0.20 * price;
    let priceWithTax = tax + price;

    if (command == 'special') {
        priceWithTax *= 0.90;
    }

    if (price == 0) {
        console.log('Invalid order!');
    } else if (price != 0){
        console.log('Congratulations you\'ve just bought a new computer!')
        console.log(`Price without taxes: ${price.toFixed(2)}$`)
        console.log(`Taxes: ${tax.toFixed(2)}$`)
        console.log('-----------')
        console.log(`Total price: ${priceWithTax.toFixed(2)}$`)
    }
}
computerStore(['-5.50', 'special'])