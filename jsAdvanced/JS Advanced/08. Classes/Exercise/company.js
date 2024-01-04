class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        let input = [name, salary, position, department];
        if (input.includes('') || input.includes(undefined) || input.includes(null) || salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = {};
            this.departments[department].avgSalary = 0;
        }
        this.departments[department][name] = { salary, position };
        let employeeCount = (Object.keys(this.departments[department]).length - 1);
        this.departments[department].avgSalary = ((this.departments[department].avgSalary) * (employeeCount - 1) + salary) / employeeCount;

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartmentBySalaryEntry = Object.entries(this.departments)
            .sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];

        let output = `Best Department is: ${bestDepartmentBySalaryEntry[0]}\nAverage salary: ${bestDepartmentBySalaryEntry[1].avgSalary.toFixed(2)}\n`;

        Object.entries(bestDepartmentBySalaryEntry[1])
            .sort((a, b) => (b[1].salary - a[1].salary) || (a[0].localeCompare(b[0])))
            .forEach(([name, { salary, position }], index) => {
                if (index === 0) return;
                output += `${name} ${salary} ${position}\n`;
            })

        return output.trimEnd();
    }
}


//TESTING
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());