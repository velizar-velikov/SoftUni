function manageCompany(input) {

    let cars = {};
    input.forEach(info => {
        let [brand, model, count] = info.split(' | ');
        count = Number(count);

        if (!cars[brand]) {
            cars[brand] = {};
            cars[brand][model] = count;
        } else {
            if (!cars[brand][model]) {
                cars[brand][model] = count;
            } else {
                cars[brand][model] += count;
            }
        }
    })

    for (let brand in cars) {
        console.log(brand);
        Object.entries(cars[brand])
            .forEach(([model, count]) => {
                console.log(`###${model} -> ${count}`);
            })
    }
}

//TESTING
manageCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])