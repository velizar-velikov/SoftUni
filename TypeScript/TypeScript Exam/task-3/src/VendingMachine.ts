import { DrinkType } from './Drink';

export class VendingMachine {
    buttonCapacity: number;
    drinks: DrinkType[];

    constructor(buttonCapacity: number) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }

    addDrink(drink: DrinkType) {
        if (this.buttonCapacity > this.drinks.length) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name: string): boolean {
        const drinkIndex = this.drinks.findIndex((drink) => drink.name === name);
        if (drinkIndex !== -1) {
            this.drinks.splice(drinkIndex, 1);
            return true;
        } else {
            return false;
        }
    }
    getLongest(): string {
        const drink: DrinkType = this.getDrinkWithBiggestVolume();
        return drink.toString();
    }
    getCheapest(): string {
        const drink: DrinkType = this.getLowestPriceDrink();
        return drink.toString();
    }

    buyDrink(name: string): string {
        const drink: DrinkType = this.findDrinkByName(name);
        return drink.toString();
    }

    get getCount(): number {
        return this.drinks.length;
    }

    report(): string {
        let reportOutput: string = 'Drinks available:';
        this.drinks.forEach((drink) => {
            reportOutput += `\n${drink.toString()}`;
        });
        return reportOutput;
    }

    private getDrinkWithBiggestVolume(): DrinkType {
        return this.drinks.sort((a, b) => b.volume - a.volume)[0];
    }
    private getLowestPriceDrink(): DrinkType {
        return this.drinks.sort((a, b) => a.price - b.price)[0];
    }
    private findDrinkByName(name: string): DrinkType {
        return this.drinks.find((drink) => drink.name === name) as DrinkType;
    }
}
