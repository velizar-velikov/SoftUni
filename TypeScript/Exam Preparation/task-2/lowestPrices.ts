interface Town {
    town: string;
    price: number;
}
interface Product {
    productName: string;
    towns: Town[];
}

interface ProductData {
    town: string;
    productName: string;
    price: number;
}

lowestPricesTask([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
]);

function lowestPricesTask(towns: string[]) {
    const products: Product[] = createProducts(towns);
    printProductsLowestPrice(products);
}

function printProductsLowestPrice(products: Product[]): void {
    products.forEach((product) => {
        const townWithLowestPrice: Town = product.towns.sort((a, b) => a.price - b.price)[0];
        console.log(`${product.productName} -> ${townWithLowestPrice.price} (${townWithLowestPrice.town})`);
    });
}

function createProducts(productsStr: string[]): Product[] {
    const products: Product[] = [];
    for (const productStr of productsStr) {
        const { town, productName, price } = getProductData(productStr);

        const product: Product | undefined = products.find((p) => p.productName === productName);
        if (product) {
            product.towns.push({ town, price });
        } else {
            const product: Product = {
                productName,
                towns: [{ town, price }],
            };
            products.push(product);
        }
    }

    return products;
}

function getProductData(productStr: string): ProductData {
    const items: string[] = productStr.split(' | ');
    const town: string = items[0];
    const productName: string = items[1];
    const price: number = Number(items[2]);
    return {
        town,
        productName,
        price,
    };
}
