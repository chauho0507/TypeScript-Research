console.log('Advance Types!');

// intersection

type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startedDate: Date;
};
type ElevatedEmployee = Admin & Employee;
const e1: ElevatedEmployee = {
  name: 'Chau',
  privileges: ['create-db'],
  startedDate: new Date(),
};
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// Type guards

function addAdvance(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Admin | Employee;
function printEmployeeInfo(emp: UnknownEmployee) {
  console.log(emp.name);
  if ('privileges' in emp) {
    console.log(emp.privileges);
  }
  if ('startedDate' in emp) {
    console.log(emp.startedDate);
  }
}
printEmployeeInfo(e1);

class Car {
  drive() {
    console.log('Driving...');
  }
}
class Truck {
  drive() {
    console.log('Driving truck ...');
  }
  loadCargo(amount: number) {
    console.log(`Load cargo: ${amount}`);
  }
}
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
useVehicle(v1);
useVehicle(v2);

// Discriminated Unions
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function animalMove(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;

    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at speed: ' + speed);
}
animalMove({ type: 'bird', flyingSpeed: 25 });

// Type casting

// const userInput = <HTMLInputElement>document.getElementById('user-input')!;
const userInput = document.getElementById('user-input')! as HTMLInputElement;

userInput.value = 'Ahihi!';

// Index Properties

interface ErrorContainer {
  [prop: string]: string;
}

const error: ErrorContainer = {
  email: 'Not a valid email!',
  userName: 'Must start with a capital character!',
};

// Function Overloads

function addOverload(a: number, b: number): number;
function addOverload(a: string, b: string): string;
function addOverload(a: number, b: string): string;
function addOverload(a: string, b: number): string;
function addOverload(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString;
  }
  return a + b;
}
const addOver = addOverload(5, 5);
