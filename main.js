let awal = document.querySelector(`.awal`);
let container = document.querySelector(`.container`);
let lagu = new Audio(`sorry.mp3`);

function tampil() {
    awal.style.opacity = `0`;
    awal.style.visibility = `hidden`;
    awal.style.pointerEvents = `none`;
    container.style.display = `flex`;
    

    setTimeout(() => {
        awal.style.display = `none`;
        container.style.opacity = `1`;
        container.style.visibility = `visible`;
        lagu.play();
        lagu.currentTime = `3.5`;
        lagu.volume = `1`;
    }, 500);
}

awal.addEventListener(`click`, tampil);