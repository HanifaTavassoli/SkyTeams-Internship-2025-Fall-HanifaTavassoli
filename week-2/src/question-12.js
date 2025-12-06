/*

12. Traffic Light System using switch-case
Description: Input a color (Red, Yellow, Green) and display an action (Stop, Ready, Go).
Example:
Input:
Green
Output:
Go

Author: Hanifa Tavassoli

*/

const trafficLightSystem = (color) => {
  let action = "";

  if (typeof color !== "string") return "Invalid input";

  const light = color.toLowerCase();

  switch (light) {
    case "red":
      action = "Stop";
      break;

    case "yellow":
      action = "Ready";
      break;

    case "green":
      action = "Go";
      break;

    default:
      action = "Invalid color, Color must be Red, Yellow, or Green";
  }

  return action;
};

console.log(trafficLightSystem("RED"));
console.log(trafficLightSystem("Green"));
console.log(trafficLightSystem("Yellow"));
console.log(trafficLightSystem("black"));

export default trafficLightSystem;
