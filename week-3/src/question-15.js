/*

    15. Check for Armstrong number
    Description: A number is Armstrong if the sum of its digits raised to the power of the number of 
    digits equals the number itself.
    Example:
    Input:
    153
    Output:
    Armstrong
    Input:
    123
    Output:
    // Not Armstrong

*/

import powerOfNumber from "./question-13.js";

const checkArmstrongNumber = (num) => {
  if (Number.isNaN(num) || typeof num !== "number") return "Invalid Input";

  let count = countDigits(num);

  let sum = 0;
  let number = Math.abs(num);
  while (number > 0) {
    let remainder = number % 10;
    sum += powerOfNumber(remainder, count);
    number = Math.floor(number / 10);
  }

  return sum === Math.abs(num) ? "Armstrong" : "Not Armstrong";
};

const countDigits = (num) => {
  let number = Math.abs(num);
  if (number === 0) return 1;
  let count = 0;
  while (number > 0) {
    number = Math.floor(number / 10);
    count++;
  }

  return count;
};

console.log(checkArmstrongNumber(153));
console.log(checkArmstrongNumber(123));

export default checkArmstrongNumber;
