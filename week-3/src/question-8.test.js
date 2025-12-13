/*

8. Write a function to check if an array contains a specific element
Description: Determine if a given element exists in the array.
Example:
Input:
Array = [3, 6, 9, 12], Element = 6
Output:
Found

*/

import checkElementOfArray from "./question-8";

describe("Write a function to check if an array contains a specific element", () => {
  test("should return 'Found' for ([6, 9, 7, 5, 8, 3], 8) input", () => {
    const result = checkElementOfArray([6, 9, 7, 5, 8, 3], 8);
    expect(result).toBe("Found");
  });
  test("should return 'Not Found' for ([-6, -7, -8, -5, -3], 5) input", () => {
    const result = checkElementOfArray([-6, -7, -8, -5, -3], 5);
    expect(result).toBe("Not Found");
  });
  test("should return 'Not Found' for ([], 3) input", () => {
    const result = checkElementOfArray([], 3);
    expect(result).toBe("Not Found");
  });
  test("should return error message for ('', 5) input", () => {
    const result = checkElementOfArray("", 5);
    expect(result).toBe("Invalid Input");
  });
  test("should return 'Not Found' for ([3, 6, 9, 12], 'ABC') input", () => {
    const result = checkElementOfArray([3, 6, 9, 12], "ABC");
    expect(result).toBe("Not Found");
  });
});
