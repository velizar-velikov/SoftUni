interface Dealership<T> {
    dealershipName: T;
    soldCars: number;
}

interface Actions<T> {
    sellCar(dealerID: T, model: T): void;
}

class CarDealership implements Dealership<string>, Actions<string> {
    modelsSold: object = {};
    dealershipName: string;
    soldCars = 0;
    constructor(dealershipName: string) {
        this.dealershipName = dealershipName;
    }

    sellCar(dealerID: string, model: string) {
        this.modelsSold[dealerID] = model;
        this.soldCars++;
    }

    showDetails(): string {
        let outputMsg = `${this.dealershipName}:`;
        for (const dealerID in this.modelsSold) {
            outputMsg += `\n${dealerID} sold ${this.modelsSold[dealerID]}`;
        }
        return outputMsg;
    }
}

let dealership = new CarDealership('SilverStar');

dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
