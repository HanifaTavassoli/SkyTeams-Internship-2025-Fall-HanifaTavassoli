/*

26. Convert Decimal to Binary
Description: Convert a decimal number to its binary representation.
Example:
Input:
10
Output:
1010

*/

const convertDecimalToBinary = (num) => {
  if (typeof num !== "number" || num < 0) return "Invalid input";

  if (num === 0) return "0";

  let number = num;
  let binary = "";

  while (number > 0) {
    binary = (number % 2) + binary;
    number = Math.floor(number / 2);
  }

  return binary;
};

console.log(convertDecimalToBinary(100));
console.log(convertDecimalToBinary(10));
console.log(convertDecimalToBinary(0));
console.log(convertDecimalToBinary("abc"));
console.log(convertDecimalToBinary(1));
export default convertDecimalToBinary;
