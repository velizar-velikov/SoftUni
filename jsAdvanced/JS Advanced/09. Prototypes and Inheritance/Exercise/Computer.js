function createComputerHierarchy() {

    class Manufacturer {
        constructor(manufacturer) {
            //Making the class abstract
            if (this.constructor == Manufacturer) {
                throw new Error('Class is of abstract type and cannot be instantiated');
            }
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Manufacturer {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends Manufacturer {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends Manufacturer {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer extends Manufacturer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            super(manufacturer);
            //Making the class abstract
            if (this.constructor == Computer) {
                throw new Error('Class is of abstract type and cannot be instantiated');
            }
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        _battery;

        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, batteryInstance) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.battery = batteryInstance;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (!(value instanceof Battery)) {
                throw new TypeError('battery mmust be of class Battery');
            }
            this._battery = value;
        }
    }

    class Desktop extends Computer {
        _keyboard;
        _monitor;
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboardInstance, monitorInstance) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboardInstance;
            this.monitor = monitorInstance;
        }

        get keyboard() {
            return this._keyboard;
        }
        set keyboard(value) {
            if (!(value instanceof Keyboard)) {
                throw new TypeError('keyboard must be of class Keyboard');
            }
            this._keyboard = value;
        }

        get monitor() {
            return this._monitor;
        }
        set monitor(value) {
            if (!(value instanceof Monitor)) {
                throw new TypeError('monitor must be of class Monitor');
            }
            this._monitor = value;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}