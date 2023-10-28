function catalogue(input) {

    let store = [];
    
    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }

    for (let row of input) {
        let [name, price] = row.split(' : ');
        price = Number(price);
        let product = new Product(name, price);
        store.push(product);
    }

    let sortedStore = store.sort((a, b) => a['name'].localeCompare(b['name']));
    
    for (let i = 0; i < sortedStore.length; i++) {
        let firstLetter = sortedStore[i]['name'][0];
        if (i === 0) {
            console.log(firstLetter);
        } else if (sortedStore[i - 1]['name'][0] != firstLetter) {
            console.log(firstLetter);
        }
    
        console.log(`  ${sortedStore[i]['name']}: ${sortedStore[i]['price']}`);
    }
}
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ])