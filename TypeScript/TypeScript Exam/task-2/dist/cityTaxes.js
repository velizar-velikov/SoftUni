function cityTaxes(city, population, treasury) {
    return {
        name: city,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population = Math.floor(this.population * (1 + percentage / 100));
        },
        applyRecession(percentage) {
            this.treasury = Math.floor(this.treasury * (1 - percentage / 100));
        },
    };
}
const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
//# sourceMappingURL=cityTaxes.js.map