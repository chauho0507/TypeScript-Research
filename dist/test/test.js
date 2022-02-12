"use strict";
let a;
a = 10;
let b;
b = true;
let c;
c = 'TypeScript';
let arr1;
arr1 = ['abc', 'def', 'ghj', 'klm'];
let arr2;
arr2 = [1, 2, 3, 4];
let e;
e = 10;
e = '10';
e = true;
e = [1, 2, 3, 4];
let f;
f = 10;
f = false;
f = [1, 2, 3, 4];
f = '10';
if (typeof f === 'string')
    c = f;
function add1(n1, n2) {
    return n1 + n2;
}
function add2(n1, n2) {
    const sum = n1 + n2;
    console.log(sum);
}
function generateError(message, errorCode) {
    throw { message, errorCode };
}
const person = {
    name: 'Chau',
    age: 31,
    hobbies: ['swimming', 'fishing'],
    role: [0, 'admin'],
};
//# sourceMappingURL=test.js.map