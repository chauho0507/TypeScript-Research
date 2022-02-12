// class Department {
//   name: string;
//   private employees: string[] = [];
//   constructor(n: string) {
//     this.name = n;
//   }
//   describe(this: Department) {
//     console.log('Department: ' + this.name);
//   }
//   addEmployee(employee: string) {
//     this.employees = [employee, ...this.employees];
//   }
//   printEmployeesInfo() {
//     console.log(this.employees.length, this.employees);
//   }
// }

class Department {
  static startedYear = 2021;
  constructor(
    readonly id: string,
    public name: string,
    protected employees: string[]
  ) {}

  static createEmployee(name: string) {
    console.log(this.startedYear);
    return { name };
  }

  describe(this: Department): void {
    console.log(Department.startedYear);
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees = [employee, ...this.employees];
  }
  printEmployeesInfo(): void {
    console.log(this.employees.length, this.employees);
  }
}

console.log(Department.startedYear);
const employee1 = Department.createEmployee('Linh');
console.log(employee1);

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT Department', []);
  }
}
const it = new ITDepartment('IT1', ['Chau']);

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting', []);
  }
  addReport(report: string) {
    this.reports = [report, ...this.reports];
    return this.reports;
  }
  showReport(): void {
    console.log(this.reports);
  }
  showLastReport(): void {
    if (!this.reports.length) return;
    console.log(this.reports[0]);
  }
  printEmployeesInfo(): void {
    if (!this.employees.length) console.log('Empty! May be add one?');
    else console.log(this.employees);
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

interface Greet {
  name: string;
  greet(phrase: string): void;
}

class Human implements Greet {
  constructor(public name: string) {}

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}
const human1 = new Human('Linh');
console.log(human1);
human1.greet('Hello');
