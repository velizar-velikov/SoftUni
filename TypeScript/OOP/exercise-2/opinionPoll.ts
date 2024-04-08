export = {};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

init('Peter 12');

function init(personInfo: string): void {
    const person = createPerson(personInfo);
    printPersonInfo(person);
}

function createPerson(personInfo: string): Person {
    const name: string = personInfo.split(' ')[0];
    const age: number = Number(personInfo.split(' ')[1]);

    const person = new Person(name, age);

    return person;
}

function printPersonInfo(person: Person): void {
    console.log(`${person.name} is ${person.age} years old.`);
}
