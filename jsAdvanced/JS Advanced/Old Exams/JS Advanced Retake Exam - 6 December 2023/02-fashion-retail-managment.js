class FashionRetailInventory {

    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {

        let product = this.productStock.find(product => product.name == productName && product.size == size);
        if (product == undefined) {
            product = {
                name: productName,
                size,
                quantity,
                price
            }
            this.productStock.push(product);
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }
        product.quantity += quantity;
        return `You added ${quantity} more pieces of product ${productName} size ${size}`;
    }

    sendProduct(productName, size) {

        const product = this.productStock.find(product => product.name == productName && product.size == size);

        if (product == undefined) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        }
        const index = this.productStock.findIndex(product => product.name === productName);
        this.productStock.splice(index, 1);
        return `The product ${productName}, size ${size} was successfully removed from the inventory`;
    }

    findProductsBySize(size) {
        const foundProducts = this.productStock.filter(product => product.size == size);

        if (foundProducts.length == 0) {
            return 'There are no products available in that size';
        }
        const outputArr = [];
        foundProducts.forEach(product => outputArr.push(`${product.name}-${product.quantity} pieces`));
        return outputArr.join(', ');
    }

    listProducts() {
        if (this.productStock.length == 0) {
            return `${this.storehouse} storehouse is empty`;
        }
        let output = `${this.storehouse} storehouse in ${this.location} available products:\n`;

        return this.productStock.sort((a, b) => a.name.localeCompare(b.name))
            .reduce((acc, product) => acc + `${product.name}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$\n`, output)
            .trimEnd();
    }
}

//Testing
const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());