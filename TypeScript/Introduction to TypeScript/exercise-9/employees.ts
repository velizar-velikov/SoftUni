function printEmployees(employees: string[]): void {
    employees.forEach((employee: string): void => {
        console.log(`Name: ${employee} -- Personal Number: ${employee.length}`);
    });
}

printEmployees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
