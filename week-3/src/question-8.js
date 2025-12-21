/*

8. Write a function to check if an array contains a specific element
Description: Determine if a given element exists in the array.
Example:
Input:
Array = [3, 6, 9, 12], Element = 6
Output:
Found

*/

const checkElementOfArray = (arr, element) => {
  if (!Array.isArray(arr)) return "Invalid Input";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) return "Found";
  }

  return "Not Found";
};

console.log(checkElementOfArray([3, 6, 9, 12], 6));
console.log(checkElementOfArray([], 5));
console.log(checkElementOfArray("", 1));
console.log(checkElementOfArray([3, 6, 9, 12], "abc"));
export default checkElementOfArray;
