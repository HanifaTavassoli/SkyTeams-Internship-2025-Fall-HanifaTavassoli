/*

25. Find LCM of two numbers
Description: Compute least common multiple using the relationship: LCM(a, b) = (a × b) / 
GCD(a, b)
Example:
Input:
12, 18`
Output:
36

*/

import findLCM from "./question-25";

describe("Finding LCM of two numbers", () => {
  test("should return 36 for 12, 18 numbers", () => {
    const result = findLCM(12, 18);
    expect(result).toBe(36);
  });
  test("should return 0 for 0, 0 numbers", () => {
    const result = findLCM(0, 0);
    expect(result).toBe(0);
  });
  test("should return 15 when one of number is 0", () => {
    const result = findLCM(0, 15);
    expect(result).toBe(15);
  });
  test("should return positive number when one of number is negative", () => {
    const result = findLCM(12, -18);
    expect(result).toBe(36);
  });
  test("should return positive number when numbers are negative", () => {
    const result = findLCM(-12, -18);
    expect(result).toBe(36);
  });
});
