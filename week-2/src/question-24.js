/*

24. Find GCD of two nums
Description: Compute the greatest common divisor using repeated subtraction or the Euclidean 
algorithm.
Example:
Input:
12, 18
Output:
6

Author: Hanifa Tavassoli

*/

const findGCD = (num1, num2) => {
  if (num1 === 0) return Math.abs(num2);
  if (num2 === 0) return Math.abs(num1);

  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  let divisor1 = [];
  let divisor2 = [];

  for (let i = 1; i <= num1; i++) if (num1 % i === 0) divisor1.push(i);

  for (let i = 1; i <= num2; i++) if (num2 % i === 0) divisor2.push(i);

  let result = 1;

  for (let i = 0; i < divisor1.length; i++) {
    for (let j = 0; j < divisor2.length; j++) {
      if (divisor1[i] === divisor2[j] && divisor1[i] > result) {
        result = divisor1[i];
      }
    }
  }

  return result;
};

console.log(findGCD(12, 18));

export default findGCD;
