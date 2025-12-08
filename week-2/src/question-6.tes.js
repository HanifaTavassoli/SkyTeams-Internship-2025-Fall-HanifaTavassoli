/*
6. Convert total seconds into hours, minutes, and seconds
Description: Convert a given number of seconds into hours, minutes, and seconds format.
Example:
Input:
3665
Output:
1 hr, 1 min, 5 sec

Authore: Hanifa Tavassoli

*/
import convertSecondsToHours from "./question-6";

describe("Convert total seconds into hours, minutes, and seconds", () => {
  test("should convert 3665 seconds correctly", () => {
    const result = convertSecondsToHours(3665);
    expect(result).toEqual([1, 1, 5]);
  });

  test("should return [0, 1, 0] for 60 seconds", () => {
    const result = convertSecondsToHours(60);
    expect(result).toEqual([0, 1, 0]);
  });

  test("should return [1, 0, 0] for 3600 seconds", () => {
    const result = convertSecondsToHours(3600);
    expect(result).toEqual([1, 0, 0]);
  });

  test("should return zeros for input 0", () => {
    const result = convertSecondsToHours(0);
    expect(result).toEqual([0, 0, 0]);
  });
});
