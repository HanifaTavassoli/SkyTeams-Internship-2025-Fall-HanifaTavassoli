/*
7. Check whether a number is even or odd
Description: Determine if a number is divisible by 2.
Example:
Input:
7
Output:
Odd

 Authore: Hanifa Tavassoli

*/
import checkEvenOdd from "./question-7";

describe("Check whether a number is even or odd", () => {
  test("should return Even for even numbers", () => {
    const result = checkEvenOdd(4);
    expect(result).toBe("Even");
  });
  test("should return Odd for odd numbers", () => {
    const result = checkEvenOdd(9);
    expect(result).toBe("Odd");
  });
  test("should return Even for zero input", () => {
    const result = checkEvenOdd(0);
    expect(result).toBe("Even");
  });
  test("should return Even for negative even numbers", () => {
    const result = checkEvenOdd(-4);
    expect(result).toBe("Even");
  });
  test("should return Odd for negative odd numbers", () => {
    const result = checkEvenOdd(-5);
    expect(result).toBe("Odd");
  });
});
