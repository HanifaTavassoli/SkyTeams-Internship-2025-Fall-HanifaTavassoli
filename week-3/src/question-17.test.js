/*

17. Pattern Printing – Right-angled Triangle
Example:
Input:
4
Output:
* 
** 
*** 
****

*/

import rightAngledTriangle from "./question-17";

describe("Pattern Printing – Right-angled Triangle", () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test("should print right-angled triangle for count = 4", () => {
    rightAngledTriangle(4);

    expect(consoleSpy.mock.calls).toEqual([["*"], ["**"], ["***"], ["****"]]);
  });

  test("should print one star for count = 1", () => {
    rightAngledTriangle(1);
    expect(consoleSpy.mock.calls).toEqual([["*"]]);
  });

  test("prints Invalid input for zero", () => {
    rightAngledTriangle(0);
    expect(consoleSpy).toHaveBeenCalledWith("Invalid input");
  });

  test("prints Invalid input for negative number", () => {
    rightAngledTriangle(-2);
    expect(consoleSpy).toHaveBeenCalledWith("Invalid input");
  });
});
