/*

28. Remove Duplicates from an Array
Description: Remove duplicate elements efficiently from an array.
Example:
Input:
[3, 1, 3, 5, 1]
Output:
[3, 1, 5]

*/

const removeDuplicates = (arr) => {
  if (!Array.isArray(arr)) return "Invalid input";
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] === arr[i]) {
        found = true;
        break;
      }
    }
    if (!found) newArr.push(arr[i]);
  }

  return newArr;
};

console.log(removeDuplicates([3, 1, 3, 5, 1]));

export default removeDuplicates;
