function cats(catsArray: string[]) {
    class Cat {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    catsArray.forEach((catString: string) => {
        const name: string = catString.split(' ')[0];
        const age: number = Number(catString.split(' ')[1]);
        const cat: Cat = new Cat(name, age);
        cat.meow();
    });
}

cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
