/*
2. Find the largest and smallest of three numbers
Description: Read three integers and print the largest and smallest.
Example:
Input:
3, 9, 5
Output:
Largest: 9, Smallest: 3

Author: Hanifa Tavassoli

*/

const findLargestAndSmallest = (number1, number2, number3) => {
  let smallest = number1;
  let largest = number2;

  // smallest
  if (number2 <= smallest) smallest = number2;
  if (number3 <= smallest) smallest = number3;

  // largest
  if (number1 >= largest) largest = number1;
  if (number3 >= largest) largest = number3;

  console.log(`Largest: ${largest}, Smallest: ${smallest}`);
};

findLargestAndSmallest(3, 9, 5);
findLargestAndSmallest(6, 1, 5);
findLargestAndSmallest(3, 5, 0);

export default findLargestAndSmallest;
