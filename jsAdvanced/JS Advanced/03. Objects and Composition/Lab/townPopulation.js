function townPopulation(input) {
    let towns = {};
    while (input.length > 0) {
        let [town, population] = input.shift().split(' <-> ');
        if (town in towns) {
            towns[town] += Number(population);
        } else {
            towns[town] = Number(population);
        }
    }
    Object.entries(towns).forEach(([town, population]) => console.log(town + ' : ' + population))
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])