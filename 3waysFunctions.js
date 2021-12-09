// 3 WAYS OF WRITING FUNCIONS
// 1)Function declaration

function functionDeclaration(number1, number2) {
  const square = number1 * number1 + number2 * number2;
  const sum2numbers = square * square;
  return sum2numbers;
}

console.log(functionDeclaration(2, 3));

// 2)Function expression

const functionExpresion = function (number1, number2) {
  const square = number1 * number1 + number2 * number2;
  const sum2numbers = square * square;
  return sum2numbers;
};

console.log(functionExpresion(2, 3));

// 3)Arrow function

const arrowFunction = (number1, number2) => {
  const square = number1 * number1 + number2 * number2;
  const sum2numbers = square * square;
  return sum2numbers;
};

console.log(arrowFunction(2, 3));
