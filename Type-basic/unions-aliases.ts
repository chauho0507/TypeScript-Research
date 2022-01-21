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
    result = +input1 + +input2;
  //force result to return a number
  else result = input1.toString() + input2.toString();

  return result;
};

const combineAges = combine(31, 28, 'as-number');
const combineStringAges = combine('31', '28', 'as-number');
const combineNames = combine(31, 28, 'as-text');

console.log('Force', combineStringAges);
