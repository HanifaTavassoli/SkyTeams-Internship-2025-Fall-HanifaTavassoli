/*
14. Check character type
Description: Input a character and determine if it’s a vowel, consonant, digit, or special symbol.
Example:
Input:
a
Output:
Vowel

Author: Hanifa Tavassoli

*/

import characterTypeChecker from "./question-14";

describe("should Check character type", () => {
  test("should return Vowel for vowel uppercase letters", () => {
    const character = characterTypeChecker("O");
    expect(character).toBe("Vowel");
  });
  test("should return Vowel for vowel lowercase letters", () => {
    const character = characterTypeChecker("e");
    expect(character).toBe("Vowel");
  });
  test("should return consonant for consonant lowercase letters", () => {
    const character = characterTypeChecker("b");
    expect(character).toBe("Consonant");
  });
  test("should return consonant for consonant uppercase letters", () => {
    const character = characterTypeChecker("T");
    expect(character).toBe("Consonant");
  });
  test("should return digit for digit input", () => {
    const character = characterTypeChecker(5);
    expect(character).toBe("Digit");
  });
  test("should return Special Symbol for special symbol input", () => {
    const character = characterTypeChecker("&");
    expect(character).toBe("Special Symbol");
  });
});
