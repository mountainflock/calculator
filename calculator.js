const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

function operate(op, a, b) {
  if (op === "/" && b === 0) {
    return "ERR";
  } else if ((a === 0.1 || b === 0.1) && op === "*") {
    return operations[op](a, b).toFixed(2);
  } else if ((a === 0.1 || b === 0.1) && op === "+") {
    return operations[op](a, b).toFixed(1);
  }
  return operations[op](a, b);
}

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const buttonC = document.querySelector(".c");
const buttonEquals = document.querySelector(".equals");
const buttonDecimal = document.querySelector(".decimal");
const buttonNegative = document.querySelector(".negative");
const buttonPercent = document.querySelector(".percent");
const buttonZero = document.querySelector(".zero");

let currentResult = 0;
let currentNumber = "0";
let operation = null;

function refresh() {
  display.textContent = currentNumber;
  display.title = currentNumber;
}
refresh();

buttonC.addEventListener("click", () => {
  currentResult = 0;
  currentNumber = "0";
  operation = null;
  refresh();
});

buttonZero.addEventListener("click", () => {
  if (currentNumber !== "0" || operation !== null) {
    currentNumber += "0";
    refresh();
  }
});

for (let digit of digits) {
  digit.addEventListener("click", () => {
    if (currentNumber === "0") {
      currentNumber = digit.textContent;
    } else {
      currentNumber = currentNumber + digit.textContent;
    }
    refresh();
  });
}

for (let operator of operators) {
  operator.addEventListener("click", () => {
    if (operation !== null) {
      equals();
    }
    operation = operator.textContent;
    currentResult = parseFloat(currentNumber);
    currentNumber = "";
  });
}

buttonEquals.addEventListener("click", () => {
  equals();
  operation = null;
  currentNumber = "0";
});

function equals() {
  if (operation !== null) {
    const result = operate(operation, currentResult, parseFloat(currentNumber));
    currentNumber = `${result}`;
    refresh();
    currentResult = 0;
  }
}

buttonNegative.addEventListener("click", () => {
  currentNumber = `${parseFloat(currentNumber) * -1}`;
  refresh();
});

buttonPercent.addEventListener("click", () => {
  currentNumber = currentResult * (parseFloat(currentNumber) * 0.01);
  refresh();
});

buttonDecimal.addEventListener("click", () => {
  if (!currentNumber.includes(".")) {
    currentNumber += ".";
    refresh();
  }
});
