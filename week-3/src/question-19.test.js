/*

19. Pattern Printing – Pyramid
Example:
Input:
5
Output:
        * 
       *** 
      ***** 
     *******
    *********

*/

import patternPyramid from "./question-19";

describe("Pattern Printing – Pyramid", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("prints correct pyramid for count = 5", () => {
    patternPyramid(5);

    expect(consoleSpy.mock.calls).toEqual([
      ["    *"],
      ["   ***"],
      ["  *****"],
      [" *******"],
      ["*********"],
    ]);
  });

  test("prints correct pyramid for count = 1", () => {
    patternPyramid(1);

    expect(consoleSpy.mock.calls).toEqual([["*"]]);
  });

  test("prints Invalid input for zero", () => {
    patternPyramid(0);

    expect(consoleSpy).toHaveBeenCalledWith("Invalid input");
  });

  test("prints Invalid input for negative number", () => {
    patternPyramid(-3);

    expect(consoleSpy).toHaveBeenCalledWith("Invalid input");
  });

  test("prints Invalid input for non-number input", () => {
    patternPyramid("5");

    expect(consoleSpy).toHaveBeenCalledWith("Invalid input");
  });
});
