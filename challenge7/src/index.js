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
let currentNumber = 0;
let resultNumber = 0;

function handleReset() {
    number = "";
    nextNumber = "";
    currentNumber = 0;
    resultNumber = 0;
    operator = "";
    result.innerText = resultNumber;
}

function handleOperator(event) {
    const operatorValue = event.target.value;
    number = "";
    nextNumber = "";

    switch (operator) {
        case "":
            operator = operatorValue;
        case "+":
            resultNumber = resultNumber + currentNumber;
            operator = operatorValue;
            result.innerText = resultNumber;
            break;
        case "-":
            resultNumber = resultNumber - currentNumber;
            operator = operatorValue;
            result.innerText = resultNumber;
            break;
        case "*":
            resultNumber = resultNumber * currentNumber;
            operator = operatorValue;
            result.innerText = resultNumber;
            break;
        case "/":
            resultNumber = resultNumber / currentNumber;
            operator = operatorValue;
            result.innerText = resultNumber;
            break;
        case "=":
            number = "";
            nextNumber = "";
            operator = operatorValue;
            break;
    }
}

function printNumber(event) {
    if(operator === "=") {
        resultNumber = 0;
    }

    const numberBtn = event.target;
    const numberValue = numberBtn.value;
    nextNumber = `${numberValue}`;
    number = `${number}${nextNumber}`;
    currentNumber = parseInt(number);
    result.innerText = currentNumber;
}

function init() {
    numberBtns.forEach((numberBtn) => {
        numberBtn.addEventListener("click", printNumber);
    });
    operatorBtns.forEach((operatorBtn) => {
        operatorBtn.addEventListener("click", handleOperator);
    });
    reset.addEventListener("click", handleReset);
    equel.addEventListener("click", handleOperator);
}

init();
