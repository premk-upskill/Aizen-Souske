const button = document.getElementById("play");

const audio = new Audio("yamete_kudasai.mp3");

button.addEventListener("click", () => {
    audio.currenttime=0;
    audio.play();
    button.style.backgroundColor = "gray";
});

