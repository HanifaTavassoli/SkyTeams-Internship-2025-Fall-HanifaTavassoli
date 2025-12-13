/*

10. Check whether a number is prime
Description: Determine if a number is divisible only by 1 and itself.
Example:
Input:
17
Output:
Prime
Input:
20
Output:
Not Prime

*/

const isPrimeNumber = (number) => {
  if (isNaN(number)) return "Invalid Input";

  if (number < 2) return "Not Prime";

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return "Not Prime";
  }

  return "Prime";
};

console.log(isPrimeNumber(17));
console.log(isPrimeNumber(20));

export default isPrimeNumber;
