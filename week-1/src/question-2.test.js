const reverseList = require("./question-2.js");

test("should return a reversed list as a string", () => {
  const input = ["apple", "banana", "mango"];
  const result = reverseList(input);

  expect(result).toBe("mango banana apple ");
});

test("should return empty string for empty array", () => {
  const input = [];
  const result = reverseList(input);

  expect(result).toBe("");
});

test("should handle single-item list", () => {
  const input = ["apple"];
  const result = reverseList(input);

  expect(result).toBe("apple ");
});
