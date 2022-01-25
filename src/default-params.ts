console.log('Hello TS world!');

const button = document.querySelector('button')!;

button.addEventListener('click', () => {
  console.log('clicked!');
});

const sum = (n1: number = 4, n2: number = 6) => {
  return n1 + n2;
};

const printOutput: (a: number | string) => void = input => {
  console.log('Input: ', input);
};

printOutput(sum(undefined, 2)); // 6
printOutput(sum(10)); // 16
