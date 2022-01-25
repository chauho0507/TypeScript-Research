"use strict";
console.log('Hello TS world!');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('clicked!');
});
const sum = (n1 = 4, n2 = 6) => {
    return n1 + n2;
};
const printOutput = input => {
    console.log('Input: ', input);
};
printOutput(sum(undefined, 2));
printOutput(sum(10));
//# sourceMappingURL=default-params.js.map