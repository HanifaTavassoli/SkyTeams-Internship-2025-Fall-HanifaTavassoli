/*

2. Reverse a number
Description: Reverse the digits of a number.
Example:
Input:
1234
Output:
4321

*/

const reverseNumber = (number) => {
  if (isNaN(number)) return "invalid input";

  let reversedNum = Math.abs(number).toString();
  let result = "";

  for (let i = reversedNum.length - 1; i >= 0; i--) {
    result += reversedNum[i];
  }

  result = Number(result) * (number < 0 ? -1 : 1);

  return result;
};

console.log(reverseNumber(657));
console.log(reverseNumber(-231));
console.log(reverseNumber(1300));

export default reverseNumber;
