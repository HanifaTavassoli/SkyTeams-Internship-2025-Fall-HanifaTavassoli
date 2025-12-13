/*

4. Display all factors of a number
Description: Print all numbers that divide the given number exactly.
Example:
Input:
12
Output:
1, 2, 3, 4, 6, 12

*/

import factorsOfNumber from "./question-4.js";

describe("Display all factors of a number", () => {
  test("should return [1, 2, 3, 4, 6, 12] for 12", () => {
    const factors = factorsOfNumber(12);
    expect(factors).toEqual([1, 2, 3, 4, 6, 12]);
  });
  test("should return [ 1, 2, 3, 6, 9, 18 ] for -18", () => {
    const factors = factorsOfNumber(-18);
    expect(factors).toEqual([1, 2, 3, 6, 9, 18]);
  });
  test("should return an error message for invalid input", () => {
    const factors = factorsOfNumber("ads");
    expect(factors).toEqual("the input is not a number");
  });
  test("should return an error message for 0", () => {
    const factors = factorsOfNumber(0);
    expect(factors).toEqual("cannot find factors for zero");
  });
});
