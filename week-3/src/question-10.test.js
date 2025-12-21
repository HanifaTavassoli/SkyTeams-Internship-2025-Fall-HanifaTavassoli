/*

10. Check whether a number is prime
Description: Determine if a number is divisible only by 1 and itself.
Example:
Input:
17
Output:
Prime
Input:
20
Output:
Not Prime

*/

import isPrimeNumber from "./question-10";

describe("Check whether a number is prime", () => {
  test("should return 'Prime' for 13 input", () => {
    const result = isPrimeNumber(13);
    expect(result).toBe("Prime");
  });
  test("should return 'Not Prime' for 10 input", () => {
    const result = isPrimeNumber(10);
    expect(result).toBe("Not Prime");
  });
  test("should return 'Not Prime' for -5 input", () => {
    const result = isPrimeNumber(-5);
    expect(result).toBe("Not Prime");
  });
  test("should return 'Not Prime' for 0 input", () => {
    const result = isPrimeNumber(0);
    expect(result).toBe("Not Prime");
  });
  test("should return 'Not Prime' for 1 input", () => {
    const result = isPrimeNumber(1);
    expect(result).toBe("Not Prime");
  });
  test("should return error message for 'ABC' input", () => {
    const result = isPrimeNumber("ABC");
    expect(result).toBe("Invalid Input");
  });
});
