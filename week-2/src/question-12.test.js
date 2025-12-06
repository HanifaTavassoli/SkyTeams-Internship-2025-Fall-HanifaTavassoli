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

import trafficLightSystem from "./question-12";

describe("Traffic Light System using switch-case", () => {
  test("should return Stop for red color", () => {
    const color = trafficLightSystem("red");
    expect(color).toBe("Stop");
  });
  test("should return Ready for Yellow color", () => {
    const color = trafficLightSystem("Yellow");
    expect(color).toBe("Ready");
  });
  test("should return Go for red Green", () => {
    const color = trafficLightSystem("Green");
    expect(color).toBe("Go");
  });

  test("should return error message for invalid Color", () => {
    const color = trafficLightSystem("Blue");
    expect(color).toBe("Invalid color, Color must be Red, Yellow, or Green");
  });
  test("should return invalid input for non-string value", () => {
    const color = trafficLightSystem(5);
    expect(color).toBe("Invalid input");
  });
});
