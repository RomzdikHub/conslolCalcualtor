/**
 * Додає два числа
 * @param {number} a - Перше число
 * @param {number} b - Друге число
 * @returns {number} - Результат
 */
const add = (a, b) => {
  return a + b;
};

/**
 * Віднімає два числа
 * @param {number} a - Перше число
 * @param {number} b - Друге число
 * @returns {number} - Результат
 */
const subtract = (a, b) => {
  return a - b;
};

/**
 * Множить два числа
 * @param {number} a - Перше число
 * @param {number} b - Друге число
 * @returns {number} - Результат
 */
const multiply = (a, b) => {
  return a * b;
};

/**
 * Ділить два числа
 * @param {number} a - Перше число
 * @param {number} b - Друге число
 * @returns {number} - Результат
 * @throws {Error} Якщо число b буде дорівнювати 0
 */
const divide = (a, b) => {
    if(b === 0) {
        throw new Error("Число на 0 не ділиться!");
    } else {
        return a / b;
    }
};

/**
 * Перевіряє, чи введене значення є коректним числом
 * @param {string} input - Введене значення
 * @returns {number}
 * @throws {Error} Якщо введення некоректне
 */
const validateNumberInput = (input) => {
  if (input.trim() === '') {
    throw new Error('Помилка: введено порожнє значення.');
  }
  const parsedNumber = parseFloat(input);
  if (isNaN(parsedNumber)) {
    throw new Error('Помилка: введено некоректне число.');
  }
  return parsedNumber;
};

/**
 * Перевіряє оператор
 * @param {string} operator - Оператор для перевірки
 * @throws {Error} Якщо оператор некоректний
 */
const validateOperator = (operator) => {
  if (!['+', '-', '*', '/'].includes(operator)) {
    throw new Error('Помилка: невідомий оператор.');
  }
};


/**
 *
 * @param {number} a - 1-е число
 * @param {number} b - 2-е число
 * @param {string} sign - оператор: "+", "-", "*","/"
 * @returns {number|string} - отримуємо результат або ж повідомлення про помилку
 * @throws {Error} Якщо оператор некоректний
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
    throw new Error("Невідомий оператор.");
  }
};

const launchCalculator = () => {
  try {
    const inputA = prompt("Введіть перше число:");
    const a = validateNumberInput(inputA);

    const operator = prompt("Оберіть операцію (+, -, *, /):");
    validateOperator(operator);

    const inputB = prompt("Введіть друге число:");
    const b = validateNumberInput(inputB);

    const result = count(a, b, operator);
    console.log(`Відповідь: ${result}`);
  } catch (error) {
    console.log(error.message);
  }
};

launchCalculator();
