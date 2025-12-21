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

const patternPyramid = (count) => {
  if (typeof count !== "number" || count < 1) {
    console.log("Invalid input");
    return;
  }

  for (let i = 1; i <= count; i++) {
    let line = "";

    for (let j = 0; j < count - i; j++) line += " ";

    for (let j = 0; j < 2 * i - 1; j++) line += "*";

    console.log(line);
  }
};

patternPyramid(5);
export default patternPyramid;
