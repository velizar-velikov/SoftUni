"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
init('Peter 12');
function init(personInfo) {
    const person = createPerson(personInfo);
    printPersonInfo(person);
}
function createPerson(personInfo) {
    const name = personInfo.split(' ')[0];
    const age = Number(personInfo.split(' ')[1]);
    const person = new Person(name, age);
    return person;
}
function printPersonInfo(person) {
    console.log(`${person.name} is ${person.age} years old.`);
}
module.exports = {};
//# sourceMappingURL=opinionPoll.js.map