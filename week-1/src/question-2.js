//  a function that reverses a string/list.

const reverseList = (list) => {
  let reversedList = "";

  for (let i = list.length - 1; i >= 0; i--) {
    reversedList += `${list[i]} `;
  }

  return reversedList;
};

let fruits = ["apple", "banana", "mango"];
console.log(reverseList(fruits));

export default reverseList;
