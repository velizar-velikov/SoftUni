let dog = {
    name: 'Papaya',
    color: 'black',

    get age() {
        return this._age;
    },

    set age(value) {
        this._age = value;
    }
}

dog.age = 6;
console.log(dog.age());
for (let prop in dog) {
    console.log(prop, dog[prop]);
}