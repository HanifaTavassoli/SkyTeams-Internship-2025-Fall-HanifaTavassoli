/*
5. Compute Simple and Compound Interest
Description: Given Principal (P), Rate (R), and Time (T), compute:
Simple Interest = (P × R × T) / 100
Compound Interest = P × ((1 + R/100) ^ T - 1)
Example:
Input:
P = 1000, R = 5, T = 2
Output:
SI = 100, CI ≈ 102.5

Authore: Hanifa Tavassoli

*/

import simpleAndCompoundInterest from "./question-5.js";

describe("compute simple and compound interest", () => {
  test("should compute simple and compound interest", () => {
    const [SI, CS] = simpleAndCompoundInterest(1000, 5, 2);

    expect(SI).toBe(100);
    expect(CS).toBe(102.5);
  });
});
