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

const simpleAndCompoundInterest = (P, R, T) => {
  let simpleInterest = (P * R * T) / 100;
  let compoundInterest = P * ((1 + R / 100) ** T - 1);

  return [simpleInterest, compoundInterest.toFixed(1)];
};

const [SI, CI] = simpleAndCompoundInterest(1000, 5, 2);
console.log(SI, CI);
