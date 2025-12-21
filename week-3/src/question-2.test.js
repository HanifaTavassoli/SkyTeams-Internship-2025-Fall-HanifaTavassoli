/*

2. Reverse a number
Description: Reverse the digits of a number.
Example:
Input:
1234
Output:
4321

*/

import reverseNumber from "./question-2";

describe("everse the digits of a number", () => {
  test("should return 721 for 127", () => {
    const result = reverseNumber(127);
    expect(result).toBe(721);
  });
  test("should return 51 for 1500", () => {
    const result = reverseNumber(1500);
    expect(result).toBe(51);
  });
  test("should return the input itself for one digit input", () => {
    const result = reverseNumber(8);
    expect(result).toBe(8);
  });
  test("should return -154 for -451", () => {
    const result = reverseNumber(-451);
    expect(result).toBe(-154);
  });
  test("should return an error message for invalid input", () => {
    const result = reverseNumber("ads");
    expect(result).toBe("invalid input");
  });
  test("should return 0 for 0 input", () => {
    const result = reverseNumber(0);
    expect(result).toBe(0);
  });
});
