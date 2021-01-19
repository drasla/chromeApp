// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const finishedUl = document.querySelector(".finished");
const pendingUl = document.querySelector(".pending");

const PENDING_LS = "pending";
const FINISHED_LS = "finished";

let pendingArray = [];
let finishedArray = [];

function handleSubmit(event) {
    event.preventDefault();
    const currentText = input.value;
    addPending(currentText);
    input.value = "";
}

function saveFinishedToDos(li, text) {
    const finishedObj = {
        id: finishedArray.length + 1,
        text: text
    };
    li.id = finishedObj.id;
    finishedArray.push(finishedObj);
    saveFinish(finishedArray);
}

function saveFinish() {
    localStorage.setItem(FINISHED_LS, JSON.stringify(finishedArray));
}

function updatePending(li) {
    const leftPending = pendingArray.filter((todo) => {
        return todo.id !== parseInt(li.id);
    });
    pendingArray = leftPending;
    savePending(pendingArray);
}

function updateFinish(li) {
    const leftFinished = finishedArray.filter((todo) => {
        return todo.id !== parseInt(li.id);
    });
    finishedArray = leftFinished;
    saveFinish(finishedArray);
}

function switchBoard(event) {
    if (event.path[2] === pendingUl) {
        // switch to finished
        const li = event.path[1];
        const btn = event.path[0];
        btn.innerHTML = `⏪`;
        const text = li.firstChild.textContent;
        saveFinishedToDos(li, text);
        // Update local storage
        updatePending(li);
        finishedUl.appendChild(li);
    } else {
        // switch to pending
        const li = event.path[1];
        const btn = event.path[0];
        btn.innerHTML = `✅`;
        const text = li.firstChild.textContent;
        savePendingToDos(li, text);
        // Update local storage
        updateFinish(li);
        pendingUl.appendChild(li);
    }
}

function savePending(array) {
    localStorage.setItem(PENDING_LS, JSON.stringify(array));
}

function savePendingToDos(li, text) {
    const pendingObj = {
        id: pendingArray.length + 1,
        text: text
    };
    li.id = pendingObj.id;
    pendingArray.push(pendingObj);
    savePending(pendingArray);
}

function deleteToDos(event) {
    console.log("ok");
    if (event.path[2] === pendingUl) {
        // delete in pending
        const li = event.path[1];
        pendingUl.removeChild(li); // remove in frontend
        updatePending(li);
    } else {
        // delete in finished
        const li = event.path[1];
        finishedUl.removeChild(li); // remove in frontend
        updateFinish(li);
    }
}

function addPending(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const checkBtn = document.createElement("button");
    checkBtn.addEventListener("click", switchBoard); // switch boarding event
    delBtn.addEventListener("click", deleteToDos); // delete to do list
    span.innerHTML = text;
    delBtn.innerHTML = `❌`;
    checkBtn.innerHTML = `✅`;
    savePendingToDos(li, text);
    pendingUl.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
}

function addFinished(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const checkBtn = document.createElement("button");
    checkBtn.addEventListener("click", switchBoard); // switch boarding event
    delBtn.addEventListener("click", deleteToDos); // delete to do list
    span.innerHTML = text;
    delBtn.innerHTML = `❌`;
    checkBtn.innerHTML = "⏪";
    saveFinishedToDos(li, text);
    finishedUl.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
}

function loadToDos() {
    const PendingArray = localStorage.getItem(PENDING_LS);
    const FinishedArray = localStorage.getItem(FINISHED_LS);

    if (PendingArray !== null) {
        const parsePending = JSON.parse(PendingArray);
        parsePending.forEach((li) => {
            addPending(li.text);
        });
    }

    if (FinishedArray !== null) {
        const parseFinished = JSON.parse(FinishedArray);
        parseFinished.forEach((li) => {
            addFinished(li.text);
        });
    }
}

function init() {
    loadToDos();
    form.addEventListener("submit", handleSubmit);
}

init();
