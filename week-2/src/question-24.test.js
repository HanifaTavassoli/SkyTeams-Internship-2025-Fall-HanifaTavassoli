/*

24. Find GCD of two nums
Description: Compute the greatest common divisor using repeated subtraction or the Euclidean 
algorithm.
Example:
Input:
12, 18
Output:
6

Author: Hanifa Tavassoli

*/

import findGCD from "./question-24";

describe("Find GCD of two numbers", () => {
  test("should return 6 for 12, 18 numbers", () => {
    const result = findGCD(12, 18);
    expect(result).toBe(6);
  });
  test("should return 0 for 0, 0 numbers", () => {
    const result = findGCD(0, 0);
    expect(result).toBe(0);
  });
  test("should return number when one of number is 0", () => {
    const result = findGCD(0, 15);
    expect(result).toBe(15);
    expect(findGCD(12, 0)).toBe(12);
  });
  test("should return positive number when one of number is negative", () => {
    const result = findGCD(12, -18);
    expect(result).toBe(6);
  });
  test("should return positive number when numbers are negative", () => {
    const result = findGCD(-12, -18);
    expect(result).toBe(6);
  });
});
