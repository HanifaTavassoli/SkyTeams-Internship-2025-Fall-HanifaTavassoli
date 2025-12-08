/*
19. Reverse a number
Description: Reverse the digits of an integer.
Example:
Input:
1234
Output:
4321

Author: Hanifa Tavassoli

*/

const reverseNumber = (number) => {
  const stringNumber = Math.abs(number).toString();

  const reversedNum = stringNumber.split("").reverse().join("");

  return Number(reversedNum) * (number < 0 ? -1 : 1);
};

console.log(reverseNumber(1234));

export default reverseNumber;
