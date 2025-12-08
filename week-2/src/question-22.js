/*

22. Print even numbers in a range
Description: Input start and end values, print all even numbers between them.
Example:
Input:
1, 10
Output:
2, 4, 6, 8, 10

 Author: Hanifa Tavassoli

*/

const printEvenNumbers = (start, end) => {
  let evenNumbers = [];

  if (start > end) [start, end] = [end, start];

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) evenNumbers.push(i);
  }

  return evenNumbers;
};

console.log(printEvenNumbers(20, 30));

export default printEvenNumbers;
