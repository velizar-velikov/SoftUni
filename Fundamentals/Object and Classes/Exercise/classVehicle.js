//in judge I had to post only the class
function classVehicle() {
    let parts = {engine: 9, power: 500};
    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.parts.quality = parts.engine * parts.power;
            this.fuel = fuel
        }
        drive(fuelLoss) {
            this.fuel -= fuelLoss;
        }
    }
    //tests:
    let vehicle = new Vehicle('l', 'k', parts, 840);
    vehicle.drive(20);
    console.log(vehicle.fuel);
}
classVehicle()