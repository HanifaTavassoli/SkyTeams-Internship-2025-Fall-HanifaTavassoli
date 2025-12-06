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

const gradeCalculator = (marks) => {
  let grade = "";
  if (marks >= 90 && marks <= 100) grade = "A";
  else if (marks >= 80 && marks < 90) grade = "B";
  else if (marks >= 70 && marks < 80) grade = "C";
  else if (marks >= 60 && marks < 70) grade = "D";
  else if (marks >= 0 && marks < 60) grade = "Failed";

  return grade;
};

const grade = gradeCalculator(85);
console.log(grade);

export default gradeCalculator;
