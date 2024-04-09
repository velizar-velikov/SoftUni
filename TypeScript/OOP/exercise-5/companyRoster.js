class Employee {
    name;
    salary;
    position;
    department;
    email;
    age;
    constructor(name, salary, position, department, email, age) {
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
    depName;
    employees;
    avgSalary;
    constructor(depName, avgSalary) {
        this.depName = depName;
        this.employees = [];
        if (this.avgSalary) {
            this.avgSalary = avgSalary;
        }
    }
}
initialize(6, 'Silver 496.37 Temp Coding silver@yahoo.com', 'Sam 610.13 Manager Sales', 'John 609.99 Manager Sales john@abv.bg 44', 'Venci 0.02 Director BeerDrinking beer@beer.br 23', 'Andre 700.00 Director Coding', 'Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey');
function initialize(_, ...lines) {
    const employees = createEmployees(lines);
    const departments = createDepartments(employees);
    addDepartmentAvgSalary(departments);
    const departmentWithHighestAvgSalary = getDepartmentWithHighestAvgSalary(departments);
    const departmentWithEmployeesSorted = sortDepartmentEmployeesBySalaryDesc(departmentWithHighestAvgSalary);
    printDepartmentInfo(departmentWithEmployeesSorted);
}
function createEmployees(lines) {
    const employees = [];
    const departments = [];
    lines.forEach((line) => {
        const lineInfo = line.split(' ');
        const name = lineInfo[0];
        const salary = Number(lineInfo[1]);
        const position = lineInfo[2];
        const department = lineInfo[3];
        const email = lineInfo[4];
        const age = Number(lineInfo[5]);
        const employee = new Employee(name, salary, position, department, email, age);
        employees.push(employee);
    });
    return employees;
}
function createDepartments(employees) {
    const departments = [];
    employees.forEach((employee) => {
        const department = departments.find((department) => department.depName === employee.department);
        if (!department) {
            departments.push(new Department(employee.department));
        }
        departments.find((department) => department.depName === employee.department).employees.push(employee);
    });
    return departments;
}
function addDepartmentAvgSalary(departments) {
    departments.forEach((department) => {
        const avgSalary = department.employees.reduce((acc, employee) => acc + employee.salary, 0) / department.employees.length;
        department.avgSalary = avgSalary;
    });
    return departments;
}
function getDepartmentWithHighestAvgSalary(departments) {
    departments.sort((a, b) => b.avgSalary - a.avgSalary);
    return departments[0];
}
function printDepartmentInfo(department) {
    console.log(`Highest Average Salary: ${department.depName}`);
    department.employees.forEach((employee) => {
        console.log(`${employee.name} ${employee.salary.toFixed(2)} ${employee.email ? employee.email : 'n/a'} ${employee.age ? employee.age : -1}`);
    });
}
function sortDepartmentEmployeesBySalaryDesc(department) {
    department.employees.sort((a, b) => b.salary - a.salary);
    return department;
}
//# sourceMappingURL=companyRoster.js.map