/*
9. Grade Calculator (0–100 → A–F)
Description: Input a student’s marks (0–100) and print the grade based on a scale.
Example:
Input:
85
Output:
B

Author: Hanifa Tavassoli

*/

import gradeCalculator from "./question-9";

describe("student’s marks (0–100) and print the grade based on a scale", () => {
  test("should work with grade based on a scale", () => {
    const grade = gradeCalculator(85);
    expect(grade).toBe("B");
  });

  test("should return 'Failed' with grade less than 60", () => {
    const grade = gradeCalculator(55);
    expect(grade).toBe("Failed");
  });
  test("should return 'Failed' with grade equal to 0", () => {
    const grade = gradeCalculator(0);
    expect(grade).toBe("Failed");
  });

  test('gradeCalculator should return "" with negative input', () => {
    expect(gradeCalculator(-5)).toBe("");
  });

  test('should return "" with input great than 100', () => {
    const grade = gradeCalculator(101);
    expect(grade).toBe("");
  });
});
