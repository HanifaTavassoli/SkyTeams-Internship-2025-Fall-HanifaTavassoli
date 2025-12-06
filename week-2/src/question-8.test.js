/*
8. Determine if a number is positive, negative, or zero
Description: Use if-else statements to categorize a number.
Example:
Input:
-3
Output:
Negative

Authore: Hanifa Tavassoli

*/

import isPositiveOrNegative from "./question-8";

describe("Determine if a number is positive, negative, or zero", () => {
  test("should return Zero for zero", () => {
    const result = isPositiveOrNegative(0);
    expect(result).toBe("Zero");
  });
  test("should return Positive for positive numbers", () => {
    const result = isPositiveOrNegative(8);
    expect(result).toBe("Positive");
  });
  test("should return Negative for negative numbers", () => {
    const result = isPositiveOrNegative(-4);
    expect(result).toBe("Negative");
  });
});
