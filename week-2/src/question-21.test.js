/*

21. Sum of digits
Description: Calculate the sum of all digits of a number.
Example:
Input:
123
Output:
6

 Author: Hanifa Tavassoli

*/

import sumDigits from "./question-21";

describe("Calculate the sum of all digits of a number", () => {
  test("should return 10 for 415", () => {
    const result = sumDigits(415);
    expect(result).toBe(10);
  });
  test("should return 10 for -415", () => {
    const result = sumDigits(-415);
    expect(result).toBe(10);
  });
  test("should return the number just for one digit", () => {
    const result = sumDigits(5);
    expect(result).toBe(5);
  });
  test("should return 0 for 0", () => {
    const result = sumDigits(0);
    expect(result).toBe(0);
  });
});
