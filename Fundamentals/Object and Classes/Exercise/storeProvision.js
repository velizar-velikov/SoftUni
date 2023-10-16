function storeProvision(storeItems, orderedItems) {
    let store = {};

    for (let i = 1; i < storeItems.length; i += 2) {
        let product = storeItems[i - 1];
        let quantity = storeItems[i];
        store[product] = Number(quantity);
    }
    for (let i = 1; i < orderedItems.length; i += 2) {
        let orderedProduct = orderedItems[i - 1];
        let quantityOfOrderedProduct = Number(orderedItems[i]);
        if (store.hasOwnProperty(orderedProduct)) {
            store[orderedProduct] += quantityOfOrderedProduct;
        } else {
            store[orderedProduct] = quantityOfOrderedProduct;
        }
    }
    for (let [key, value] of Object.entries(store)) {
        console.log(`${key} -> ${value}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])