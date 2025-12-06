/*
15. Triangle validity and type
Description: Given three sides, determine if they form a valid triangle and if it’s equilateral, 
isosceles, or scalene.
Rule: Sum of any two sides > third side.
Example:
Input:
3, 4, 5
Output:
Valid triangle, Scalene

Author: Hanifa Tavassoli

*/

import determineTriangle from "./question-15";

describe("Triangle validity and type", () => {
  test("should return result for all equal sides", () => {
    const result = determineTriangle(3, 3, 3);
    expect(result).toBe("Valid triangle, Equilateral");
  });
  test("should return result for two equal sides", () => {
    const result = determineTriangle(8, 5, 5);
    expect(result).toBe("Valid triangle, Isosceles");
  });
  test("should return result for all different sides", () => {
    const result = determineTriangle(3, 4, 5);
    expect(result).toBe("Valid triangle, Scalene");
  });
  test("should return Invalid triangle for unsatisfied triangle sides", () => {
    const result = determineTriangle(3, 2, 1);
    expect(result).toBe("Invalid triangle");
  });
  test("should return error message for negative input", () => {
    const result = determineTriangle(3, -2, 1);
    expect(result).toBe("Invalid input");
  });
  test("should return error message for zero input", () => {
    const result = determineTriangle(3, 2, 0);
    expect(result).toBe("Invalid input");
  });
});
