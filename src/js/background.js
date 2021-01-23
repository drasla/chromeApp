const body = document.querySelector("body");

// const IMG_NUMBER = 3;

let width = window.screen.width;
let height = window.screen.height;

function paintImage(imgNumber) {
    const image = new Image;
    image.src = `https://source.unsplash.com/random/${width}x${height}`;
    image.classList.add("bgImage");
    body.prepend(image);
}

// function genRandom() {
//     const number = Math.floor(Math.random() * IMG_NUMBER);
//     return number;
// }

function init() {
    // const randomNumber = genRandom();
    paintImage();
}

init();
