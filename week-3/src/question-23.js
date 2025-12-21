/*

23. Calculate Factorial Using Recursion
Description: Implement factorial(n), which calculates the factorial of n using recursion.
Example:
Input:
5
Output:
120

*/

const recursiveFactorial = (num) => {
  if (typeof num !== "number" || num < 0) return "Invalid input";

  if (num === 1 || num === 0) return 1;

  return num * recursiveFactorial(num - 1);
};

console.log(recursiveFactorial(5));
console.log(recursiveFactorial(6));
export default recursiveFactorial;
