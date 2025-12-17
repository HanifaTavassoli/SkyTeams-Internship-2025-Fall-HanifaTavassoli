/*

16. Fibonacci sequence
Description: Print the Fibonacci sequence up to N terms.
Example:
Input:
7
Output:
0, 1, 1, 2, 3, 5, 8

*/

import fibonacciSequence from "./question-16";

describe("Finding the Fibonacci sequence N terms", () => {
  test("should return [0, 1, 1, 2, 3, 5, 8] for 7 input", () => {
    const result = fibonacciSequence(7);
    expect(result).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });

  test("should return [] for 0 input", () => {
    const result = fibonacciSequence(0);
    expect(result).toEqual([]);
  });
  test("should return [0] for 1 input", () => {
    const result = fibonacciSequence(1);
    expect(result).toEqual([0]);
  });
  test("should return [0,1] for 2 input", () => {
    const result = fibonacciSequence(2);
    expect(result).toEqual([0, 1]);
  });
  test("should return error message for -5 input", () => {
    const result = fibonacciSequence(-5);
    expect(result).toEqual("Invalid Input");
  });
  test("should return error message for '' string input", () => {
    const result = fibonacciSequence("");
    expect(result).toEqual("Invalid Input");
  });
});
