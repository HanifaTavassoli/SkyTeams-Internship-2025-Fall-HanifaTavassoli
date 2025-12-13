/*

3. Sum of digits of a number
Description: Calculate the sum of all digits in a given number.
Example:
Input:
12345
Output:
15

*/

const sumDigits = (number) => {
  if (isNaN(number)) return "the input is not a number";

  let digits = Math.abs(Number(number)).toString();
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }

  return sum;
};

console.log(sumDigits(415));
console.log(sumDigits("415"));
console.log(sumDigits("abc"));

export default sumDigits;
