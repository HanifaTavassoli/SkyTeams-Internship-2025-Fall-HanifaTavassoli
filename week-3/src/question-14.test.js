/*

14. Find factorial of a number
Description: Compute N! using iterative approach.
Example:
Input:
5
Output:
120

*/

// console.log(factorialOfNumber(5));
// console.log(factorialOfNumber(3));
// console.log(factorialOfNumber(2));
// console.log(factorialOfNumber(1));
// console.log(factorialOfNumber(0));
// console.log(factorialOfNumber(-5));

import factorialOfNumber from "./question-14";

describe("factorial of a number: Computing N! using iterative approach", () => {
  test("should return 120 for 5 input", () => {
    const result = factorialOfNumber(5);
    expect(result).toBe(120);
  });

  test("should return 2 for 2 input", () => {
    const result = factorialOfNumber(2);
    expect(result).toBe(2);
  });
  test("should return 1 for 1 input", () => {
    const result = factorialOfNumber(1);
    expect(result).toBe(1);
  });
  test("should return 1 for 0 input", () => {
    const result = factorialOfNumber(0);
    expect(result).toBe(1);
  });
  test("should return error message for -5 input", () => {
    const result = factorialOfNumber(-5);
    expect(result).toBe("Invalid Input");
  });
  test("should return error message for '' string input", () => {
    const result = factorialOfNumber("");
    expect(result).toBe("Invalid Input");
  });
});
