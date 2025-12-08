/*

22. Print even numbers in a range
Description: Input start and end values, print all even numbers between them.
Example:
Input:
1, 10
Output:
2, 4, 6, 8, 10

 Author: Hanifa Tavassoli

*/

import printEvenNumbers from "./question-22";

describe("Print even numbers in a range", () => {
  test("should return an array for 20, 30 inputs", () => {
    const result = printEvenNumbers(20, 30);
    expect(result).toEqual([20, 22, 24, 26, 28, 30]);
  });
  test("should return 0 when both numbers are 0", () => {
    const result = printEvenNumbers(0, 0);
    expect(result).toEqual([0]);
  });
  test("should return an array when one of number is negative", () => {
    const result = printEvenNumbers(10, -10);
    expect(result).toEqual([-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]);
  });
  test("should return an array for negative numbers", () => {
    const result = printEvenNumbers(-20, -30);
    expect(result).toEqual([-30, -28, -26, -24, -22, -20]);
  });
});
