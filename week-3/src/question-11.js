/*

11. Generate all prime numbers up to N
Description: List all prime numbers up to a given limit using a loop.
Example:
Input:
10
Output:
2, 3, 5, 7

*/

const generatePrimeNumbers = (number) => {
  let prime = [];

  for (let i = 2; i <= number; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) prime.push(i);
  }

  return prime;
};

console.log(generatePrimeNumbers(17));
console.log(generatePrimeNumbers(10));
console.log(generatePrimeNumbers(0));
console.log(generatePrimeNumbers(1));

export default generatePrimeNumbers;
