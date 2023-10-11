// TODO: Faire la manipulation du DOM dans ce fichier
let number = "";
let operator = "";
let calculator = "";
let result = 0;

// Sélectionner les éléments du DOM
const inputElement = document.getElementById("input");
const resultElement = document.getElementById("calcul");
const resetBtn = document.getElementById("reset");
const clearBtn = document.getElementById("clear");
const plusOuMoinsBtn = document.getElementById("plusoumoins");
const percentageBtn = document.getElementById("percentage");
const divisionBtn = document.getElementById("divideby");
const multiplicateBtn = document.getElementById("times");
const soustractionBtn = document.getElementById("minus");
const additionBtn = document.getElementById("plus");
const equalsElement = document.getElementById("equals");
const digits = document.querySelectorAll(".digit");
const dot = document.querySelector(".dot");
const digitZeroBtn = document.getElementById("two-zero");

// Ecouteurs d'événements sur les  boutons
resetBtn.addEventListener("click", resetAll);
clearBtn.addEventListener("click", clearInput);
plusOuMoinsBtn.addEventListener("click", changeSign);
percentageBtn.addEventListener("click", getPercentage);
divisionBtn.addEventListener("click", () => addOperator("/"));
multiplicateBtn.addEventListener("click", () => addOperator("*"));
soustractionBtn.addEventListener("click", () => addOperator("-"));
additionBtn.addEventListener("click", () => addOperator("+"));
equalsElement.addEventListener("click", calculate);
digitZeroBtn.addEventListener("click", zeroOperator);

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
// Mis à jour de l'affichage de l'input et du calcul
function updateDisplay(number, calculator) {
  input.value = number;
  calcul.textContent = calculator;
}

function resetAll() {
  number = "";
  operator = "";
  calculator = "";
  result = 0;
  updateDisplay();
}

function clearInput() {
  number = "";
  updateDisplay();
}

function zeroOperator() {
  number += "00";
  updateDisplay();
}

function changeSign() {
  if (number) {
    number = (-number).toString();
    updateDisplay();
  }
}

function getPercentage() {
  if (calculator) {
    result /= 100;
    number = result.toString();
    calculator += " %";
    updateDisplay();
  }
}

// Ajout d'un opérateur au calcul en cours
function addOperator(op) {
  if (number) {
    if (calculator) {
      calculator += `  ${operator} ${number} `;
      result = eval(calculator);
    } else {
      calculator = number;
      result = Number(number);
    }
    number = "";
    operator = op;
    updateDisplay();
  }
}

// Calcul et affichage des résultats
function calculate() {
  if (number && operator) {
    calculator += ` ${operator} ${number}`;
    result = eval(calculator);
    number = result.toString();
    calculator += " =";
    updateDisplay();
  }
}

// Parcours sur les boutons contenant des chiffres
for (let digit of digits) {
  digit.addEventListener("click", () => {
    if (number.length < 10) {
      if (number === "0") {
        number = digit.textContent;
      } else {
        number += digit.textContent;
      }
      updateDisplay();
    }
  });
}

// Ecouteur d’événement pour les decimales
dot.addEventListener("click", () => {
  if (number.length < 10) {
    if (!number.includes(".")) {
      if (number === "") {
        number = "0.";
      } else {
        number += ".";
      }
      updateDisplay();
    }
  }
});

input.addEventListener("keydown", (event) => {
  if (event.key >= "0" && event.key <= "9") {
    if (number.length < 10) {
      if (number === "0") {
        number = event.key;
      } else {
        number += event.key;
      }
      updateDisplay();
    }
  } else if (event.key === ".") {
    if (number.length < 10) {
      if (!number.includes(".")) {
        if (number === "") {
          number = "0.";
        } else {
          number += ".";
        }
        updateDisplay();
      }
    }
  } else if (
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/"
  ) {
    addOperator(event.key);
  } else if (event.key === "=" || event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    clearInput();
  } else if (event.key === "Escape") {
    resetAll();
  }
});