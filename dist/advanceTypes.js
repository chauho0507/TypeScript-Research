"use strict";
console.log('Advance Types!');
const e1 = {
    name: 'Chau',
    privileges: ['create-db'],
    startedDate: new Date(),
};
function addAdvance(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
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
    loadCargo(amount) {
        console.log(`Load cargo: ${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function animalMove(animal) {
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
//# sourceMappingURL=advanceTypes.js.map