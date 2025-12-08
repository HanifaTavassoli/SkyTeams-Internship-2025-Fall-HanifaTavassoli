/*
8. Determine if a number is positive, negative, or zero
Description: Use if-else statements to categorize a number.
Example:
Input:
-3
Output:
Negative

Authore: Hanifa Tavassoli

*/

const isPositiveOrNegative = (number) => {
  let result = "";
  if (number === 0) result = "Zero";
  else if (number > 0) result = "Positive";
  else result = "Negative";

  return result;
};

const result = isPositiveOrNegative(5);
console.log(result);

console.log(isPositiveOrNegative(0));
console.log(isPositiveOrNegative(-5));

export default isPositiveOrNegative;
