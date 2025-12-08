/*

4. Temperature converter (Celsius ↔ Fahrenheit)
Description: Convert temperature from Celsius to Fahrenheit and vice versa.
Formula:
F = (C × 9/5) + 32
C = (F - 32) × 5/9
Example:
Input:
C = 25
Output:
F = 77

Authore: Hanifa Tavassoli

*/

const temperatureConverter = (temp, type) => {
  let temperature = 0;

  if (type === "celsius") temperature = (temp * 9) / 5 + 32;

  if (type === "fahrenheit") temperature = ((temp - 32) * 5) / 9;

  return temperature;
};

const celsius = temperatureConverter(0, "celsius");
console.log(celsius);

const fahrenheit = temperatureConverter(0, "fahrenheit");
console.log(fahrenheit);

export default temperatureConverter;
