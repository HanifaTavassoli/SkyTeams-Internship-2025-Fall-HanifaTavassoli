/*

26. Convert Decimal to Binary
Description: Convert a decimal number to its binary representation.
Example:
Input:
10
Output:
1010

*/

import convertDecimalToBinary from "./question-26";

describe("Convert Decimal to Binary", () => {
  test("should return 1010 for 10 input", () => {
    const result = convertDecimalToBinary(10);
    expect(result).toBe("1010");
  });
  test("should return 1100100 for 100 input", () => {
    const result = convertDecimalToBinary(100);
    expect(result).toBe("1100100");
  });
  test("should return 101 for 5 input", () => {
    const result = convertDecimalToBinary(5);
    expect(result).toBe("101");
  });
  test("should return 1 for 1 input", () => {
    const result = convertDecimalToBinary(1);
    expect(result).toBe("1");
  });
  test("should return 0 for 0 input", () => {
    const result = convertDecimalToBinary(0);
    expect(result).toBe("0");
  });
  test("should return error message for -1 input", () => {
    const result = convertDecimalToBinary(-1);
    expect(result).toBe("Invalid input");
  });

  test("should return error message  for 'abc' string input", () => {
    const result = convertDecimalToBinary("abc");
    expect(result).toBe("Invalid input");
  });
});
