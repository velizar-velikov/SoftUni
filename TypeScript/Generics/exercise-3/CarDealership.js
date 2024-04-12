class CarDealership {
    modelsSold = {};
    dealershipName;
    soldCars = 0;
    constructor(dealershipName) {
        this.dealershipName = dealershipName;
    }
    sellCar(dealerID, model) {
        this.modelsSold[dealerID] = model;
        this.soldCars++;
    }
    showDetails() {
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
//# sourceMappingURL=CarDealership.js.map