const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuple -> array with exactly two element, first is number, second is string.
} = {
  // this syntax is better
  name: 'Chau',
  age: 31,
  hobbies: ['Swimming', 'Fishing'],
  role: [2, 'author'],
};

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

// if want to declare a mix array, use this
// let favoriteActivities: any[];
// favoriteActivities = ['football', 2, true]
// let favoriteActivities: any[] or Array<any>;
// favoriteActivities = ['football', 2, true];

// this line of code to explain the TS's behavior up there.

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
// } = {
//   name: 'Chau',
//   age: 31,
// };

// Nested objs

const product: {
  id: string;
  price: number;
  tags: string[];
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

// Enum:
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const chau_map = {
  name: 'Chau map',
  age: 31,
  hobbies: ['Gaming', 'fishing'],
  role: Role.ADMIN,
};
