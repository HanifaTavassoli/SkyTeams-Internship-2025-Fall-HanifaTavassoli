/*
18. Multiplication table of a number
Description: Print the multiplication table for a given number (up to 10 or N).
Example:
Input:
5
Output:
5 × 1 = 5
5 × 2 = 10
…
5 × 10 = 50

Author: Hanifa Tavassoli

*/

import multiplicationTable from "./question-18";

describe("Multiplication table of a number", () => {
  test("should print multiplication table for 5", () => {
    console.log = jest.fn();

    multiplicationTable(5);

    expect(console.log).toHaveBeenCalledWith("5 x 1 = 5");
    expect(console.log).toHaveBeenCalledWith("5 x 5 = 25");
    expect(console.log).toHaveBeenCalledWith("5 x 10 = 50");
    expect(console.log).toHaveBeenCalledTimes(10);
  });
});
