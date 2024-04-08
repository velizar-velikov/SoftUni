export = {};

class Animal {
    eat() {
        console.log('eating...');
    }
}

class Dog extends Animal {
    bark() {
        console.log('barking...');
    }
}

class Cat extends Animal {
    meow() {
        console.log('meow...');
    }
}

const animal = new Animal();
animal.eat();

const dog = new Dog();
dog.eat();
dog.bark();

const cat = new Cat();
cat.eat();
cat.meow();
