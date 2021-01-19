const form = document.querySelector(".js-form"),
    select = form.querySelector(".js-select");

const LOCATION_LS = "location";

function saveLocation(id) {
    localStorage.setItem(LOCATION_LS, id);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = select.options[select.selectedIndex].value;
    saveLocation(currentValue);
}

function changedLocation(id) {
    select.options[id].selected = true;
}

function changeSelect() {
    select.addEventListener("change", handleSubmit);
}

function loadLocation() {
    const location = localStorage.getItem(LOCATION_LS);
    if (location !== null) {
        changedLocation(location);
    }
}

function init() {
    loadLocation();
    changeSelect();
}

init();
