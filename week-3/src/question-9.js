/*

9. Write a function to count occurrences of an element in an array
Description: Count how many times a given number appears in the array.
Example:
Input:
Array = [2, 3, 2, 5, 2], Element = 2
Output:
3

*/

const countOccurrencesOfElement = (arr, element) => {
  if (!Array.isArray(arr)) return "Invalid Input";
  let count = 0;

  arr.forEach((ar) => {
    if (ar === element) count++;
  });

  return count;
};

console.log(countOccurrencesOfElement([2, 3, 2, 5, 2], 2));
console.log(countOccurrencesOfElement([], 2));
console.log(countOccurrencesOfElement([-5, 6, 8, 5, 2, 1, 5], 5));
console.log(countOccurrencesOfElement([], 5));
console.log(countOccurrencesOfElement("", 1));
console.log(countOccurrencesOfElement([3, 6, 9, 12], "abc"));

export default countOccurrencesOfElement;
