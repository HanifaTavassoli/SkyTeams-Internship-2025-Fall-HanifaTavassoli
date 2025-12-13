/*

7. Write a function to find the sum of all elements in an array
Description: Calculate the total sum of all array elements.
Example:
Input:
[1, 2, 3, 4, 5]
Output:
15

*/

import sumAllElements from "./question-7";

describe("Write a function to find the sum of all elements in an array", () => {
  test("should return 30 for [1, 9, 7, 2, 8, 3] input", () => {
    const result = sumAllElements([1, 9, 7, 2, 8, 3]);
    expect(result).toBe(30);
  });
  test("should return -38 for [-6,-9,-7,-5,-8,-3] input", () => {
    const result = sumAllElements([-6, -9, -7, -5, -8, -3]);
    expect(result).toBe(-38);
  });
  test("should return 16 for [4,-1,5,-2,7,3] input", () => {
    const result = sumAllElements([4, -1, 5, -2, 7, 3]);
    expect(result).toBe(16);
  });
  test("should return error message for [] input", () => {
    const result = sumAllElements([]);
    expect(result).toBe("invalid input");
  });
  test("should return error message for 'ABC' input", () => {
    const result = sumAllElements("ABC");
    expect(result).toBe("invalid input");
  });
});
