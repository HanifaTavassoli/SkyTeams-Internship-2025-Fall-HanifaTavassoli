/*

22. Collatz Sequence (Hailstone Numbers)
Description:
Take a number n.
• If n is even, divide it by 2.
• If n is odd, multiply it by 3 and add 1.
• Repeat until n = 1.
• Count the number of steps to reach 1.
Example:
Input:
6
Output:
6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 (Steps: 8)

*/

import collatzSequence from "./question-22";

describe("Collatz Sequence (Hailstone Numbers)", () => {
  test("should return '6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 (Steps: 8)' for 6 inputs", () => {
    const result = collatzSequence(6);
    expect(result).toBe("6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 (Steps: 8)");
  });
  test("should return '1 (Steps: 0)' for 1 inputs", () => {
    const result = collatzSequence(1);
    expect(result).toBe("1 (Steps: 0)");
  });
  test("should return 'Invalid input' for 0 inputs", () => {
    const result = collatzSequence(0);
    expect(result).toBe("Invalid input");
  });

  test("should return error message  for 'abc' string input", () => {
    const result = collatzSequence("abc");
    expect(result).toBe("Invalid input");
  });
});
