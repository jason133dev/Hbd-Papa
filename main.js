let awal = document.querySelector(`.awal`);
let container = document.querySelector(`.container`);
let lagu = new Audio(`NIKI - You'll Be In My Heart _ Lirik Terjemahan Indonesia.mp3`);

function tampil() {
    setTimeout(() => {
        awal.style.pointerEvents = `none`;
        awal.style.opacity = `0`;
        lagu.play();
        lagu.currentTime = `0gi`;
        lagu.volume = `1`;
    }, 100);
}

awal.addEventListener(`click`, tampil);