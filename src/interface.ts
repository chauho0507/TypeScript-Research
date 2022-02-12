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
  firstName?: string; // optional properties
  lastName?: string;
}
interface Named {
  outputName?: string;
  info?: {
    location: string;
    phone: string;
  };
}
let userInfo: Named;
userInfo = {
  firstName: 'Ho',
  info: {
    location: '29 Nguyen Chi Dieu',
    phone: '0935025045',
  },
};
userInfo = {
  lastName: 'Chau',
};
userInfo = {
  firstName: 'Ho',
  lastName: 'Chau',
  outputName: 'Chau ho',
};

interface Greeting extends Named {
  phoneNumber?: number;
  greet?(phrase?: string): void;
}
class Person implements Greeting {
  lastName?: string;
  phoneNumber?: number;
  constructor(phoneNumber?: number, lastName?: string) {
    if (lastName) {
      this.lastName = lastName;
    }
    if (phoneNumber) this.phoneNumber = phoneNumber;
  }
  greet(phrase: string): void {
    if (this.lastName) console.log(phrase + ' ' + this.lastName);
    else console.log('Hi!');
  }
}
let user1: Greeting;
user1 = new Person(123, 'CHAU');
// user1.greet('Hello'); // Hello CHAU
