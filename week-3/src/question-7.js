/*

7. Write a function to find the sum of all elements in an array
Description: Calculate the total sum of all array elements.
Example:
Input:
[1, 2, 3, 4, 5]
Output:
15

*/

const sumAllElements = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) return "invalid input";
  let sum = 0;

  numbers.forEach((num) => (sum += num));

  return sum;
};

console.log(sumAllElements([1, 2, 3, 4, 5]));
console.log(sumAllElements([4, -1, 5, -2, 7, 3]));
console.log(sumAllElements([1, 9, 7, 2, 8, 3]));
console.log(sumAllElements([-6, -9, -7, -5, -8, -3]));
export default sumAllElements;
