/*

13. Power of a number (without built-in function)
Description: Compute a^b using repeated multiplication.
Example:
Input:
2, 5
Output:
32

*/

const powerOfNumber = (a, b) => {
  if (isNaN(a) || isNaN(b) || typeof a !== "number" || typeof b !== "number")
    return "Invalid Input";

  if (b === 0) return 1;

  let result = 1;
  const exponent = Math.abs(b);

  for (let i = 0; i < exponent; i++) {
    result *= a;
  }

  return b > 0 ? result : 1 / result;
};

// console.log(powerOfNumber(2, 5));
// console.log(powerOfNumber(2, -5));
// console.log(powerOfNumber(2, 0));
// console.log(powerOfNumber(2, "4"));
// console.log(powerOfNumber(-2, 3));

export default powerOfNumber;
