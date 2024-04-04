"use strict";
class Person {
    firstName;
    lastName;
    age;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
const getPersonalInfo = (firstName, lastName, age) => {
    return new Person(firstName, lastName, Number(age));
};
const info = getPersonalInfo('Peter', 'Pan', '20');
console.log(info);
//# sourceMappingURL=personalInfo.js.map