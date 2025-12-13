/*

1. Count vowels in a string
Description: Count the number of vowels (a, e, i, o, u) in a given string.
Example:
Input:
"SkyTeams Internship"
Output:
5

*/

import countVowels from "./question-1";

describe("Count vowels in a string", () => {
  test("should return 5 for 'SkyTeams Internship' input", () => {
    const result = countVowels("SkyTeams Internship");
    expect(result).toBe(5);
  });
  test("should return 0 for 'sky' input", () => {
    const result = countVowels("sky");
    expect(result).toBe(0);
  });
  test("should return an 0 for empty string '' input ", () => {
    const result = countVowels("");
    expect(result).toBe(0);
  });
  test("should return an error message for invalid input", () => {
    const result = countVowels(532);
    expect(result).toBe("invalid input");
  });
});
