const sumNumbers = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  console.log(sum);
};

sumNumbers(5);
sumNumbers(10);
sumNumbers(0);

export default sumNumbers;
