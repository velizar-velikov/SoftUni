class Employee {
    name: string;
    salary: number;
    position: string;
    department: string;
    email?: string;
    age?: number;

    constructor(name: string, salary: number, position: string, department: string, email?: string, age?: number) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        if (email) {
            this.email = email;
        }
        if (age) {
            this.age = age;
        }
    }
}

class Department {
    depName: string;
    employees?: Employee[];
    avgSalary?: number;

    constructor(depName: string, avgSalary?: number) {
        this.depName = depName;
        this.employees = [];
        if (this.avgSalary) {
            this.avgSalary = avgSalary;
        }
    }
}

initialize(
    6,
    'Silver 496.37 Temp Coding silver@yahoo.com',
    'Sam 610.13 Manager Sales',
    'John 609.99 Manager Sales john@abv.bg 44',
    'Venci 0.02 Director BeerDrinking beer@beer.br 23',
    'Andre 700.00 Director Coding',
    'Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey'
);

function initialize(_, ...lines: string[]) {
    const employees = createEmployees(lines);
    const departments = createDepartments(employees);
    addDepartmentAvgSalary(departments);
    const departmentWithHighestAvgSalary = getDepartmentWithHighestAvgSalary(departments);
    const departmentWithEmployeesSorted = sortDepartmentEmployeesBySalaryDesc(departmentWithHighestAvgSalary);
    printDepartmentInfo(departmentWithEmployeesSorted);
}

function createEmployees(lines: string[]): Employee[] {
    const employees: Employee[] = [];
    const departments: Department[] = [];

    lines.forEach((line) => {
        const lineInfo: string[] = line.split(' ');
        const name: string = lineInfo[0];
        const salary: number = Number(lineInfo[1]);
        const position: string = lineInfo[2];
        const department: string = lineInfo[3];
        const email: string | undefined = lineInfo[4];
        const age: number = Number(lineInfo[5]);

        const employee = new Employee(name, salary, position, department, email, age);

        employees.push(employee);
    });

    return employees;
}

function createDepartments(employees: Employee[]): Department[] {
    const departments: Department[] = [];

    employees.forEach((employee) => {
        const department = departments.find((department) => department.depName === employee.department);
        if (!department) {
            departments.push(new Department(employee.department));
        }

        departments.find((department) => department.depName === employee.department).employees.push(employee);
    });

    return departments;
}

function addDepartmentAvgSalary(departments: Department[]): Department[] {
    departments.forEach((department) => {
        const avgSalary: number =
            department.employees.reduce((acc, employee) => acc + employee.salary, 0) / department.employees.length;
        department.avgSalary = avgSalary;
    });

    return departments;
}

function getDepartmentWithHighestAvgSalary(departments: Department[]): Department {
    departments.sort((a, b) => b.avgSalary - a.avgSalary);
    return departments[0];
}

function printDepartmentInfo(department: Department): void {
    console.log(`Highest Average Salary: ${department.depName}`);

    department.employees.forEach((employee) => {
        console.log(
            `${employee.name} ${employee.salary.toFixed(2)} ${employee.email ? employee.email : 'n/a'} ${
                employee.age ? employee.age : -1
            }`
        );
    });
}

function sortDepartmentEmployeesBySalaryDesc(department: Department): Department {
    department.employees.sort((a, b) => b.salary - a.salary);
    return department;
}
