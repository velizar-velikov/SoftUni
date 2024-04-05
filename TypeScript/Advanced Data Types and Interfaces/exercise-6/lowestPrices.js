"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
init([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
]);
function init(productsInfo) {
    const products = createProductsObject(productsInfo);
    const filteredProducts = filterProductCitiesByLowestPrice(products);
    printProducts(filteredProducts);
}
function printProducts(products) {
    for (let product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }
}
function filterProductCitiesByLowestPrice(products) {
    const filteredProducts = Object.fromEntries(Object.entries(products).map(([product, towns]) => {
        const cheapestTown = towns.sort((a, b) => a.price - b.price)[0];
        return [product, cheapestTown];
    }));
    return filteredProducts;
}
function createProductsObject(productsInfo) {
    const products = {};
    productsInfo.forEach((townInfo) => {
        const townsInfoArray = townInfo.split(' | ');
        const town = townsInfoArray[0];
        const product = townsInfoArray[1];
        const price = Number(townsInfoArray[2]);
        if (!products.hasOwnProperty(product)) {
            products[product] = [];
        }
        const townObject = {
            town,
            price,
        };
        products[product].push(townObject);
    });
    return products;
}
//# sourceMappingURL=lowestPrices.js.map