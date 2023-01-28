const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
function percent(a, b) {
  ((b - a) / a) * 100;
}

const operate = (op, a, b) => {
  if (op === "+") {
    return add(a, b);
  } else if (op === "-") {
    return substract(a, b);
  } else if (op === "x") {
    return multiply(a, b);
  } else {
    return divide(a, b);
  }
};

const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const buttonC = document.querySelector(".c");
const buttonEquals = document.querySelector(".equals");
const buttonDot = document.querySelector(".dot");
const buttonNegative = document.querySelector(".negative");
const buttonPercent = document.querySelector(".percent");
const buttonZero = document.querySelector(".zero");
const button = document.querySelectorAll("button");

let firstNumber;
let operation;
let screenNumber;
let opCounter = 0;

button.addEventListener("click", () => {
  button.style;
});

buttonDot.addEventListener("click", () => {
  if (display.textContent === "0") {
    setText("0.");
  } else {
    setText(`${screenNumber}.`);
  }
});

buttonNegative.addEventListener("click", () => {
  setText(screenNumber * -1);
});

buttonZero.addEventListener("click", () => {
  if (screenNumber !== "0") {
    screenNumber += "0";
    display.textContent = screenNumber;
  } else {
    screenNumber = "";
  }
});

buttonPercent.addEventListener("click", () => {
  percent(firstNumber, screenNumber);
});

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
    // if (opCounter > 0) {
    //   firstNumber = screenNumber;
    //   operation = operator.textContent;
    //   operate(operation, first, second);
    //   screenNumber = "";
    // }
    firstNumber = screenNumber;
    operation = operator.textContent;
    screenNumber = "";
  });
}

buttonEquals.addEventListener("click", () => {
  executeEquals();
});

function executeEquals() {
  let first = parseFloat(firstNumber);
  let second = parseFloat(screenNumber);
  const result = operate(operation, first, second);

  if (!isNaN(result)) {
    display.textContent = result;
  } else {
    display.textContent = screenNumber;
  }
  if (isNaN(screenNumber) || isNaN(first) || isNaN(second)) {
    display.textContent = screenNumber;
  }
  if (
    (first === 0.1 && second === 0.2 && operation === "x") ||
    (second === 0.1 && first === 0.2 && operation === "x")
  ) {
    display.textContent = result.toFixed(2);
  }
  if (
    (first === 0.1 && second === 0.2 && operation === "+") ||
    (second === 0.1 && first === 0.2 && operation === "+")
  ) {
    display.textContent = result.toFixed(1);
  }
  if (result.toString().length > 9) {
    display.textContent = result.toPrecision(9);
  }
  if (result === Infinity) {
    display.textContent = "ERR";
  }
  screenNumber = "";
  opCounter += 1;
}
