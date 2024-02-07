function createPeopleClasses() {

    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [`${this.name} is working on a simple task.`,
            `${this.name} is working on a complicated task.`,
            `${this.name} is taking time off work.`,
            `${this.name} is supervising junior workers.`,
            `${this.name} scheduled a meeting.`,
            `${this.name} is preparing a quarterly report.`];
            this._currentTaskIndex = 0;
        }

        work() {
            console.log(this.tasks[this._currentTaskIndex]);
            this._currentTaskIndex++;
            if (this._currentTaskIndex > this.tasks.length - 1) {
                this._currentTaskIndex = 0;
            }
        }
        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a simple task.`];
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a complicated task.`,
            `${this.name} is taking time off work.`,
            `${this.name} is supervising junior workers.`];
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks = [`${this.name} scheduled a meeting.`, `${this.name} is preparing a quarterly report.`]
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}