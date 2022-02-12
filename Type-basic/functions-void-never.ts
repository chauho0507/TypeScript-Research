function sum(n1: number, n2: number) {
  return n1 + n2;
}
function printOutput(num: number): void {
  console.log('Result ' + num);
  return; //<- can return nothing
}
function generateError(message: string, errorCode: number): never {
  throw { message, errorCode };
  // return; // <- never type not allow return
}

generateError('An error occurred!', 404);

printOutput(sum(31, 28));

let getSum: (a: number, b: number) => number;

getSum = sum;
// getSum = printOutput;

console.log(getSum(28, 7));

// Create function with callback

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(31, 28, result => {
  console.log('Result ' + result);
});
