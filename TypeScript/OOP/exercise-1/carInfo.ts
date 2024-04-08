class Car {
    _brand: string;
    _model: string;
    _horsepower: number;

    constructor(brand: string, model: string, horsepower: number) {
        this.brand = brand;
        this.model = model;
        this.horsepower = horsepower;
    }

    get brand() {
        return this._brand;
    }
    set brand(newBrand: string) {
        this._brand = newBrand;
    }

    get model() {
        return this._model;
    }
    set model(newModel: string) {
        this._model = newModel;
    }

    get horsepower() {
        return this._horsepower;
    }
    set horsepower(newHP: number) {
        this._horsepower = newHP;
    }
}

init('Skoda Karoq 150');

function init(carInfo: string): void {
    const car: Car = createCar(carInfo);
    printCarInfo(car);
}

function createCar(carInfo: string): Car {
    const carInfoArray: string[] = carInfo.split(' ');
    const brand: string = carInfoArray[0];
    const model: string = carInfoArray[1];
    const horsepower: number = Number(carInfoArray[2]);

    const car = new Car(brand, model, horsepower);

    return car;
}

function printCarInfo(car: Car): void {
    console.log(`The car is: ${car.brand} ${car.model} - ${car.horsepower} HP.`);
}
