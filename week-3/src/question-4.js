/*

4. Display all factors of a number
Description: Print all numbers that divide the given number exactly.
Example:
Input:
12
Output:
1, 2, 3, 4, 6, 12

*/

const factorsOfNumber = (number) => {
  if (isNaN(number)) return "the input is not a number";

  if (number === 0) return "cannot find factors for zero";

  let factors = [];

  number = Math.abs(Number(number));

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) factors.push(i);
  }

  return factors;
};

console.log(factorsOfNumber(12));
console.log(factorsOfNumber(0));
console.log(factorsOfNumber(-18));
console.log(factorsOfNumber("15"));
console.log(factorsOfNumber("sad"));

export default factorsOfNumber;
