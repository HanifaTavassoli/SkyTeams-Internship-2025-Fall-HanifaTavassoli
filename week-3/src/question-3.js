/*

3. Sum of digits of a number
Description: Calculate the sum of all digits in a given number.
Example:
Input:
12345
Output:
15

*/

const sumDigits = (num) => {
  if (isNaN(num)) return "the input is not a number";

  let number = Math.abs(Number(num));

  let sum = 0;

  while (number > 0) {
    let remainder = number % 10;
    sum += remainder;
    number = Math.floor(number / 10);
  }

  return sum;
};

console.log(sumDigits(415));
console.log(sumDigits("415"));
console.log(sumDigits("abc"));

export default sumDigits;
