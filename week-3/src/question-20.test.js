/*

20. Body Mass Index (BMI) Calculator
Description: Given weight (kg) and height (m), calculate BMI using:
BMI = weight / (height * height)
Then categorize it into:
• Underweight: BMI < 18.5
• Normal weight: 18.5 ≤ BMI < 25
• Overweight: 25 ≤ BMI < 30
• Obese: BMI ≥ 30
Example:
Input:
70, 1.75
Output:
BMI = 22.86 (Normal weight)

*/

// BMICalculator(0, 1.75);
// BMICalculator(-70, 1.75);
// BMICalculator(70, 0);
// BMICalculator("70", 1.75);
// BMICalculator(70, "1.75");

import BMICalculator from "./question-20";

describe("Body Mass Index (BMI) Calculator", () => {
  test("should return 'BMI = 22.86 (Normal weight)' for (70, 1.75) inputs", () => {
    const result = BMICalculator(70, 1.75);
    expect(result).toBe("BMI = 22.86 (Normal weight)");
  });
  test("should return 'BMI = 15.43 (Under weight)' for (50, 1.8) inputs", () => {
    const result = BMICalculator(50, 1.8);
    expect(result).toBe("BMI = 15.43 (Under weight)");
  });
  test("should return 'BMI = 27.68 (Over weight)' for (80, 1.7) inputs", () => {
    const result = BMICalculator(80, 1.7);
    expect(result).toBe("BMI = 27.68 (Over weight)");
  });
  test("should return 'BMI = 32.87 (Obese weight)' for (95, 1.7) inputs", () => {
    const result = BMICalculator(95, 1.7);
    expect(result).toBe("BMI = 32.87 (Obese weight)");
  });
  test("should return 'Invalid input' for (0, 1.75) input", () => {
    const result = BMICalculator(0, 1.75);
    expect(result).toBe("Invalid input");
  });
  test("should return error message for (-70, 1.75) input", () => {
    const result = BMICalculator(-70, 1.75);
    expect(result).toBe("Invalid input");
  });
  test("should return error message  for ('70', 1.75) string input", () => {
    const result = BMICalculator("70", 1.75);
    expect(result).toBe("Invalid input");
  });
  test("should return error message  for (70, '1.75') input", () => {
    const result = BMICalculator(70, "1.75");
    expect(result).toBe("Invalid input");
  });
});
