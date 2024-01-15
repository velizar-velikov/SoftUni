function storecatalogue(input) {

    input = input.reduce((acc, val) => {
        const [product, price] = val.split(' : ');
        acc[product] = Number(price);
        return acc;
    }, {});

    const sortedInputEntries = Object.entries(input).sort((a, b) => a[0].localeCompare(b[0]));
    const inputNamed = {};
    for (let entry of sortedInputEntries) {
        const letter = entry[0][0];
        if (!inputNamed[letter]) {
            inputNamed[letter] = [];
        }
        inputNamed[letter].push(entry);
    }

    Object.entries(inputNamed)
        .forEach(([letter, entries]) => {
            console.log(letter);
            entries.forEach(entry => {
                console.log(`  ${entry[0]}: ${entry[1]}`);
            })
        })
}
storecatalogue(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'])