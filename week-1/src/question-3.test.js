const largestNumber = require("./question-3.js");

test("should return the largest number in the array", () => {
  const input = [4, 6, 1, 7, 2, 10, 8, 0, 9];
  const result = largestNumber(input);

  expect(result).toBe(10);
});

test("should return the only number if array has one element", () => {
  const input = [5];
  const result = largestNumber(input);

  expect(result).toBe(5);
});

test("should handle negative numbers correctly", () => {
  const input = [-10, -3, -50, -1];
  const result = largestNumber(input);

  expect(result).toBe(-1);
});
