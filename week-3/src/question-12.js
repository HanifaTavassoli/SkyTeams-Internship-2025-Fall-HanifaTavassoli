/*

12. Check for palindrome number
Description: Check if a number reads the same backward and forward.
Example:
Input:
121
Output:
Palindrome
Input:
123
Output:
Not Palindrome

*/

const checkPalindromeNumber = (num) => {
  if (Number.isNaN(num) || typeof num !== "number" || !Number.isInteger(num))
    return "Invalid Input";

  if (num === 0) return "Palindrome";
  else if (num < 0) return "Not Palindrome";

  let number = num;

  let reversedNumber = 0;

  while (number > 0) {
    let remainder = number % 10;
    reversedNumber = reversedNumber * 10 + remainder;
    number = Math.floor(number / 10);
  }

  return reversedNumber === num ? "Palindrome" : "Not Palindrome";
};

console.log(checkPalindromeNumber(123));
console.log(checkPalindromeNumber(121));
console.log(checkPalindromeNumber("121"));
console.log(checkPalindromeNumber("abca"));
console.log(checkPalindromeNumber(0));

export default checkPalindromeNumber;
