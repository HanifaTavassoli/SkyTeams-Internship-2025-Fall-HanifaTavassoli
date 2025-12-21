/*

11. Generate all prime numbers up to N
Description: List all prime numbers up to a given limit using a loop.
Example:
Input:
10
Output:
2, 3, 5, 7

*/

import generatePrimeNumbers from "./question-11";

describe(" Generate all prime numbers up to N", () => {
  test("should return '[ 2,  3,  5, 7, 11, 13, 17]' for 17 input", () => {
    const result = generatePrimeNumbers(17);
    expect(result).toEqual([2, 3, 5, 7, 11, 13, 17]);
  });
  test("should return '[ 2, 3, 5, 7 ]' for 10 input", () => {
    const result = generatePrimeNumbers(10);
    expect(result).toEqual([2, 3, 5, 7]);
  });
  test("should return '[ 2, 3 ]' for 3 input", () => {
    const result = generatePrimeNumbers(3);
    expect(result).toEqual([2, 3]);
  });
  test("should return []  for 0 input", () => {
    const result = generatePrimeNumbers(0);
    expect(result).toEqual([]);
  });
  test("should return []  for 1 input", () => {
    const result = generatePrimeNumbers(1);
    expect(result).toEqual([]);
  });
  test("should return []  for -5 input", () => {
    const result = generatePrimeNumbers(1);
    expect(result).toEqual([]);
  });
});
