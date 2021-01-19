const clock = document.querySelector(".js-clock");

function untilChristmas() {
    const nowDate = new Date();
    const christmasDate = new Date(2021,12,25);
    const untilTime = christmasDate.getTime() - nowDate.getTime();


    const days = Math.ceil((untilTime / (1000*60*60*24)))-1;
    const hours = Math.ceil((untilTime - days*1000*60*60*24) / (1000*60*60))-1;
    const minutes = Math.ceil((untilTime - days*1000*60*60*24 - hours*1000*60*60)/ (1000*60))-1;
    const seconds = Math.ceil((untilTime - days*1000*60*60*24 - hours*1000*60*60 - minutes*1000*60) / 1000)-1;

    clock.innerText = `${days}d ${hours < 10 ? `0${hours}` : hours}h ${minutes < 10 ? `0${minutes}` : minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

function init() {
    untilChristmas();
    setInterval(untilChristmas, 1000);
};

init();
