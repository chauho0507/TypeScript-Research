function sum(n1: number, n2: number) {
  return n1 + n2;
}

function printOutput(num: number): void {
  console.log('Result ' + num);
  // return; <- return nothing
}

printOutput(sum(31, 28));

let getSum: (a: number, b: number) => number;

getSum = sum;
// combineValues = printResult;

console.log(getSum(28, 7));

// Create function with callback

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(31, 28, result => {
  console.log('Result ' + result);
});
