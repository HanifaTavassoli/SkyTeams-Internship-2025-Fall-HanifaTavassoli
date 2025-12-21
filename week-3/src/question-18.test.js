/*

18. Pattern Printing – Right-aligned Triangle
Example:
Input:
4
Output:
        * 
       ** 
      *** 
     ****

*/

import rightAlignedTriangle from "./question-18";

describe("Pattern Printing – Right-aligned Triangle", () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });
  test("should print right-angled triangle for count = 4", () => {
    rightAlignedTriangle(4);

    expect(consoleSpy.mock.calls).toEqual([
      ["   *"],
      ["  **"],
      [" ***"],
      ["****"],
    ]);
  });
  test("should print one star for count = 1", () => {
    rightAlignedTriangle(1);
    expect(consoleSpy.mock.calls).toEqual([["     *"]]);
  });

  test("prints Invalid input for zero", () => {
    rightAlignedTriangle(0);
    expect(consoleSpy).toHaveBeenCalledWith("Invalid input");
  });

  test("prints Invalid input for negative number", () => {
    rightAlignedTriangle(-2);
    expect(consoleSpy).toHaveBeenCalledWith("Invalid input");
  });
});
