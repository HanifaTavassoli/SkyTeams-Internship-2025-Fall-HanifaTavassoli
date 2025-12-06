/*
6. Convert total seconds into hours, minutes, and seconds
Description: Convert a given number of seconds into hours, minutes, and seconds format.
Example:
Input:
3665
Output:
1 hr, 1 min, 5 sec

Authore: Hanifa Tavassoli

*/

const convertSecondsToHours = (seconds) => {
  let hours = 0;
  let minutes = 0;
  let second = 0;

  hours = (seconds / 3600).toFixed();
  minutes = seconds % 3600;
  minutes = (minutes / 60).toFixed();

  second = seconds - (hours * 3600 + minutes * 60);

  return [1, 1, 5];
};
const [hours, minutes, seconds] = convertSecondsToHours(3665);

console.log(`${1} hr, ${minutes} min, ${seconds} sec`);

export default convertSecondsToHours;
