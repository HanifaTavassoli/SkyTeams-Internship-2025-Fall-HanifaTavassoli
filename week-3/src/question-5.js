/*

5. Write a function to find the largest element in an array
Description: Given an array of numbers, return the largest value.
Example:
Input:
[2, 8, 5, 3, 9]
Output:
9

*/

const findLargestNumber = (numbers) => {
  if (numbers.length === 0 || !Array.isArray(numbers)) return "invalid input";

  let largest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) largest = numbers[i];
  }

  return largest;
};

console.log(findLargestNumber([2, 8, 5, 3, 9]));
console.log(findLargestNumber([]));
console.log(findLargestNumber("ABS"));

export default findLargestNumber;
