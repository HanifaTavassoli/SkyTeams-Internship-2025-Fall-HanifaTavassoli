/*

16. Fibonacci sequence
Description: Print the Fibonacci sequence up to N terms.
Example:
Input:
7
Output:
0, 1, 1, 2, 3, 5, 8

*/

const fibonacciSequence = (count) => {
  if (typeof count !== "number" || isNaN(count) || count < 0)
    return "Invalid Input";
  if (count === 0) return [];
  if (count === 1) return [0];

  let firstNum = 0;
  let secondNum = 1;

  let fibonacci = [firstNum, secondNum];

  for (let i = 2; i < count; i++) {
    const next = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = next;
    fibonacci.push(next);
  }

  return fibonacci;
};

console.log(fibonacciSequence(7));
console.log(fibonacciSequence(0));
console.log(fibonacciSequence(1));
console.log(fibonacciSequence(2));
console.log(fibonacciSequence(-3));
console.log(fibonacciSequence("Finbonacci"));
export default fibonacciSequence;
