// TODO: Faire la manipulation du DOM dans ce fichier

// Déclaration des variables globales
let number = "";
let operator = "";
let calculator = "";
let result = 0;
let pi = 3.14;

// Sélectionner les éléments du DOM
const inputElement = document.getElementById("input");
const calculElement = document.getElementById("calcul");
const reset = document.getElementById("reset");
const clear = document.getElementById("clear");
const plusOuMoins = document.getElementById("plusoumoins");
const percentage = document.getElementById("percentage");
const division = document.getElementById("divideby");
const multiplicate = document.getElementById("times");
const soustraction = document.getElementById("minus");
const addition = document.getElementById("plus");
const equalsElement = document.getElementById("equals");
const digits = document.querySelectorAll(".digit");
const dot = document.querySelector(".dot");
const digitZero = document.getElementById("two-zero");
const expo = document.getElementById("exposant");
const piElement = document.getElementById("pi");

// Ecouteurs d'événements sur les  boutons
reset.addEventListener("click", resetAll);
clear.addEventListener("click", clearInput);
plusOuMoins.addEventListener("click", changeSign);
percentage.addEventListener("click", getPercentage);
division.addEventListener("click", () => addOperator("/"));
multiplicate.addEventListener("click", () => addOperator("*"));
soustraction.addEventListener("click", () => addOperator("-"));
addition.addEventListener("click", () => addOperator("+"));
equalsElement.addEventListener("click", calculate);
digitZero.addEventListener("click", zeroOperator );
expo.addEventListener("click", exponentiel);
piElement.addEventListener("click", piOperator);


const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
// LES FUNCTIONS AUXILIAIRES
// Mis à jour de l'affichage de l'input et du calcul
function updateDisplay() {
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

function piOperator() {
  
}


function exponentiel() {
  if (calculator) {
    result **= number ;
    number = result.toString();
    calculator += result;
    updateDisplay();
  }
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
