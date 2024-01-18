function carFactory(car) {

    const engineTypes = {
        'small': { power: 90, volume: 1800 },
        'normal': { power: 120, volume: 2400 },
        'monster': { power: 200, volume: 3500 },
    }

    const createCarriage = (type, color) => ({ type, color });

    for (let type in engineTypes) {
        if (engineTypes[type].power >= car.power) {
            car.engine = engineTypes[type];
            delete car.power;
            break;
        }
    }

    car.carriage = createCarriage(car.carriage, car.color);
    delete car.color;

    const size = car.wheelsize % 2 == 0 ?
        Math.floor(car.wheelsize) - 1
        : car.wheelsize;

    car.wheels = new Array(4).fill(size);
    delete car.wheelsize;
    return car;
}

const myCar = carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
})
console.log(myCar);