/*

1. Swap two variables without using a temporary variable
Description: Write a program to swap the values of two variables (e.g., a and b) without using a 
third variable.
Example:
Input:
a = 5, b = 10
Output:
a = 10, b = 5

Author: Hanifa Tavassoli

*/

const swapNumbers = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;

  console.log(`a = ${a}, b = ${b}`);
};

swapNumbers(5, 10);

export default swapNumbers;
