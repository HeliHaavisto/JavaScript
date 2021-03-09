let buttons = document.querySelectorAll(".circle");
let scoredisplay = document.querySelector("#score");
let overlay = document.getElementById("result");
let gameover = document.getElementById("gameover");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let mySound;
let voiceOn;

let close = document.getElementById("close");

let score = 0;
let active = 0;





const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
let timeset = 1500;
mySound = new sound("16 Powerful Mario.mp3");

const startGame = () => {
    console.log("Game started");
    start.style.visibility = "hidden";
    stop.style.visibility = "visible";
    //making each button clickable again
    buttons.forEach(el => {
        el.style.pointerEvents = "auto";
    });
    voiceOn = setTimeout(mySound.play(), timeset);


    let nextActive = pickNew(active);

    buttons[nextActive].classList.toggle("active");
    buttons[active].classList.remove("active");



    // moved all below here 

    buttons[0].onclick = function () {
        clicked(0);
    };
    buttons[1].onclick = function () {
        clicked(1);
    };
    buttons[2].onclick = function () {
        clicked(2);
    };
    buttons[3].onclick = function () {
        clicked(3);
    };
    // added in clicked function that if you press wrong button, game ends
    const clicked = (i) => {
        console.log("clicked:", i);
        if (i != nextActive) {
            endGame();
        } else {
            score++;
            scoredisplay.textContent = `Your score is ${score}`;
            clearTimeout(checker);
        }
    };
    //ckecking if not pressed 3 times
    checker = setTimeout(endGame, timeset * 3)

    active = nextActive;

    console.log("Active:", active);

    // added timeset to tighten the time, timeset defined outside the function


    timer = setTimeout(startGame, timeset);
    timeset = timeset - 100;


    function pickNew(active) {
        let nextActive = getRandomInt(0, 3);

        if (nextActive != active) {
            return nextActive;
        } else {
            return pickNew(active);
        }
    }
};

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

const endGame = () => {
    clearTimeout(timer);
    mySound.stop();
    console.log("Game over");
    overlay.style.visibility = "visible";
    if (score == 0) {
        gameover.textContent = `Your score is ${score} , you can do better, try again!`;
    } else if (score < 5) {
        gameover.textContent = `Your score is ${score} , good, getting there!`;
    } else {
        gameover.textContent = `Your score is ${score} , well done, this is tricky game!`;
    }

    mySound = new sound("26 Game Over.mp3");
    mySound.play();
};

const reloadGame = () => {
    console.log("what?");
    window.location.reload();
};

close.addEventListener("click", reloadGame);

