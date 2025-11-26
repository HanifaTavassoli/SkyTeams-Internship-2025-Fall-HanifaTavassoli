/*
2. Find the largest and smallest of three numbers
Description: Read three integers and print the largest and smallest.
Example:
Input:
3, 9, 5
Output:
Largest: 9, Smallest: 3

Author: Hanifa Tavassoli

*/

import findLargestAndSmallest from "./question-2";

beforeEach(() => {
  console.log = jest.fn();
});

test("should return largest and smallest (3, 9, 5)", () => {
  const result = findLargestAndSmallest(3, 9, 5);

  expect(console.log).toHaveBeenCalledWith("Largest: 9, Smallest: 3");
});

test("should work with negative numbers", () => {
  const result = findLargestAndSmallest(-10, -3, -7);

  expect(console.log).toHaveBeenCalledWith("Largest: -3, Smallest: -10");
});

test("should work when all numbers are equal", () => {
  const result = findLargestAndSmallest(4, 4, 4);

  expect(console.log).toHaveBeenCalledWith("Largest: 4, Smallest: 4");
});
