// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const result = document.querySelector(".result");
const reset = document.querySelector(".reset");
const equel = document.querySelector(".equal");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");

let number = "";
let nextNumber = "";
let operator = "";
let prevOperator = "";
let currentNumber = 0;
let resultNumber = 0;
let firstDone, secondDone;

function handleReset() {
    number = "";
    nextNumber = "";
    currentNumber = 0;
    resultNumber = 0;
    firstDone = false;
    secondDone = false;
    operator = "";
    prevOperator = "";
    result.innerText = resultNumber;
}

function calculate() {
    switch (prevOperator) {
        case "+":
            console.log(currentNumber, resultNumber);
            resultNumber = currentNumber + resultNumber;
            result.innerText = resultNumber;
            break;
        case "-":
            resultNumber = currentNumber - resultNumber;
            result.innerText = resultNumber;
            break;
        case "*":
            resultNumber = currentNumber * resultNumber;
            result.innerText = resultNumber;
            break;
        case "/":
            resultNumber = currentNumber / resultNumber;
            result.innerText = resultNumber;
            break;
        default:
            return;
    }
    currentNumber = resultNumber;
}

function handleOperator(event) {
    operator = event.target.value;
    number = "";
    nextNumber = "";

    if(!firstDone) {
        firstDone = true;
    }

    if(firstDone && secondDone) {
        calculate();
    }

    secondDone = false;
    prevOperator = operator;
}

function printNumber(event) {
    const numberValue = event.target.value;
    nextNumber = `${numberValue}`;
    if(!firstDone) {
        number = `${number}${nextNumber}`;
        currentNumber = parseInt(number);
        result.innerText = currentNumber;
    } else {
        number = `${number}${nextNumber}`;
        resultNumber = parseInt(number);
        result.innerText = resultNumber;
        secondDone = true;
    }
}

function handleEquel() {
    if (firstDone && secondDone) {
        calculate();
        operator = "";
        prevOperator = "";
    }
}

function init() {
    numberBtns.forEach((numberBtn) => {
        numberBtn.addEventListener("click", printNumber);
    });
    operatorBtns.forEach((operatorBtn) => {
        operatorBtn.addEventListener("click", handleOperator);
    });
    reset.addEventListener("click", handleReset);
    equel.addEventListener("click", handleEquel);
}

init();
