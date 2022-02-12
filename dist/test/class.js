"use strict";
class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    static createEmployee(name) {
        console.log(this.startedYear);
        return { name };
    }
    describe() {
        console.log(Department.startedYear);
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees = [employee, ...this.employees];
    }
    printEmployeesInfo() {
        console.log(this.employees.length, this.employees);
    }
}
Department.startedYear = 2021;
console.log(Department.startedYear);
const employee1 = Department.createEmployee('Linh');
console.log(employee1);
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT Department', []);
        this.admins = admins;
    }
}
const it = new ITDepartment('IT1', ['Chau']);
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting', []);
        this.reports = reports;
    }
    addReport(report) {
        this.reports = [report, ...this.reports];
        return this.reports;
    }
    showReport() {
        console.log(this.reports);
    }
    showLastReport() {
        if (!this.reports.length)
            return;
        console.log(this.reports[0]);
    }
    printEmployeesInfo() {
        if (!this.employees.length)
            console.log('Empty! May be add one?');
        else
            console.log(this.employees);
    }
}
const accounting = new AccountingDepartment('a1', []);
accounting.addReport('Something went wrong!');
accounting.addReport("This's last report!");
accounting.showLastReport();
accounting.showReport();
accounting.printEmployeesInfo();
accounting.addEmployee('Chau map');
accounting.printEmployeesInfo();
class Human {
    constructor(name) {
        this.name = name;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const human1 = new Human('Linh');
console.log(human1);
human1.greet('Hello');
//# sourceMappingURL=class.js.map