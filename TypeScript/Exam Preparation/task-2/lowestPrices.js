"use strict";
lowestPricesTask([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
]);
function lowestPricesTask(towns) {
    const products = createProducts(towns);
    printProductsLowestPrice(products);
}
function printProductsLowestPrice(products) {
    products.forEach((product) => {
        const townWithLowestPrice = product.towns.sort((a, b) => a.price - b.price)[0];
        console.log(`${product.productName} -> ${townWithLowestPrice.price} (${townWithLowestPrice.town})`);
    });
}
function createProducts(productsStr) {
    const products = [];
    for (const productStr of productsStr) {
        const { town, productName, price } = getProductData(productStr);
        const product = products.find((p) => p.productName === productName);
        if (product) {
            product.towns.push({ town, price });
        }
        else {
            const product = {
                productName,
                towns: [{ town, price }],
            };
            products.push(product);
        }
    }
    return products;
}
function getProductData(productStr) {
    const items = productStr.split(' | ');
    const town = items[0];
    const productName = items[1];
    const price = Number(items[2]);
    return {
        town,
        productName,
        price,
    };
}
