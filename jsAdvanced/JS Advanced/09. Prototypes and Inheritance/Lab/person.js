function createPerson(firstName, lastName) {
    const myPerson = {
        firstName,
        lastName
    };

    Object.defineProperty(myPerson, 'fullName', {
        enumerable: true,
        configurable: true,
        get() {
            return myPerson.firstName + ' ' + myPerson.lastName;
        },
        set(value) {
            [myPerson.firstName, myPerson.lastName] = value.split(' ');
        }
    });

    return myPerson;
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName);