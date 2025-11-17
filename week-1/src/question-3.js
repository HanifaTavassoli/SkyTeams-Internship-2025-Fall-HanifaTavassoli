//  a function that finds the largest number in a collection

const largestNumber = (numbers) => {
  let maxNumber = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
};

console.log(largestNumber([4, 6, 1, 7, 2, 10, 8, 0, 9]));

module.exports = largestNumber;
