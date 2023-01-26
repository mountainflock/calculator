const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (op, a, b) => {
  if (op === "+") {
    return add(a, b);
  } else if (op === "-") {
    return substract(a, b);
  } else if (op === "*") {
    return multiply(a, b);
  } else {
    return divide(a, b);
  }
};

const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const buttonC = document.querySelector(".C");
const buttonEquals = document.querySelector(".equals");

let firstNumber;
let operation;
let screenNumber;

function setText(text) {
  screenNumber = text;
  display.textContent = text;
}

function reset() {
  firstNumber = "";
  operation = "";
  screenNumber = "";
  display.textContent = "0";
}
reset();

buttonC.addEventListener("click", () => {
  reset();
});

for (let number of numbers) {
  number.addEventListener("click", () => {
    screenNumber += number.textContent;
    display.textContent = screenNumber;
  });
}

for (let operator of operators) {
  operator.addEventListener("click", () => {
    firstNumber = screenNumber;
    operation = operator.textContent;
    screenNumber = "";
  });
}

buttonEquals.addEventListener("click", () => {
  const first = parseInt(firstNumber);
  const second = parseInt(screenNumber);
  display.textContent = operate(operation, first, second);
});
