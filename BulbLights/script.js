let NUMBER_OF_BULBS = 50;
let BLINKING_SPEED = 500;
const CHOSEN_BULB_INDEX = 10;

console.log(BLINKING_SPEED);


let bulbs = [];
let counter = 0;

let text = document.querySelector("p");

document.getElementById('start-btn').addEventListener('click', () => {
    BLINKING_SPEED = document.getElementById('interval').value;
    NUMBER_OF_BULBS = document.getElementById('bulbCount').value;


    while (counter < NUMBER_OF_BULBS) {
        const newEl = document.createElement('div');
        newEl.className = 'bulb';
        document.getElementById('bulbs').appendChild(newEl);
        bulbs[counter] = false;
        counter++;
    }



    counter = 0;
    bulbs[CHOSEN_BULB_INDEX] = true;
    console.log(bulbs);

    document.getElementsByClassName('bulb')[CHOSEN_BULB_INDEX].classList.add('chosen');



    let blink = setInterval(() => {
        bulbs[counter] = false; // switch off the current bulb
        document.getElementsByClassName('bulb')[counter].classList.remove('active');


        // if value of counter is not yet the index of the last bulb
        if (counter < NUMBER_OF_BULBS - 1) {
            counter++; // calculate the index of next bulb

        } else { // reached the end of the array   
            counter = 0; // reset counter to the index of the first bulb

        }

        bulbs[counter] = true; // switch it on
        document.getElementsByClassName('bulb')[counter].classList.add('active');

    }, BLINKING_SPEED)

    document.getElementById('stop-btn').addEventListener('click', () => {
        // TODO: stop the blinking and announce if user has won the game
        clearInterval(blink);
        if (counter == CHOSEN_BULB_INDEX) {

            text.textContent = ("you won");

        } else {

            text.textContent = ("no win");

        }

    })

    const arrangeBulbsInACircle = nodes => {
        const radius = '30em',
            start = -90,
            $els = [...nodes], // turn nodelist into a real array
            numberOfEls = $els.length,
            slice = 360 / numberOfEls,
            index = 0;

        $els.forEach((el, index) => {
            const rotate = slice * index + start;
            const rotateReverse = rotate * (-1);

            el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
        })
    }

    // invoke the fn on the class bulb elements to create the effect
    arrangeBulbsInACircle(document.getElementsByClassName('bulb'));

})