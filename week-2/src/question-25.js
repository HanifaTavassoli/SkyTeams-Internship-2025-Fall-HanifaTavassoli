/*

25. Find LCM of two numbers
Description: Compute least common multiple using the relationship: LCM(a, b) = (a × b) / 
GCD(a, b)
Example:
Input:
12, 18`
Output:
36

*/

import findGCD from "./question-24.js";

const findLCM = (num1, num2) => {
  if (num1 === 0 && num2 === 0) return 0;

  if (num1 === 0) return Math.abs(num2);
  if (num2 === 0) return Math.abs(num1);

  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  let result = (num1 * num2) / findGCD(num1, num2);
  return result;
};

console.log(findLCM(12, 18));

export default findLCM;
