/*

6. Write a function to find the smallest element in an array
Description: Find and return the smallest number in an array.
Example:
Input:
[4, 7, 1, 9, 2]
Output:
1

*/

import findSmallestNumber from "./question-6";

describe("Write a function to find the smallest element in an array", () => {
  test("should return 3 for [6,9,7,5,8,3] input", () => {
    const smallestNum = findSmallestNumber([6, 9, 7, 5, 8, 3]);
    expect(smallestNum).toBe(3);
  });
  test("should return -9 for [-6,-9,-7,-5,-8,-3] input", () => {
    const smallestNum = findSmallestNumber([-6, -9, -7, -5, -8, -3]);
    expect(smallestNum).toBe(-9);
  });
  test("should return -2 for [4,-1,5,-2,7,3] input", () => {
    const smallestNum = findSmallestNumber([4, -1, 5, -2, 7, 3]);
    expect(smallestNum).toBe(-2);
  });
  test("should return error message for [] input", () => {
    const smallestNum = findSmallestNumber([]);
    expect(smallestNum).toBe("invalid input");
  });
  test("should return error message for 'ABC' input", () => {
    const smallestNum = findSmallestNumber("ABC");
    expect(smallestNum).toBe("invalid input");
  });
});
