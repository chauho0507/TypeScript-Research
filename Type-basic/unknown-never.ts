let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Chau';

userInput = userName;

if (typeof userInput === 'string') userName = userInput;

function generateError(message: string, errorCode: number): never {
  throw { message, errorCode };
}

generateError('An error occurred!', 404);