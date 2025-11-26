/*

3. Calculate the area and perimeter of a rectangle
Description: Given length and width, calculate and display both area and perimeter.
Example:
Input:
length = 4, width = 6
Output:
Area: 24, Perimeter: 20

Author: Hanifa Tavassoli

*/

import calculateAreaAndPerimeter from "./question-3";

beforeEach(() => {
  console.log = jest.fn();
});

test("should calculate area and perimeter for 4x6", () => {
  calculateAreaAndPerimeter(4, 6);
  expect(console.log).toHaveBeenCalledWith("Area: 24, Perimeter: 20");
});

test("should calculate area and perimeter for 5x5 (square)", () => {
  calculateAreaAndPerimeter(5, 5);
  expect(console.log).toHaveBeenCalledWith("Area: 25, Perimeter: 20");
});

test("should calculate area and perimeter for 0x10", () => {
  calculateAreaAndPerimeter(0, 10);
  expect(console.log).toHaveBeenCalledWith("Area: 0, Perimeter: 20");
});
