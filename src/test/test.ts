let a: number;
a = 10;

let b: boolean;
b = true;

let c: string;
c = 'TypeScript';

let arr1: string[]; // hoặc Array<string>
arr1 = ['abc', 'def', 'ghj', 'klm'];

let arr2: Array<number>;
arr2 = [1, 2, 3, 4];

let e: any; // có thể nhận type bất kỳ.
e = 10;
e = '10';
e = true;
e = [1, 2, 3, 4];

// Đối với các biến đã được khai báo type, nếu gán khác loại type thì báo lỗi.

let f: unknown;
f = 10;
f = false;
f = [1, 2, 3, 4];
f = '10';
// c = f; // không đảm bảo biến f có type là 'string', nên cần check điều kiện
if (typeof f === 'string') c = f;

// Function type:

function add1(n1: number, n2: number) {
  return n1 + n2;
}
function add2(n1: number, n2: number): void {
  const sum = n1 + n2;
  console.log(sum);
  // return;
}
function generateError(message: string, errorCode: number): never {
  throw { message, errorCode };
  // return;  <- never type not allow return
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuple
} = {
  name: 'Chau',
  age: 31,
  hobbies: ['swimming', 'fishing'],
  role: [0, 'admin'],
};
