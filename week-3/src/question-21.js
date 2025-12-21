/*

21. Password Strength Checker
Description: A strong password must:
• Be at least 8 characters long.
• Contain at least one uppercase letter, one lowercase letter, and one number.
Example:
Input:
MyPass123
Output:
Strong
Input:
pass
Output:
Weak

*/

const passwordChecker = (password) => {
  if (typeof password !== "string") return "Invalid input";

  if (
    password.length >= 8 &&
    /\d/.test(password) &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password)
  )
    return "Strong";

  return "Weak";
};

console.log(passwordChecker("Hanifa"));
console.log(passwordChecker("MyPass123"));
console.log(passwordChecker(123));

export default passwordChecker;
