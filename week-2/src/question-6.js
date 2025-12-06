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
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const second = seconds % 60;

  return [hours, minutes, second];
};

const [hours, minutes, seconds] = convertSecondsToHours(3665);

console.log(`${hours} hr, ${minutes} min, ${seconds} sec`);

export default convertSecondsToHours;
