/*

6. Write a function to find the smallest element in an array
Description: Find and return the smallest number in an array.
Example:
Input:
[4, 7, 1, 9, 2]
Output:
1

*/

const findSmallestNumber = (numbers) => {
  if (numbers.length === 0 || !Array.isArray(numbers)) return "invalid input";

  let smallestNum = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallestNum) smallestNum = numbers[i];
  }
  return smallestNum;
};

console.log(findSmallestNumber([4, 7, 1, 9, 2]));
console.log(findSmallestNumber([-6, -9, -7, -5, -8, -3]));
console.log(findSmallestNumber([]));
console.log(findSmallestNumber("ABS"));

export default findSmallestNumber;
