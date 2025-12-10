/*

3. Sum of digits of a number
Description: Calculate the sum of all digits in a given number.
Example:
Input:
12345
Output:
15

*/

import sumDigits from "./question-3";

describe("Sum of digits of a number", () => {
  test("should return 10 for 127", () => {
    const result = sumDigits(127);
    expect(result).toBe(10);
  });
  test("should return the input itself for one digit input", () => {
    const result = sumDigits(8);
    expect(result).toBe(8);
  });
  test("should return  10 for -451", () => {
    const result = sumDigits(-451);
    expect(result).toBe(10);
  });
  test("should return an error message for invalid input", () => {
    const result = sumDigits("ads");
    expect(result).toBe("the input is not a number");
  });
  test("should return 0 for 0 input", () => {
    const result = sumDigits(0);
    expect(result).toBe(0);
  });
});
