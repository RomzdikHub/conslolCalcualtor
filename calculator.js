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
 * @param {number} a - 1-е число
 * @param {number} b - 2-е число
 * @param {string} sign - оператор: "+", "-", "*","/"
 * @returns {number|string} - отримуємо результат або ж повідомлення про помилку
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

const runCalculator = () => {
  const a = parseFloat(prompt("Введіть перше число: "));
  const sign = prompt("Обреріть операцію: +, -, *, /");
  const b = parseFloat(prompt("Введіть друге число: "));

  if (isNaN(a) || isNaN(b)) {
    console.log("Ошибочка, веддіть число");
    return;
  }

  const result = count(a, b, sign);
  console.log(`Відповідь: ${result}`);
};

runCalculator();
