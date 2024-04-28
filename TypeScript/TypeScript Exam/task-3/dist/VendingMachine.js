"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.buttonCapacity > this.drinks.length) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const drinkIndex = this.drinks.findIndex((drink) => drink.name === name);
        if (drinkIndex !== -1) {
            this.drinks.splice(drinkIndex, 1);
            return true;
        }
        else {
            return false;
        }
    }
    getLongest() {
        const drink = this.getDrinkWithBiggestVolume();
        return drink.toString();
    }
    getCheapest() {
        const drink = this.getLowestPriceDrink();
        return drink.toString();
    }
    buyDrink(name) {
        const drink = this.findDrinkByName(name);
        return drink.toString();
    }
    get getCount() {
        return this.drinks.length;
    }
    report() {
        let reportOutput = 'Drinks available:';
        this.drinks.forEach((drink) => {
            reportOutput += `\n${drink.toString()}`;
        });
        return reportOutput;
    }
    getDrinkWithBiggestVolume() {
        return this.drinks.sort((a, b) => b.volume - a.volume)[0];
    }
    getLowestPriceDrink() {
        return this.drinks.sort((a, b) => a.price - b.price)[0];
    }
    findDrinkByName(name) {
        return this.drinks.find((drink) => drink.name === name);
    }
}
exports.VendingMachine = VendingMachine;
