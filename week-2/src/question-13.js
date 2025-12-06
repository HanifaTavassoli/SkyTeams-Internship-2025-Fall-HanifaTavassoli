/*

13. Month name & number of days using switch-case
Description: Input a month number (1–12) and display its name and number of days.
Example:
Input:
2
Output:
February, 28 or 29 days

Author: Hanifa Tavassoli

*/

const displayMonthDetails = (monthNumber) => {
  let month;
  let days;

  if (typeof monthNumber !== "number") return "invalid month input";

  switch (monthNumber) {
    case 1:
      month = "January";
      days = "31";
      break;

    case 2:
      month = "February";
      days = "28 or 29";
      break;

    case 3:
      month = "March";
      days = "31";
      break;

    case 4:
      month = "April";
      days = "30";
      break;

    case 5:
      month = "May";
      days = "31";
      break;

    case 6:
      month = "June";
      days = "30";
      break;

    case 7:
      month = "July";
      days = "31";
      break;

    case 8:
      month = "August";
      days = "31";
      break;

    case 9:
      month = "September";
      days = "30";
      break;

    case 10:
      month = "October";
      days = "31";
      break;

    case 11:
      month = "November";
      days = "30";
      break;

    case 12:
      month = "December";
      days = "31";
      break;

    default:
      month = "Invalid month number";
      days = "0";
  }

  return `${month}, ${days} days`;
};

console.log(displayMonthDetails(5));
console.log(displayMonthDetails(7));
console.log(displayMonthDetails(2));
console.log(displayMonthDetails(13));

export default displayMonthDetails;
