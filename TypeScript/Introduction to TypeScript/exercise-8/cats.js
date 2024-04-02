"use strict";
function cats(catsArray) {
    class Cat {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    catsArray.forEach((catString) => {
        const name = catString.split(' ')[0];
        const age = Number(catString.split(' ')[1]);
        const cat = new Cat(name, age);
        cat.meow();
    });
}
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
//# sourceMappingURL=cats.js.map