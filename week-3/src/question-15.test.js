/*

    15. Check for Armstrong number
    Description: A number is Armstrong if the sum of its digits raised to the power of the number of 
    digits equals the number itself.
    Example:
    Input:
    153
    Output:
    Armstrong
    Input:
    123
    Output:
    // Not Armstrong

*/

import checkArmstrongNumber from "./question-15";

describe("Check for Armstrong number", () => {
  test("should return 'Armstrong' for 153 input", () => {
    const result = checkArmstrongNumber(153);
    expect(result).toBe("Armstrong");
  });
  test("should return 'Not Armstrong' for 123 input", () => {
    const result = checkArmstrongNumber(223);
    expect(result).toBe("Not Armstrong");
  });
  test("should return 'Armstrong' for -153 input", () => {
    const result = checkArmstrongNumber(-153);
    expect(result).toBe("Armstrong");
  });
  test("should return 'Armstrong' for 0 input", () => {
    const result = checkArmstrongNumber(0);
    expect(result).toBe("Armstrong");
  });
  test("should return 'Armstrong' for 5 input", () => {
    const result = checkArmstrongNumber(5);
    expect(result).toBe("Armstrong");
  });
  test("should return 'Armstrong' for -7 input", () => {
    const result = checkArmstrongNumber(-7);
    expect(result).toBe("Armstrong");
  });
  test("should return 'Not Armstrong' for 99 input", () => {
    const result = checkArmstrongNumber(99);
    expect(result).toBe("Not Armstrong");
  });

  test("should return error message for 'abc' string input", () => {
    const result = checkArmstrongNumber("abc");
    expect(result).toBe("Invalid Input");
  });
});
