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

import checkPalindromeNumber from "./question-12";

describe("Check for palindrome number", () => {
  test("should return 'Palindrome' for 121 input", () => {
    const result = checkPalindromeNumber(121);
    expect(result).toEqual("Palindrome");
  });
  test("should return 'Not Palindrome' for 123 input", () => {
    const result = checkPalindromeNumber(123);
    expect(result).toEqual("Not Palindrome");
  });
  test("should return 'Palindrome' for 3 input", () => {
    const result = checkPalindromeNumber(3);
    expect(result).toEqual("Palindrome");
  });
  test("should return 'Palindrome' for 0 input", () => {
    const result = checkPalindromeNumber(0);
    expect(result).toEqual("Palindrome");
  });
  test("should return 'Not Palindrome' for -121 input", () => {
    const result = checkPalindromeNumber(-121);
    expect(result).toEqual("Not Palindrome");
  });
  test("should return error message for '121' string input", () => {
    const result = checkPalindromeNumber("121");
    expect(result).toEqual("Invalid Input");
  });
  test("should return error message  for 12.1 input", () => {
    const result = checkPalindromeNumber(12.1);
    expect(result).toEqual("Invalid Input");
  });
  test("should return error message  for 'abc' input", () => {
    const result = checkPalindromeNumber("abc");
    expect(result).toEqual("Invalid Input");
  });
});
