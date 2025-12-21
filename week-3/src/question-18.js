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

const rightAlignedTriangle = (count) => {
  if (typeof count !== "number" || count < 1) {
    console.log("Invalid input");
    return;
  }

  for (let i = count; i > 0; i--) {
    let line = "";
    for (let j = 0; j < i; j++) line += " ";
    for (let k = count; k >= i; k--) line += "*";
    console.log(line);
  }
};

rightAlignedTriangle(4);
rightAlignedTriangle("");

export default rightAlignedTriangle;
