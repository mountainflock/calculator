let firstNumber = "";
let secondNumber = "";
let operation = null;
let shouldResetScreen = false;

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".c");
const equalsButton = document.querySelector(".equals");
const decimalButton = document.querySelector(".decimal");
const negativeButton = document.querySelector(".negative");
const delButton = document.querySelector(".delete");

numbers.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operators.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
);

decimalButton.addEventListener("click", () => {
  appendDecimal();
});

delButton.addEventListener("click", () => {
  deleteNumber();
});

clearButton.addEventListener("click", () => {
  clear();
});

equalsButton.addEventListener("click", () => {
  executeEquals();
});

function appendNumber(number) {
  if (display.textContent === "0" || shouldResetScreen) resetScreen();
  display.textContent += number;
}

function resetScreen() {
  display.textContent = "";
  shouldResetScreen = false;
}

function clear() {
  firstNumber = "";
  secondNumber = "";
  operation = null;
  display.textContent = "0";
}

clear();

function appendDecimal() {
  if (shouldResetScreen) {
    resetScreen();
  }
  if (display.textContent === "") {
    display.textContent = "0";
  }
  if (display.textContent.includes(".")) {
    return (display.textContent += ".");
  }
}

function deleteNumber() {
  display.textContent = display.textContent.toString().slice(0, -1);
}

function setOperation(operator) {
  if (operation !== null) {
    executeEquals();
  }
  firstNumber = display.textContent;
  operation = operator;
  shouldResetScreen = true;
}

function executeEquals() {
  if (operation === null || shouldResetScreen) return;
  if (operation === "÷" && display.textContent === "0") {
    display.textContent = "ERR";
    return;
  }
  secondNumber = display.textContent;
  operation.textContent = roundResult(
    operate(operation, firstNumber, secondNumber)
  );
  operation = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (op, a, b) => {
  if (op === "+") {
    return add(a, b);
  } else if (op === "-") {
    return substract(a, b);
  } else if (op === "x") {
    return multiply(a, b);
  } else if ((op = "÷")) {
    return divide(a, b);
  } else {
    return null;
  }
};
