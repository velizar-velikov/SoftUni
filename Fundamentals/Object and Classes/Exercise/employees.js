function employees(input) {
    class Employee {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber
        }
        printInfo() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
        }
    }

    for (let name of input) {
        let personalNumber = name.length;
        let employee = new Employee(name, personalNumber);
        employee.printInfo();
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])