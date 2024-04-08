class Car {
    _brand;
    _model;
    _horsepower;
    constructor(brand, model, horsepower) {
        this.brand = brand;
        this.model = model;
        this.horsepower = horsepower;
    }
    get brand() {
        return this._brand;
    }
    set brand(newBrand) {
        this._brand = newBrand;
    }
    get model() {
        return this._model;
    }
    set model(newModel) {
        this._model = newModel;
    }
    get horsepower() {
        return this._horsepower;
    }
    set horsepower(newHP) {
        this._horsepower = newHP;
    }
}
init('Skoda Karoq 150');
function init(carInfo) {
    const car = createCar(carInfo);
    printCarInfo(car);
}
function createCar(carInfo) {
    const carInfoArray = carInfo.split(' ');
    const brand = carInfoArray[0];
    const model = carInfoArray[1];
    const horsepower = Number(carInfoArray[2]);
    const car = new Car(brand, model, horsepower);
    return car;
}
function printCarInfo(car) {
    console.log(`The car is: ${car.brand} ${car.model} - ${car.horsepower} HP.`);
}
//# sourceMappingURL=carInfo.js.map