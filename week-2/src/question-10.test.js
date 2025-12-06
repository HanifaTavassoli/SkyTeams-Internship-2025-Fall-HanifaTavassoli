/*

10. Leap Year Checker
Description: Determine if a given year is a leap year.
Rule: Year divisible by 4 → leap year, except centuries not divisible by 400.
Example:
Input:
2000
Output:
Leap year
Input:
1900
Output:
Not leap year

Author: Hanifa Tavassoli

*/

import leapYearChecker from "./question-10";

describe("Determine if a given year is a leap year", () => {
  test("should check leap years and non-leap years", () => {
    const year = leapYearChecker(2000);
    expect(year).toBe("leap year");
  });

  test("should check leap years that is divisible by 400", () => {
    const year = leapYearChecker(2400);
    expect(year).toBe("leap year");
  });
  test("should check leap years that is divisible by 4", () => {
    const year = leapYearChecker(2012);
    expect(year).toBe("leap year");
  });
  test("should check Non-leap years that is divisible by 100", () => {
    const year = leapYearChecker(2100);
    expect(year).toBe("Not leap year");
  });
});
