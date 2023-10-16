function printValues(city) {
    for (let [key, value] of Object.entries(city)) {
        console.log(`${key} -> ${value}`);
    }
}
printValues({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})