let scoredisplay = document.querySelector("#score");
let overlay = document.getElementById("infobox");
let buttons = document.querySelectorAll(".buttons");

let close = document.getElementById("close");

let active = 0;

let score = 0;


document.getElementById("one").onclick = function () {
    clicked(1);
};
document.getElementById("two").onclick = function () {
    clicked(2);
};
document.getElementById("three").onclick = function () {
    clicked(3);
};
document.getElementById("four").onclick = function () {
    clicked(4);
};

const clicked = (i) => {
    console.log("clicked ", i);
    score++;
    scoredisplay.textContent = "Your score is" + score;
}
let position = Math.floor(Math.random() * 5);

const startGame = () => {

    let nextActive = pickNew(active);

    buttons[nextActive].classList.toggle("active");
    buttons[active].classList.remove("active");

    active = nextActive;

    timer = setTimeout(startGame, 1000);

    // if (clicked(i) !== position) {
    //     endGame();
    // }

    function pickNew(active) {
        let nextActive = position;
        // if (nextActive != active) {
        //     return nextActive;
        // } else {
        //     return pickNew(active);
        // }

    }

};

document.getElementById("start").addEventListener("click", startGame);



const endGame = () => {
    clearTimeout(timer);
    overlay.style.visibility = "visible";
    overlay.textContent = "Your score is " + score;
};

document.getElementById("stop").addEventListener("click", endGame);

const reloadGame = () => {
    window.location.reload();
};

close.addEventListener("click", reloadGame);



