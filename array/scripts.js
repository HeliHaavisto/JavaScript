document.getElementById('start-btn').addEventListener('click', () => {
    const numberOfRolls = 5;
    const numberOfPictures = 7;

    let counter = 0;
    for (let i = 0; i < numberOfRolls; i++) {
        const drawnNumber = Math.floor(Math.random() * numberOfPictures);

        if (drawnNumber == 0) {
            counter++;
        }

        document.getElementById(`wheel-${i}`).className = `wheel result-x`;


        setTimeout(function () {

            document.getElementById(`wheel-${i}`).className = `wheel result-${drawnNumber}`;

        }, 1000)

    }

    if (counter == 5) {
        alert("Jackpot!");
    }
})
