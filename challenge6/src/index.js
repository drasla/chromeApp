// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.querySelector(".js-form");
const displayH4 = form.querySelector("h4");
const rangeInput = form.querySelector("#range");
const numberInput = form.querySelector("#gambleNumber");
const playBtn = form.querySelector("#play");
const result = document.querySelector(".result");

let saveNumber = 10;
let changed = false;

function handleRange(event) {
    event.preventDefault();
    const rangeInputText = rangeInput.value;
    saveRangeInput(rangeInputText);
}

function handleNumber(event) {
    event.preventDefault();
    const numberInputText = numberInput.value;
    if (numberInputText) {
        checkGamble(numberInputText);
    } else {
        clearGamble();
    }
}

function saveRangeInput(value) {
    saveNumber = value;
    displayH4.innerHTML = `Generate a number between 0 and ${value}`;
}

function clearGamble() {
    const changedFirstLine = result.querySelector(".firstLine");
    const changedSecondLine = result.querySelector(".secondLine");
    changedFirstLine.innerHTML = "";
    changedSecondLine.innerHTML = "";
}

function checkGamble(gambleNumber) {
    let resultNumber = Math.floor(Math.random() * saveNumber);
    const resultFirstLine = document.createElement("p");
    resultFirstLine.className = "firstLine";
    const resultSecondLine = document.createElement("p");
    resultSecondLine.className = "secondLine";

    if(changed === false) {
        result.appendChild(resultFirstLine);
        result.appendChild(resultSecondLine);

        resultFirstLine.innerHTML = `You chose: ${gambleNumber}, the machine chose: ${resultNumber}`;

        if(gambleNumber >= resultNumber) {
            resultSecondLine.innerHTML = `You won!`;
        } else {
            resultSecondLine.innerHTML = `You lost!`;
        }
    } else {
        const changedFirstLine = result.querySelector(".firstLine");
        const changedSecondLine = result.querySelector(".secondLine");

        changedFirstLine.innerHTML = `You chose: ${gambleNumber}, the machine chose: ${resultNumber}`;

        if(gambleNumber >= resultNumber) {
            changedSecondLine.innerHTML = `You won!`;
        } else {
            changedSecondLine.innerHTML = `You lost!`;
        }
    }

    changed = true;
}

function init() {
    form.addEventListener("click", handleRange);
    playBtn.addEventListener("click", handleNumber);
}

init();
