/*

16. Print numbers from 1 to 100
Description: Use a loop to print numbers sequentially.
Example:
Output:
1, 2, 3, …, 100

Author: Hanifa Tavassoli

*/

const printNumbers = () => {
  let numbers = "";
  for (let i = 1; i <= 100; i++) {
    numbers += i !== 100 ? i + ", " : i;
  }

  console.log(numbers);
};

printNumbers();

export default printNumbers;
