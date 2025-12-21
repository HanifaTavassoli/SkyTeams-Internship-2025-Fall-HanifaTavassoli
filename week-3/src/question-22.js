/*

22. Collatz Sequence (Hailstone Numbers)
Description:
Take a number n.
• If n is even, divide it by 2.
• If n is odd, multiply it by 3 and add 1.
• Repeat until n = 1.
• Count the number of steps to reach 1.
Example:
Input:
6
Output:
6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 (Steps: 8)

*/

const collatzSequence = (num) => {
  if (typeof num !== "number" || num < 1) return "Invalid input";

  let number = num;
  let sequence = [number];
  let result = "";

  while (number > 1) {
    if (number % 2 === 0) number /= 2;
    else number = number * 3 + 1;

    sequence.push(number);
  }

  sequence.forEach((seq) => {
    if (seq === 1) result += `${seq}`;
    else result += `${seq} → `;
  });

  return `${result} (Steps: ${sequence.length - 1})`;
};

console.log(collatzSequence(6));
console.log(collatzSequence(0));
console.log(collatzSequence(1));

export default collatzSequence;
