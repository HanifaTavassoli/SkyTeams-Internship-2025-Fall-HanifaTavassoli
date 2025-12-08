/*
18. Multiplication table of a number
Description: Print the multiplication table for a given number (up to 10 or N).
Example:
Input:
5
Output:
5 × 1 = 5
5 × 2 = 10
…
5 × 10 = 50

Author: Hanifa Tavassoli

*/

const multiplicationTable = (number) => {
  let multiply = 1;
  for (let i = 1; i <= 10; i++) {
    multiply = i * number;
    console.log(`${number} x ${i} = ${multiply}`);
  }
};

multiplicationTable(5);

export default multiplicationTable;
