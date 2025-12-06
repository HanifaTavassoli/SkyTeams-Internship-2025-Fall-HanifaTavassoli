/*

13. Month name & number of days using switch-case
Description: Input a month number (1–12) and display its name and number of days.
Example:
Input:
2
Output:
February, 28 or 29 days

Author: Hanifa Tavassoli

*/

import displayMonthDetails from "./question-13";

describe("Month name & number of days using switch-case", () => {
  test("should return January, 31 days for 1", () => {
    const month = displayMonthDetails(1);
    expect(month).toBe("January, 31 days");
  });
  test("should return February, 28 or 29 days for 2", () => {
    const month = displayMonthDetails(2);
    expect(month).toBe("February, 28 or 29 days");
  });
  test("should return March, 31 days for 3", () => {
    const month = displayMonthDetails(3);
    expect(month).toBe("March, 31 days");
  });
  test("should return April, 30 days for 4", () => {
    const month = displayMonthDetails(4);
    expect(month).toBe("April, 30 days");
  });
  test("should return May, 31 days for 5", () => {
    const month = displayMonthDetails(5);
    expect(month).toBe("May, 31 days");
  });
  test("should return June, 30 days for 6", () => {
    const month = displayMonthDetails(6);
    expect(month).toBe("June, 30 days");
  });
  test("should return error message for Invalid month input", () => {
    const month = displayMonthDetails(15);
    expect(month).toBe("Invalid month number, 0 days");
  });
  test("should return error message for invalid number", () => {
    const month = displayMonthDetails("15");
    expect(month).toBe("invalid month input");
  });
});
