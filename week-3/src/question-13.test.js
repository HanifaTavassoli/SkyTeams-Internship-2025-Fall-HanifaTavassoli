/*

13. Power of a number (without built-in function)
Description: Compute a^b using repeated multiplication.
Example:
Input:
2, 5
Output:
32

*/

// console.log(powerOfNumber(2, 5));
// console.log(powerOfNumber(2, -5));
// console.log(powerOfNumber(2, 0));
// console.log(powerOfNumber(2, "4"));

import powerOfNumber from "./question-13";

describe("Power of a number (without built-in function)", () => {
  test("should return 32 for (2,5) input", () => {
    const result = powerOfNumber(2, 5);
    expect(result).toBe(32);
  });
  test("should return 0.03125 for (2, -5) input", () => {
    const result = powerOfNumber(2, -5);
    expect(result).toBe(0.03125);
  });
  test("should return -8 for (-2, 3) input", () => {
    const result = powerOfNumber(-2, 3);
    expect(result).toBe(-8);
  });
  test("should return 0 for (0 , 5) input", () => {
    const result = powerOfNumber(0, 5);
    expect(result).toBe(0);
  });
  test("should return 1 for (2, 0) input", () => {
    const result = powerOfNumber(2, 0);
    expect(result).toBe(1);
  });
  test("should return error message for ('', 5) string input", () => {
    const result = powerOfNumber("", 5);
    expect(result).toBe("Invalid Input");
  });
});
