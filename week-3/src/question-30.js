/*

30. Find Missing Number in Array (1 to N)
Description: Given arr from 1 to N with one missing, find the missing number.
Example:
Input:
[1, 2, 4, 5]
Output:
3

*/

const findMissingNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return "Invalid input";

  let arraySum = 0;

  let n = arr.length + 1;

  for (let i = 0; i < arr.length; i++) arraySum += arr[i];

  let totalSum = (n * (n + 1)) / 2;

  return totalSum - arraySum;
};

console.log(findMissingNumber([1, 2, 4, 5]));
console.log(findMissingNumber([1, 2, 3, 4]));
console.log(findMissingNumber([2, 3, 4, 5]));
export default findMissingNumber;
