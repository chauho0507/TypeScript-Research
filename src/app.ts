// define an obj structure with type more clear than type Person = {}
// if need a clear structure with type, use interface, can implement a class with multiple interface.
// interface can be assigned for obj, classes
// interface can also define function type

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  name?: string;
  outputName?: string; // optional properties
}

interface Greeting extends Named {
  greet(phrase: string): void;
}

class Person implements Greeting {
  name?: string;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string): void {
    if (this.name) console.log(phrase + ' ' + this.name);
    else console.log('Hi!');
  }
}

let user1: Greeting;

user1 = new Person();

user1.greet('Hello');
