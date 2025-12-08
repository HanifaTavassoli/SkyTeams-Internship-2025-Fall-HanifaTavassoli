/*
19. Reverse a number
Description: Reverse the digits of an integer.
Example:
Input:
1234
Output:
4321

Author: Hanifa Tavassoli

*/

import reverseNumber from "./question-19";

describe("Reverse the digits of an integer", () => {
  test("should return 4321 for 1234", () => {
    const result = reverseNumber(1234);
    expect(result).toBe(4321);
  });

  test("should return -765 for -567", () => {
    const result = reverseNumber(-567);
    expect(result).toBe(-765);
  });

  test("should return 1 for 1000", () => {
    const result = reverseNumber(1000);
    expect(result).toBe(1);
  });

  test("should return 0 for 0", () => {
    const result = reverseNumber(0);
    expect(result).toBe(0);
  });

  test("should return 5 for one digit number 5", () => {
    const result = reverseNumber(5);
    expect(result).toBe(5);
  });
});
