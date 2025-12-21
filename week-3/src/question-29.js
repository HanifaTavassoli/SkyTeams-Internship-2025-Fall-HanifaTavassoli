/*

29. Check if Two Arrays Are Equal
Description: Compare two arrays and determine if they contain the same elements in the same 
order.
Example:
Input:
[1, 2, 3], [1, 2, 3]
Output:
Equal

*/

const areArraysEqual = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Invalid input";

  if (arr1.length !== arr2.length) return "Not Equal";

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return "Not Equal";
  }

  return "Equal";
};

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(areArraysEqual([1, 3, 2], [1, 2, 3]));
console.log(areArraysEqual([], []));
export default areArraysEqual;
