/*

5. Write a function to find the largest element in an array
Description: Given an array of numbers, return the largest value.
Example:
Input:
[2, 8, 5, 3, 9]
Output:
9

*/

import findLargestNumber from "./question-5.js";

describe("Write a function to find the largest element in an array", () => {
  test("should return 9 for array elements [2, 8, 5, 3, 9]", () => {
    const largest = findLargestNumber([2, 8, 5, 3, 9]);
    expect(largest).toBe(9);
  });
  test("should return an error message with empty array elements", () => {
    const largest = findLargestNumber([]);
    expect(largest).toBe("invalid input");
  });
  test("should return an error message for invalid input", () => {
    const largest = findLargestNumber("ads");
    expect(largest).toBe("invalid input");
  });
  test("should return an error message for none-array element input", () => {
    const largest = findLargestNumber(543);
    expect(largest).toBe("invalid input");
  });
});
