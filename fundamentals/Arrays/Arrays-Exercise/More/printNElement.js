function printNElement(arr) {
    let step = Number(arr[arr.length - 1]);
    let collection = [];
    for (let i = 0; i < arr.length - 1; i += step) {
        collection.push(arr[i]);
    }
    console.log(collection.join(' '));
}
printNElement(['5', '20', '31', '4', '20', '2'])