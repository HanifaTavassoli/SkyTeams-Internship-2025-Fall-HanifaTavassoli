/*
17. Sum of first N natural numbers
Description: Calculate and print the sum using a loop.
Example:
Input:
5
Output:
15

 Author: Hanifa Tavassoli

*/

import sumNumbers from "./question-17";

describe(" Sum of first N natural numbers", () => {
  test("should return 15 for the first 5 numbers", () => {
    console.log = jest.fn();
    sumNumbers(5);

    expect(console.log).toHaveBeenCalledWith(15);
  });

  test("should return 55 for the first 10 numbers", () => {
    console.log = jest.fn();
    sumNumbers(10);

    expect(console.log).toHaveBeenCalledWith(55);
  });

  test("should return 0 for the Zero input", () => {
    console.log = jest.fn();
    sumNumbers(0);

    expect(console.log).toHaveBeenCalledWith(0);
  });

  test("should return 0 for the negative numbers", () => {
    console.log = jest.fn();
    sumNumbers(-5);

    expect(console.log).toHaveBeenCalledWith(0);
  });
});
