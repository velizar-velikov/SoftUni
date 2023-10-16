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