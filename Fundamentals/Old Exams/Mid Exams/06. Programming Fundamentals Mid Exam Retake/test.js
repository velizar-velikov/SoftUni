function jsonStringToObject (jsonString) {
    let info = JSON.parse(jsonString);
    let entries = Object.entries(info);
    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}
jsonStringToObject('{"name": "George","age": 40,"town": "Sofia“}')

function objToJson(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    }

    let jsonString = JSON.stringify(person);
    console.log(jsonString);
}
objToJson('George', 'Jones', 'Brown')

function createCat (input) {
    class Cat {
        constructor (name, age){
            this.name = name;
            this.age = age
        }
        meow () {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let item of input) {
        let tokens = item.split(' ');
        let name = tokens[0];
        let age = parseInt(tokens[1]);
        let cat = new Cat(name, age);
        cat.meow();
    }
}
createCat(['Mellow 2','Tom 5'])
createCat(['Garry 2', 'Puffy 3'])

function catCreator(arr) {
    // TODO: Create the Cat class
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let cats = [];
    for (let i = 0; i < arr.length; i++) {
        let catData = arr[i].split(' ');
        cats.push(new Cat(catData[0], catData[1]));
    }
    // TODO: Iterate through cats[] and invoke .meow()
    for (let cat of cats) {
        cat.meow();
    }
}
catCreator(['Garry 7', 'Pesho 6'])

var generate = function(numRows) {
    const pas = [];
    for(let i=0; i<numRows; i++) {
        pas[i] = [];
        pas[i][0] = 1;
        pas[i][i] = 1;
        for(let j=1; j<i; j++) {
            pas[i][j] = pas[i-1][j-1] + pas[i-1][j];
        }
    }
    return pas;
};
console.log(generate(5))