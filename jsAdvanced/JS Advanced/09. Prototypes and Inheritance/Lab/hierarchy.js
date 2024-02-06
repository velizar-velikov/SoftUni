function createFigureClasses() {

    class Figure {
        constructor() {
            this.units = 'cm';
            this._unitManager = {
                'cm': 1,
                'mm': 10,
                'm': 0.1
            }
        }

        changeUnits(value) {
            this.units = value;
        }
        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = this._unitManager[this.units] * radius;
        }

        changeUnits(value) {
            this.radius = this._unitManager[value] / this._unitManager[this.units] * this.radius;
            this.units = value;
        }

        get area() {
            this.radius = this.radius * this._unitManager[this.units];
            return Math.PI * (this.radius ** 2);
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super();
            this.units = units;
            this.width = this._unitManager[this.units] * width;
            this.height = this._unitManager[this.units] * height;
        }

        changeUnits(value) {
            this.width = this._unitManager[value] / this._unitManager[this.units] * this.width;
            this.height = this._unitManager[value] / this._unitManager[this.units] * this.height;
            this.units = value;
        }

        get area() {
            return this.width * this.height;
        };

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}
