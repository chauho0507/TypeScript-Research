const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuple -> array, first is number, second is string.
} = {
  name: 'Chau',
  age: 31,
  hobbies: ['Swimming', 'Fishing'],
  // role: ['2', 'user'],  // not allow
  role: [2, 'user'],
};

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

// if want to declare a mix array, use this
// let favoriteActivities: any[];
// favoriteActivities = ['football', 2, true]
// let favoriteActivities: any[] or Array<any>;
// favoriteActivities = ['football', 2, true];

// Nested objs

const product: {
  id: string;
  price: number;
  tags: Array<string>;
  details: {
    title: string;
    description: string;
  };
} = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!',
  },
};

// Enum: custom type to reuse
// enum Role {
//   ADMIN,
//   USER,
//   SHIPPER,
// }

// const chau = {
//   name: 'Chau map',
//   age: 31,
//   hobbies: ['Gaming', 'fishing'],
//   role: Role.ADMIN,
// };

let test: any;
test = true;
test = 'true';
test = 1;
test = [];
test = {};
