/**
 * Додає два числа
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const add = (a, b) => {
  return a + b;
};

/**
 * Віднімає два числа
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const subtract = (a, b) => {
  return a - b;
};

/**
 * Множить два числа
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const multiply = (a, b) => {
  return a * b;
};

/**
 * Ділить два числа
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const divide = (a, b) => {
  return a / b;
};
/**
 *
 * @param {number} a
 * @param {number} b
 * @param {string} sign
 * @returns
 */
const count = (a, b, sign) => {
  if (sign === "+") {
    return add(a, b);
  } else if (sign === "-") {
    return subtract(a, b);
  } else if (sign === "*") {
    return multiply(a, b);
  } else if (sign === "/") {
    return divide(a, b);
  } else {
    return "Невідомий оператор. Повторіть спробу";
  }
};

const firstInput = parseFloat(prompt("Введіть перше число:"));
const sign = prompt("Обреріть операцію: +, -, *, /");
const secondInput = parseFloat(prompt("Введіть друге число:"));

if (isNaN(firstInput) || isNaN(secondInput)) {
  console.log("Ошибочка, веддіть число");
} else {
  const result = count(firstInput, secondInput, sign);
  console.log(`Відповідь: ${result}`);
}
