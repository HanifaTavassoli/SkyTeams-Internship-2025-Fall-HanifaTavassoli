import addNumbers from "./question-1.js";

test("should return a number that is the sum of two numbers", () => {
  expect(addNumbers(1, 2)).toBe(3);
});
