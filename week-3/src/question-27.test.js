/*

27. Find Unique Elements in an Array
Description: Return an array with only unique elements from the input array.
Example:
Input:
[1, 2, 2, 3, 4, 4, 5]
Output:
[1, 2, 3, 4, 5]

*/

import findUniqueElement from "./question-27";

describe("Remove Duplicates from an Array", () => {
  test("should return [1, 2, 3, 4, 5] for ([1, 2, 2, 3, 4, 4, 5]) input", () => {
    const result = findUniqueElement([1, 2, 2, 3, 4, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  test("should return [5, 6, 7, 9, 10] for ([5, 6, 7, 9, 10]) input", () => {
    const result = findUniqueElement([5, 6, 7, 9, 10]);
    expect(result).toEqual([5, 6, 7, 9, 10]);
  });
  test("should return [3] for ([3, 3, 3, 3, 3]) inputs", () => {
    const result = findUniqueElement([3, 3, 3, 3, 3]);
    expect(result).toEqual([3]);
  });
  test("should return [5] for ([5]) inputs", () => {
    const result = findUniqueElement([5]);
    expect(result).toEqual([5]);
  });
  test("should return [] for ([]) input", () => {
    const result = findUniqueElement([]);
    expect(result).toEqual([]);
  });
  test("should handle negative numbers and zero", () => {
    const result = findUniqueElement([0, -1, -1, 2, 0]);
    expect(result).toEqual([0, -1, 2]);
  });
  test("should return error message  for ('abc') string input", () => {
    const result = findUniqueElement("abc");
    expect(result).toBe("Invalid input");
  });
});
