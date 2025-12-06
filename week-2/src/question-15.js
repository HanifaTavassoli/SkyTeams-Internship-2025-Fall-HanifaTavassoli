/*
15. Triangle validity and type
Description: Given three sides, determine if they form a valid triangle and if it’s equilateral, 
isosceles, or scalene.
Rule: Sum of any two sides > third side.
Example:
Input:
3, 4, 5
Output:
Valid triangle, Scalene

Author: Hanifa Tavassoli

*/

const determineTriangle = (a, b, c) => {
  let result = "";

  if (a <= 0 || b <= 0 || c <= 0) return "Invalid input";

  const isValid = a + b > c && a + c > b && b + c > a;

  if (isValid) {
    result = "Valid triangle, ";

    if (a === b && b === c) result += "Equilateral";
    else if (a === b || a === c || b === c) result += "Isosceles";
    else result += "Scalene";
  } else {
    result = "Invalid triangle";
  }

  return result;
};

console.log(determineTriangle(3, 4, 5));
console.log(determineTriangle(3, 3, 3));
console.log(determineTriangle(8, 5, 5));
console.log(determineTriangle(3, 2, 1));

export default determineTriangle;
