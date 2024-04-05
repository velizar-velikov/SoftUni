type Town = {
    town: string;
    price: number;
};

type Products = {
    [key: string]: Town[];
};

type ProductsWithOneCity = {
    [key: string]: Town;
};

init([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
]);

function init(productsInfo: string[]): void {
    const products: Products = createProductsObject(productsInfo);
    const filteredProducts: ProductsWithOneCity = filterProductCitiesByLowestPrice(products);
    printProducts(filteredProducts);
}

function printProducts(products: ProductsWithOneCity): void {
    for (let product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }
}

function filterProductCitiesByLowestPrice(products: Products): ProductsWithOneCity {
    const filteredProducts: ProductsWithOneCity = Object.fromEntries(
        Object.entries(products).map(([product, towns]) => {
            const cheapestTown: Town = towns.sort((a, b) => a.price - b.price)[0];
            return [product, cheapestTown];
        })
    );

    return filteredProducts;
}

function createProductsObject(productsInfo: string[]): Products {
    const products: Products = {};

    productsInfo.forEach((townInfo) => {
        const townsInfoArray: string[] = townInfo.split(' | ');

        const town: string = townsInfoArray[0];
        const product: string = townsInfoArray[1];
        const price: number = Number(townsInfoArray[2]);

        if (!products.hasOwnProperty(product)) {
            products[product] = [];
        }

        const townObject: Town = {
            town,
            price,
        };
        products[product].push(townObject);
    });

    return products;
}

export {};
