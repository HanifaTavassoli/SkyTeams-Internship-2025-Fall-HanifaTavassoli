/*

1. Swap two variables without using a temporary variable
Description: Write a program to swap the values of two variables (e.g., a and b) without using a 
third variable.
Example:
Input:
a = 5, b = 10
Output:
a = 10, b = 5

Author: Hanifa Tavassoli

*/

import swapNumbers from "./question-1";

beforeEach(() => {
  console.log = jest.fn();
});

test("should swap positive numbers (5, 10)", () => {
  swapNumbers(5, 10);
  expect(console.log).toHaveBeenCalledWith("a = 10, b = 5");
});

test("should swap negative numbers (-3, -8)", () => {
  swapNumbers(-3, -8);
  expect(console.log).toHaveBeenCalledWith("a = -8, b = -3");
});

test("should swap equal numbers (5, 5)", () => {
  swapNumbers(5, 5);
  expect(console.log).toHaveBeenCalledWith("a = 5, b = 5");
});

test("should swap numbers when both are zero (0, 0)", () => {
  swapNumbers(0, 0);
  expect(console.log).toHaveBeenCalledWith("a = 0, b = 0");
});
