/*

28. Remove Duplicates from an Array
Description: Remove duplicate elements efficiently from an array.
Example:
Input:
[3, 1, 3, 5, 1]
Output:
[3, 1, 5]

*/

import removeDuplicates from "./question-28";

describe("Remove Duplicates from an Array", () => {
  test("should return [3, 1, 5] for ([3, 1, 3, 5, 1]) input", () => {
    const result = removeDuplicates([3, 1, 3, 5, 1]);
    expect(result).toEqual([3, 1, 5]);
  });
  test("should return [] for ([]) input", () => {
    const result = removeDuplicates([]);
    expect(result).toEqual([]);
  });
  test("should return [1, 2, 3, 4] for ([1, 2, 3, 4]) input", () => {
    const result = removeDuplicates([1, 2, 3, 4]);
    expect(result).toEqual([1, 2, 3, 4]);
  });
  test("should return [7] for ([7, 7, 7, 7, 7]) inputs", () => {
    const result = removeDuplicates([7, 7, 7, 7, 7]);
    expect(result).toEqual([7]);
  });
  test("should return [4] for ([4]) inputs", () => {
    const result = removeDuplicates([4]);
    expect(result).toEqual([4]);
  });
  test("should return error message  for ('abc') string input", () => {
    const result = removeDuplicates("abc");
    expect(result).toBe("Invalid input");
  });
});
