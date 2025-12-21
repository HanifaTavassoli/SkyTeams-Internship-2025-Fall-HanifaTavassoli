/*

21. Password Strength Checker
Description: A strong password must:
• Be at least 8 characters long.
• Contain at least one uppercase letter, one lowercase letter, and one number.
Example:
Input:
MyPass123
Output:
Strong
Input:
pass
Output:
Weak

*/

import passwordChecker from "./question-21";

describe("Password Strength Checker", () => {
  test("should return 'Strong' for 'MyPass123' inputs", () => {
    const result = passwordChecker("MyPass123");
    expect(result).toBe("Strong");
  });
  test("should return 'Weak' for 'MyPass' inputs", () => {
    const result = passwordChecker("MyPass");
    expect(result).toBe("Weak");
  });
  test("should return 'Weak' for 'mypass123' inputs", () => {
    const result = passwordChecker("mypass123");
    expect(result).toBe("Weak");
  });
  test("should return 'Weak' for '123' inputs", () => {
    const result = passwordChecker("123");
    expect(result).toBe("Weak");
  });
  test("should return 'Weak' for 'MYPASS123' input", () => {
    const result = passwordChecker("MYPASS123");
    expect(result).toBe("Weak");
  });

  test("should return error message  for (70175) no-string input", () => {
    const result = passwordChecker(70175);
    expect(result).toBe("Invalid input");
  });
});
