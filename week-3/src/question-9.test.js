/*

9. Write a function to count occurrences of an element in an array
Description: Count how many times a given number appears in the array.
Example:
Input:
Array = [2, 3, 2, 5, 2], Element = 2
Output:
3

*/

import countOccurrencesOfElement from "./question-9";

describe("Write a function to count occurrences of an element in an array", () => {
  test("should return 2 for ([6, 9, 8, 7, 5, 8, 3], 8) input", () => {
    const result = countOccurrencesOfElement([6, 9, 8, 7, 5, 8, 3], 8);
    expect(result).toBe(2);
  });
  test("should return 1 for ([-6, 5, -7, -8, -5, -3], 5) input", () => {
    const result = countOccurrencesOfElement([-6, 5, -7, -8, -5, -3], 5);
    expect(result).toBe(1);
  });
  test("should return 0 for ([], 3) input", () => {
    const result = countOccurrencesOfElement([], 3);
    expect(result).toBe(0);
  });
  test("should return error message for ('', 5) input", () => {
    const result = countOccurrencesOfElement("", 5);
    expect(result).toBe("Invalid Input");
  });
  test("should return 0 for ([3, 6, 9, 12], 'ABC') input", () => {
    const result = countOccurrencesOfElement([3, 6, 9, 12], "ABC");
    expect(result).toBe(0);
  });
});
