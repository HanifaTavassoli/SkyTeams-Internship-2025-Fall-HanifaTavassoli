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

const rightAngledTriangle = (count) => {
  if (typeof count !== "number" || count < 1) {
    console.log("Invalid input");
    return;
  }

  for (let i = 1; i <= count; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) line += "*";

    console.log(line);
  }
};

rightAngledTriangle(4);
export default rightAngledTriangle;
