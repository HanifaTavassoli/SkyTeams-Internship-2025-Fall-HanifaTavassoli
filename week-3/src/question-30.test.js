/*

30. Find Missing Number in Array (1 to N)
Description: Given arr from 1 to N with one missing, find the missing number.
Example:
Input:
[1, 2, 4, 5]
Output:
3

*/

import findMissingNumber from "./question-30";

describe("Finding Missing Number in Array (1 to N)", () => {
  test("should return 3 for [1, 2, 4, 5] input", () => {
    const result = findMissingNumber([1, 2, 4, 5]);
    expect(result).toBe(3);
  });
  test("should return 1 for [2, 3, 4, 5] input", () => {
    const result = findMissingNumber([2, 3, 4, 5]);
    expect(result).toBe(1);
  });
  test("should return 5 for [1, 2, 3, 4] input", () => {
    const result = findMissingNumber([1, 2, 3, 4]);
    expect(result).toBe(5);
  });

  test("should return error message  for [] string input", () => {
    const result = findMissingNumber([]);
    expect(result).toBe("Invalid input");
  });
  test("should return error message  for 'abc' string input", () => {
    const result = findMissingNumber("abc");
    expect(result).toBe("Invalid input");
  });
});
