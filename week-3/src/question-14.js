/*

14. Find factorial of a number
Description: Compute N! using iterative approach.
Example:
Input:
5
Output:
120

*/

const factorialOfNumber = (num) => {
  if (typeof num !== "number" || isNaN(num) || num < 0) return "Invalid Input";
  if (num === 0) return 1;

  let number = 1;

  for (let i = num; i >= 1; i--) {
    number *= i;
  }
  return number;
};

console.log(factorialOfNumber(5));
console.log(factorialOfNumber(3));
console.log(factorialOfNumber(2));
console.log(factorialOfNumber(1));
console.log(factorialOfNumber(0));
console.log(factorialOfNumber(-5));
console.log(factorialOfNumber(""));
export default factorialOfNumber;
