/*

10. Leap Year Checker
Description: Determine if a given year is a leap year.
Rule: Year divisible by 4 → leap year, except centuries not divisible by 400.
Example:
Input:
2000
Output:
Leap year
Input:
1900
Output:
Not leap year

Author: Hanifa Tavassoli

*/

const leapYearChecker = (year) => {
  let result = "";
  if (year % 400 === 0) result = "leap year";
  else if (year % 100 === 0) result = "Not leap year";
  else if (year % 4 === 0) result = "leap year";
  else result = "Not leap year";

  return result;
};

const year1 = leapYearChecker(2000);
console.log(year1);

const year2 = leapYearChecker(1900);
console.log(year2);

const year3 = leapYearChecker(2100);
console.log(year3);

const year4 = leapYearChecker(2024);
console.log(year4);

const year5 = leapYearChecker(2016);
console.log(year5);

export default leapYearChecker;
