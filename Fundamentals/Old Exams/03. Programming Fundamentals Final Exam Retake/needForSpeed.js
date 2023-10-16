function needForSpeed(input) {
    let maxCars = parseInt(input.shift());

    class Car {
        constructor(brand, mileage, fuelQuantity) {
            this.brand = brand;
            this.mileage = mileage;
            this.fuelQuantity = fuelQuantity
        }
    }

    let carsArrays = [];
    for (let i = 0; i < maxCars; i++) {
        let tokens = input.shift().split('|');
        let brand = tokens[0];
        let mileage = Number(tokens[1]);
        let fuelQuantity = Number(tokens[2]);
        let car = new Car(brand, mileage, fuelQuantity);
        carsArrays.push(car);
    }

    let command = input.shift();
    while (command != 'Stop') {
        let tokens = command.split(' : ');
        let action = tokens[0];
        let car = tokens[1];

        for (let i = 0; i < carsArrays.length; i++) {
            if (carsArrays[i].brand == car) {
                if (action == 'Drive') {
                    let distance = Number(tokens[2]);
                    let fuel = Number(tokens[3]);
                    if (carsArrays[i].fuelQuantity >= fuel) {
                        carsArrays[i].fuelQuantity -= fuel;
                        carsArrays[i].mileage += distance;
                        console.log(`${carsArrays[i].brand} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                        if (carsArrays[i].mileage >= 100000) {
                            console.log(`Time to sell the ${carsArrays[i].brand}!`);
                            carsArrays.splice(i, 1);
                        }
                    } else {
                        console.log('Not enough fuel to make that ride');
                    }
                } else if(action == 'Refuel') {
                    let fuel = Number(tokens[2]);
                    let fuelBeforeRefilling = carsArrays[i].fuelQuantity;
                    carsArrays[i].fuelQuantity = carsArrays[i].fuelQuantity + fuel <= 75 ? carsArrays[i].fuelQuantity + fuel : 75;
                    console.log(`${carsArrays[i].brand} refueled with ${carsArrays[i].fuelQuantity - fuelBeforeRefilling} liters`);
                } else if (action == 'Revert') {
                    let kilometers = Number(tokens[2]);
                    if (carsArrays[i].mileage - kilometers < 10000) {
                        carsArrays[i].mileage = 10000;
                    } else {
                        carsArrays[i].mileage -= kilometers;
                        console.log(`${carsArrays[i].brand} mileage decreased by ${kilometers} kilometers`);
                    }
                }
            }
        }

        command = input.shift();
    }

    carsArrays.forEach(a => console.log(`${a.brand} -> Mileage: ${a.mileage} kms, Fuel in the tank: ${a.fuelQuantity} lt.`));
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ])