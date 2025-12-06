/*
11. Simple Calculator using switch-case
Description: Input two numbers and an operator (+, -, *, /) and compute the result.
Example:
Input:
5, 3, +
Output:
8

Author: Hanifa Tavassoli

*/

const simpleCalculator = (number1, number2, operator) => {
  let result = 0;

  switch (operator) {
    case "+":
      result = number1 + number2;
      break;

    case "-":
      result = number1 - number2;
      break;

    case "*":
      result = number1 * number2;
      break;

    case "/":
      result = number2 === 0 ? "Connot divide by zero" : number1 / number2;
      break;
  }

  return result;
};

console.log(simpleCalculator(7, 4, "-"));
console.log(simpleCalculator(7, 4, "+"));
console.log(simpleCalculator(7, 4, "*"));
console.log(simpleCalculator(8, 4, "/"));
console.log(simpleCalculator(8, 0, "/"));

export default simpleCalculator;
