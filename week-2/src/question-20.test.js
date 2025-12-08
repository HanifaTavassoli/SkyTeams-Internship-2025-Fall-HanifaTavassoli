/*

20. Count digits in a number
Description: Find how many digits are in a number.
Example:
Input:
786
Output:
3

Author:Hanifa Tavassoli

*/

import countDigits from "./question-20";

describe("Calculate the sum of all digits of a number", () => {
  test("should return 4 for 415", () => {
    const result = countDigits(415);
    expect(result).toBe(3);
  });
  test("should return 4 for -415", () => {
    const result = countDigits(-415);
    expect(result).toBe(3);
  });
  test("should return 1 for just one digit", () => {
    const result = countDigits(5);
    expect(result).toBe(1);
  });
  test("should return 1 for 0 input", () => {
    const result = countDigits(0);
    expect(result).toBe(1);
  });
});
