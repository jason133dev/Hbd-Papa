let awal = document.querySelector(`.awal`);
let container = document.querySelector(`.container`);
let lagu = new Audio(`sorry.mp3`);

function tampil() {
    setTimeout(() => {
        awal.style.pointerEvents = `none`;
        awal.style.opacity = `0`;
        lagu.play();
        lagu.currentTime = `3.5`;
        lagu.volume = `1`;
    }, 100);
}

awal.addEventListener(`click`, tampil);