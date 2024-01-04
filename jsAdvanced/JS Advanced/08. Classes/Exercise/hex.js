class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(number) {
        if (number.toString(16) === number) {
            return `0x${(this.value + parseInt(number, 16)).toString(16)}`;
        }
        return `0x${(this.value + number).toString(16).toUpperCase()}`;
    }

    minus(number) {
        if (number.toString(16).toUpperCase() == number) {
            return `0x${(this.value - parseInt(number, 16)).toString(16)}`;
        }
        return `0x${(this.value - number).toString(16).toUpperCase()}`;
    }

    parse(str) {
        return parseInt(str, 16);
    }
}

//TESTING
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));