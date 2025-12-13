/*

1. Count vowels in a string
Description: Count the number of vowels (a, e, i, o, u) in a given string.
Example:
Input:
"SkyTeams Internship"
Output:
5

*/

const countVowels = (str) => {
  if (typeof str !== "string") return "invalid input";

  let count = 0;

  let strg = str.toLowerCase();

  for (let i = 0; i < strg.length; i++) {
    if (
      strg[i] === "a" ||
      strg[i] === "e" ||
      strg[i] === "i" ||
      strg[i] === "o" ||
      strg[i] === "u"
    )
      count++;
  }

  return count;
};

console.log(countVowels("SkyTeams Internship"));

export default countVowels;
