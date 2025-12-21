/*

29. Check if Two Arrays Are Equal
Description: Compare two arrays and determine if they contain the same elements in the same 
order.
Example:
Input:
[1, 2, 3], [1, 2, 3]
Output:
Equal

*/

import areArraysEqual from "./question-29";

describe("Check if Two Arrays Are Equal", () => {
  test("should return 'Equal' for ([1, 2, 3], [1, 2, 3]) inputs", () => {
    const result = areArraysEqual([1, 2, 3], [1, 2, 3]);
    expect(result).toBe("Equal");
  });
  test("should return 'Not Equal' for ([1, 3, 2], [1, 2, 3]) inputs", () => {
    const result = areArraysEqual([6, 4, 5], [1, 2, 3]);
    expect(result).toBe("Not Equal");
  });
  test("should return 'Not Equal' for ([1, 2], [1, 2, 3]) inputs", () => {
    const result = areArraysEqual([1, 2], [1, 2, 3]);
    expect(result).toBe("Not Equal");
  });
  test("should return 'Not Equal' for ([], [1, 2, 3]) inputs", () => {
    const result = areArraysEqual([], [1, 2, 3]);
    expect(result).toBe("Not Equal");
  });
  test("should return 'Equal' for ([],[]) inputs", () => {
    const result = areArraysEqual([], []);
    expect(result).toBe("Equal");
  });
  test("should return error message  for ('abc',[1,2]) string input", () => {
    const result = areArraysEqual("abc", [1, 2]);
    expect(result).toBe("Invalid input");
  });
});
