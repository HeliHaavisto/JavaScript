let scoredisplay = document.querySelector("#score");
let overlay = document.getElementById("infobox");

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

}



