function cityTaxes(name, population, treasury) {
    let town = {
        name,
        population,
        treasury,
        taxRate: 10,

        collectTaxes() {
            this.treasury += population * this.taxRate;
            this.treasury = Math.floor(this.treasury);
        },
        applyGrowth(percentage) {
            this.population *= (1 + percentage / 100);
            this.population = Math.floor(this.population);
        },
        applyRecession(percentage) {
            this.treasury *= (1 - percentage / 100)
            this.treasury = Math.floor(this.treasury);
        }
    }
    return town;
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);