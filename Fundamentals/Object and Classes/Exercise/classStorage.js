function solve() {

    let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
    let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
    let productThree = {name: 'Bread', price: 1.10, quantity: 8};
    
    class Storage {

        storage = {};
        totalCost = 0;

        constructor(capacity) {
            this.capacity = capacity;
        }
        addProduct(product) {
            this.storage[product] = product;
            this.capacity -= product.quantity;
            this.totalCost += product.price * product.quantity;
        }
        getProducts() {
            let result = '';
            for (let item in this.storage) {
                result += JSON.stringify(item) + '\n';
            }
            return result;
        }
    }

let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
// console.log(storage.getProducts());
console.log(storage.storage);
console.log(storage.capacity);
console.log(storage.totalCost);
}
solve()