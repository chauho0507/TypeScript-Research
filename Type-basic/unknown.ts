let userInput: unknown;
let userName: string;

userInput = 5;
userInput = false;
userInput = 'Chau';
// Can accept any value type with unknown type

// userName = userInput; // <- can't guaranteed userInput is string type. Because of that, need an extra step to check type of userInput

if (typeof userInput === 'string') {
  userName = userInput;
}
