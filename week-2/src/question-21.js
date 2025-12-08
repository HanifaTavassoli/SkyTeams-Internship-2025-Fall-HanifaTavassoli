/*

21. Sum of digits
Description: Calculate the sum of all digits of a number.
Example:
Input:
123
Output:
6

 Author: Hanifa Tavassoli

*/

const sumDigits = (number) => {
  let sum = 0;

  let digits = Math.abs(number).toString();

  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }

  return sum;
};

console.log(sumDigits(415));

export default sumDigits;
