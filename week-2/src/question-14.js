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

const characterTypeChecker = (character) => {
  let alphabetRegex = /^[a-zA-Z]$/;
  let digitRegex = /^[0-9]$/;
  let result = "";

  character = character.toString();
  character = character.toLowerCase();

  if (alphabetRegex.test(character)) {
    if (
      character == "a" ||
      character == "u" ||
      character == "o" ||
      character == "e" ||
      character == "i"
    ) {
      result = "Vowel";
    } else {
      result = "Consonant";
    }
  } else if (digitRegex.test(character)) {
    result = "Digit";
  } else {
    result = "Special Symbol";
  }

  return result;
};

console.log(characterTypeChecker("a"));
console.log(characterTypeChecker(5));
console.log(characterTypeChecker("/"));

export default characterTypeChecker;
