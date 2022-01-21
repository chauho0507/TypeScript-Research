const add = (n1: number, n2: number, showResult: boolean, print: string) => {
  const sum = n1 + n2;
  if (showResult) {
    console.log(print + sum);
  } else return sum;
};

const number1 = 5;
const number2 = 3.3;
const printResult = true;
const output = 'The sum is: ';
add(number1, number2, printResult, output);
