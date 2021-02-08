const WHEEL_COUNT = 5;



document.getElementById('start-btn').addEventListener('click', () => {

    let counter = 0;

    while (counter < WHEEL_COUNT) {
        const newWheel = document.createElement('div');
        newWheel.className = `wheel result-${counter}`;
        document.getElementById('wheels').append(newWheel);
        counter++;
    }


})