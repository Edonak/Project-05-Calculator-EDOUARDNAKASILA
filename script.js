import { calculate } from './calculator.js';

// TODO: Faire la manipulation du DOM dans ce fichier

const percentageButton = document.getElementById("percentage");
const dotButton = document.querySelector(".dot"); 

let input ="";
let operator ="";
let calculation ="";
let result = "";
let hasDecimal = false;
const digitButtons = document.querySelectorAll(".digit");
const inputElement = document.querySelector("#input");
const equalEl = document.querySelector("#equals");
const calculElement = document.querySelector("#calcul");
const operatorAdd = document.querySelector("#plus");
const operatorSous = document.querySelector("#minus");
const operatorMulti = document.querySelector("#times");
const operatorDiv = document.querySelector("#divideby");
const resetButton = document.querySelector("#reset");
const clearButton = document.getElementById("clear");
const btnSing = document.querySelector(".secondary");
const plusMinusButton = document.getElementById("plusoumoins");


  function Number0(para){
    result += "7";
    viewResultat();
    para.preventDefault();
  };
  function Number1(){
    result += "8";
    viewResultat();
  };
  function Number2(){
    result += "9";
    viewResultat();
  };
  function Number3(){
    result += "4";
    viewResultat();
  };
  function Number4(){
    result += "5";
    viewResultat();
  };
  function Number5(){
    result += "6";
    viewResultat();
  };
  function Number6(){
    result += "1";
    viewResultat();
  };
  function Number7(){
    result += "2";
    viewResultat();
  };
  function Number8(){
    result += "3";
    viewResultat();
  };
  function Number9(){
    result += ".";
    viewResultat();
  };
  function Number10(){
    result += "0";
    viewResultat();
  };

  function clickBtbn(button){
    if(button === digitButtons[0]){
        button.addEventListener('click', Number0);
    }else if(button === digitButtons[1]){
        button.addEventListener('click', Number1);
    }else if(button === digitButtons[2]){
        button.addEventListener('click', Number2);
    }else if(button === digitButtons[3]){
        button.addEventListener('click', Number3);
    }else if(button === digitButtons[4]){
        button.addEventListener('click', Number4);
    }else if(button === digitButtons[5]){
        button.addEventListener('click', Number5);
    }else if(button === digitButtons[6]){
        button.addEventListener('click', Number6);
    }else if(button === digitButtons[7]){
        button.addEventListener('click', Number7);
    }else if(button === digitButtons[8]){
        button.addEventListener('click', Number8);
    }else if(button === digitButtons[9]){
        button.addEventListener('click', Number9);
    }else if(button === digitButtons[10]){
        button.addEventListener('click', Number10);
    }else{
        console.log("Error");
    }
  };

  function viewResultat(){
    const conversionTonumber = result;
    inputElement.value = conversionTonumber;
  };


  function addition(para){
    result += "+";
    calculElement.innerHTML = "+";
    inputElement.value='';
    const conversionTonumber = result;
    calculElement.innerHTML = conversionTonumber;
    para.preventDefault();
  };

    function soustraction(para){
        result += "-";
      calculElement.innerHTML = "-";
      inputElement.value='';
      const conversionTonumber = result;
      calculElement.innerHTML = conversionTonumber;
      para.preventDefault();
    };
  
  function equal(para){
    const valueInput = eval(result);
    inputElement.value = "=" + valueInput;
    calculElement.innerHTML = result  ;
    para.preventDefault();
  };

  function multiplication(para){
    result += "*";
    calculElement.innerHTML = "x";
      inputElement.value='';
      const conversionTonumber = result;
      calculElement.innerHTML = conversionTonumber;
      para.preventDefault();
  };
  function division(para){
    result += "/";
    vieuwCacul.innerHTML = ":";
    inputElement.value='';
    const conversionTonumber = result;
    vieuwCacul.innerHTML = conversionTonumber;
    para.preventDefault();
  };

  function handlePlusMinus() {
    if (input !== "" && input !== "0") {
      if (input.startsWith("-")) {
        input = input.slice(1);
      } else {
        input = "-" + input;
      }
      updateDisplay();
    }
  }
  function clearbtn(para){
    result += "";
    calculElement.innerHTML = "-";
    inputElement.value='';
    const conversionTonumber = result;
    calculElement.innerHTML = conversionTonumber;
    para.preventDefault();
  }
  function handleClear() {
    if (input !== "") {
      input = "";
      hasDecimal = false;
    } else {
      calculation = "";
      operator = "";
    }
    updateDisplay();
  }
  function handleReset(){
    calculElement.innerHTML = "";
    inputElement.innerHTML="";
  };
  
  operatorAdd.addEventListener('click', addition);
  equalEl.addEventListener('click' , equal);
  operatorSous.addEventListener('click', soustraction);
  operatorMulti.addEventListener('click', multiplication);
  operatorDiv.addEventListener('click', division);
  resetButton.addEventListener('click', handleReset);
  clearButton.addEventListener("click", handleClear);
  plusMinusButton.addEventListener("click", handlePlusMinus);
  btnSing.addEventListener('click' , clearbtn);

  digitButtons.forEach(clickBtbn);
  document.addEventListener("DOMContentLoaded", init);
  console.log(eval("2*4/2"));


  

  

  
 

  
   
 