function lowestPrices(input) {

    const products = {};
    input.forEach(info => {
        const [town, product, price] = info.split(' | ');
        if (products[product]) {
            products[product][town] = Number(price);
        } else {
            products[product] = {};
            products[product][town] = Number(price);
        }
    })

    for (let [product, townObj] of Object.entries(products)) {
        const productEntry = Object.entries(townObj).sort((a, b) => a[1] - b[1])[0];
        console.log(`${product} -> ${productEntry[1]} (${productEntry[0]})`);
    }
}

lowestPrices([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])