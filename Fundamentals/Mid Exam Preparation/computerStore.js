function computerStore(input) {
    let customerType = input.pop();
    input = input.map(Number);

    let priceNoTax = 0;
    while (input.length) {
        let partPrice = input.shift();
        if (partPrice < 0) {
            console.log('Invalid price!');
        } else {
            priceNoTax += partPrice;
        }
    }
    if (priceNoTax == 0) {
        console.log('Invalid order!');
    } else {
        let tax = 0.20 * priceNoTax;
        let priceWithTax = priceNoTax + tax;
        if (customerType == 'special') {
            priceWithTax *= 0.90;
        }
        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${priceNoTax.toFixed(2)}$
Taxes: ${tax.toFixed(2)}$
-----------
Total price: ${priceWithTax.toFixed(2)}$`);
    }
}
computerStore([

    '1050',

    '200',

    '450',

    '2',

    '18.50',

    '16.86',

    'special'

])