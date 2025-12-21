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

const BMICalculator = (weight, height) => {
  if (
    weight <= 0 ||
    height <= 0 ||
    typeof weight !== "number" ||
    typeof height !== "number"
  )
    return "Invalid input";
  let BMI = weight / (height * height);

  BMI = Number(BMI.toFixed(2));

  let result = "";
  if (BMI < 18.5) result = `BMI = ${BMI} (Under weight)`;
  else if (BMI >= 18.5 && BMI < 25) result = `BMI = ${BMI} (Normal weight)`;
  else if (BMI >= 25 && BMI < 30) result = `BMI = ${BMI} (Over weight)`;
  else if (BMI >= 30) result = `BMI = ${BMI} (Obese weight)`;

  return result;
};

console.log(BMICalculator(70, 1.75));
console.log(BMICalculator(50, 1.8));
console.log(BMICalculator(0, 1.75));
console.log(BMICalculator(85, 1.75));
console.log(BMICalculator(110, 1.8));

console.log(BMICalculator(0, 1.75));
console.log(BMICalculator(-70, 1.75));
console.log(BMICalculator(70, 0));
console.log(BMICalculator("70", 1.75));

export default BMICalculator;
