/*

20. Count digits in a number
Description: Find how many digits are in a number.
Example:
Input:
786
Output:
3

Author:Hanifa Tavassoli

*/

const countDigits = (number) => {
  let countDigits = Math.abs(number).toString().length;

  return countDigits;
};

console.log(countDigits(945));
console.log(countDigits(9));

export default countDigits;
