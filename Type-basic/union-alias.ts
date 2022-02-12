type Combinable = number | string;
type CombinableDescriptor = 'as-number' | 'as-text';

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: CombinableDescriptor
) => {
  let result: Combinable;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  )
    //force result to return a number
    result = +input1 + +input2;
  else result = input1.toString() + input2.toString();

  return result;
};

const combineAges = combine(31, 28, 'as-number');
const combineStringAges = combine('31', '28', 'as-number');
const combineNames = combine('Chau', 'Suong', 'as-text');

console.log('Ages: ', combineAges); // Ages: 59
console.log('Force: ', combineStringAges); // Force: 59
console.log('Name: ', combineNames); // Name: ChauSuong
