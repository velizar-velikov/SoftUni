function storage(input) {
    let store = new Map();
    for (let item of input) {
        let tokens = item.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        if (store.has(product)) {
            let oldQuantity = store.get(product);
            let newQuantity = oldQuantity + quantity;
            store.set(product, newQuantity);
        } else {
            store.set(product, quantity);
        }
    }
    for (let [product, quantity] of store) {
        console.log(`${product} -> ${quantity}`);
    }
}
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'])