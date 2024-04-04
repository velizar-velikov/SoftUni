interface PersonalInfo {
    firstName: string;
    lastName: string;
    age: number;
}

class Person implements PersonalInfo {
    firstName: string;
    lastName: string;
    age: number;
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

const getPersonalInfo = (firstName: string, lastName: string, age: string): PersonalInfo => {
    return new Person(firstName, lastName, Number(age));
};

const info = getPersonalInfo('Peter', 'Pan', '20');
console.log(info);
