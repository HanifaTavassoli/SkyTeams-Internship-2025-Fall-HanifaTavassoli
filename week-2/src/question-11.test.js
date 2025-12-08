/*
11. Simple Calculator using switch-case
Description: Input two numbers and an operator (+, -, *, /) and compute the result.
Example:
Input:
5, 3, +
Output:
8

Author: Hanifa Tavassoli

*/

import simpleCalculator from "./question-11";

describe("Simple Calculator using switch-case", () => {
  test("should compute if the operator is (+, -, *, /)", () => {
    const result = simpleCalculator(9, 3, "/");
    expect(result).toBe(3);
  });
  test("should compute if the second input is 0", () => {
    const result = simpleCalculator(5, 0, "+");
    expect(result).toBe(5);
  });
  test("should compute if both inputs are 0", () => {
    const result = simpleCalculator(0, 0, "*");
    expect(result).toBe(0);
  });
  test("should return error message if the second input is 0 and the operator is / ", () => {
    const result = simpleCalculator(5, 0, "/");
    expect(result).toBe("Connot divide by zero");
  });
  test("should compute if one of input is negative", () => {
    const result = simpleCalculator(-3, 2, "-");
    expect(result).toBe(-5);
  });
  test("should compute if the both inputs are negatives", () => {
    const result = simpleCalculator(-2, -7, "-");
    expect(result).toBe(5);
  });
});
