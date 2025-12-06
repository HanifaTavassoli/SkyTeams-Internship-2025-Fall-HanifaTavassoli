/*
7. Check whether a number is even or odd
Description: Determine if a number is divisible by 2.
Example:
Input:
7
Output:
Odd

 Authore: Hanifa Tavassoli

*/

const checkEvenOdd = (number) => {
  let result = "";
  if (number % 2 === 0) result = "Even";
  else result = "Odd";

  return result;
};

const result = checkEvenOdd(5);
console.log(result);

console.log(checkEvenOdd(-3));
console.log(checkEvenOdd(0));

export default checkEvenOdd;
