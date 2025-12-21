/*

23. Calculate Factorial Using Recursion
Description: Implement factorial(n), which calculates the factorial of n using recursion.
Example:
Input:
5
Output:
120

*/

import recursiveFactorial from "./question-23";

describe("Calculate Factorial Using Recursion", () => {
  test("should return 720 for 6 inputs", () => {
    const result = recursiveFactorial(6);
    expect(result).toBe(720);
  });
  test("should return 1 for 1 inputs", () => {
    const result = recursiveFactorial(1);
    expect(result).toBe(1);
  });
  test("should return 1 for 0 inputs", () => {
    const result = recursiveFactorial(0);
    expect(result).toBe(1);
  });

  test("should return error message  for -3 string input", () => {
    const result = recursiveFactorial(-3);
    expect(result).toBe("Invalid input");
  });
  test("should return error message  for 'abc' string input", () => {
    const result = recursiveFactorial("abc");
    expect(result).toBe("Invalid input");
  });
});
