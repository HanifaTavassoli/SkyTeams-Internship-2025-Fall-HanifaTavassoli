/*

3. Calculate the area and perimeter of a rectangle
Description: Given length and width, calculate and display both area and perimeter.
Example:
Input:
length = 4, width = 6
Output:
Area: 24, Perimeter: 20

Author: Hanifa Tavassoli

*/

const calculateAreaAndPerimeter = (length, width) => {
  const area = length * width;
  const perimeter = 2 * (length + width);

  console.log(`Area: ${area}, Perimeter: ${perimeter}`);
};

calculateAreaAndPerimeter(4, 6);

export default calculateAreaAndPerimeter;
