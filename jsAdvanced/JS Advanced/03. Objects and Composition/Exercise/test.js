class Mammal {
    constructor(age, weight, bodyfat) {
        this.age = age;
        this.weight = weight;
        this.bodyfat = bodyfat;
    }
    getBodyfatPercentage() {
        return (this.bodyfat / this.weight * 100).toFixed(1);
    }
}

class Person extends Mammal {
    constructor(fname, lname, skinColor, job, country) {
        super(23, 80, 15);
        this.firstName = fname;
        this.lastName = lname;
        this.skinColor = skinColor;
        this.job = job;
        this.country = country;
    }
    getFullname() {
        return this.firstName + ' ' + this.lastName;
    }
    greet() {
        return `Hello, my name is ${this.firstName}, I am from ${this.country} and I am applying for a ${this.job} position.`
    }
}

class Gorilla extends Mammal {
    constructor(name, power, gender) {
        super(12, 210, 40);
        this.name = name;
        this.power = power;
        this.gender = gender;
    }
    roar() {
        return `The gorilla ${this.name} is hungry and roars for food!`;
    }
}

const apprentice = new Person('Velizar', 'Velikov', 'white', 'web-developer', 'Bulgaria');
const teamLead = new Person('Pesho', 'Geshev', 'white', 'Team-Lead', 'Romania');
console.log(apprentice.age);
console.log(apprentice.weight);
console.log(apprentice.bodyfat);
console.log(apprentice.getBodyfatPercentage());
console.log(apprentice.greet());
console.log(teamLead.greet());
console.log('---------------------------------------------------------------');
const myGorilla = new Gorilla('Mike', 150, 'male');
console.log(myGorilla.age);
console.log(myGorilla.weight);
console.log(myGorilla.bodyfat);
console.log(myGorilla.getBodyfatPercentage());
console.log(myGorilla.name);
console.log(myGorilla.power);
console.log(myGorilla.roar());