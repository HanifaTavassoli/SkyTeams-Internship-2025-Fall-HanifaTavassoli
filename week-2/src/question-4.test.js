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

import temperatureConverter from "./question-4";

describe("temperature converter (Celsius ↔ Fahrenheit)", () => {
  test("should convert positive celsius input", () => {
    const celsius = temperatureConverter(25, "celsius");
    expect(celsius).toBe(77);
  });

  test("should convert positive fahrenheit input", () => {
    const fahrenheit = temperatureConverter(77, "fahrenheit");
    expect(fahrenheit).toBe(25);
  });

  test("should convert negative celsius input", () => {
    const celsius = temperatureConverter(-7, "celsius");
    expect(celsius).toBe(19.4);
  });

  test("should convert negavtive fahrenheit input", () => {
    const fahrenheit = temperatureConverter(-20, "fahrenheit");
    expect(fahrenheit).toBe(-28.88888888888889);
  });

  test("should work with zero celsius input", () => {
    const celsius = temperatureConverter(0, "celsius");
    expect(celsius).toBe(32);
  });

  test("should work with zero fahrenheit input", () => {
    const fahrenheit = temperatureConverter(0, "fahrenheit");
    expect(fahrenheit).toBe(-17.77777777777778);
  });
});
