/*

27. Find Unique Elements in an Array
Description: Return an array with only unique elements from the input array.
Example:
Input:
[1, 2, 2, 3, 4, 4, 5]
Output:
[1, 2, 3, 4, 5]

*/

const findUniqueElement = (numbers) => {
  if (!Array.isArray(numbers)) return "Invalid input";

  let uniqueNums = [];

  for (let i = 0; i < numbers.length; i++) {
    let isExist = false;
    for (let j = 0; j < uniqueNums.length; j++) {
      if (numbers[i] === uniqueNums[j]) {
        isExist = true;
        break;
      }
    }
    if (!isExist) uniqueNums.push(numbers[i]);
  }

  return uniqueNums;
};

console.log(findUniqueElement([1, 2, 2, 3, 4, 4, 5]));
console.log(findUniqueElement([2, 2, 2]));
console.log(findUniqueElement([2, 2, 1, 2]));

export default findUniqueElement;
