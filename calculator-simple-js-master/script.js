let firstNumber = '0';
let secondNumber = '0';
let operation = '';

document.getElementById("result").addEventListener("click", performCalculation);

document.querySelectorAll('.operators > div').forEach(button => {
    button.addEventListener("click", function () {
        updateSelectedOperation();
        document.getElementById('input').innerText = operation;
    })
})

document.querySelectorAll('.numbers > div').forEach(button => {
    button.addEventListener("click", function () {
        updateSelectedNumber();
        document.getElementById('input').innerText = firstNumber;
    });
})

// function updateDisplay() {
//     document.getElementById('input').innerText = `${firstNumber} ${operation} ${secondNumber}`;
// }

/**
 * update the selected number 
 * @return firstNumber
 */

function updateSelectedNumber() {
    if (this.innerText === '.') {
        if (firstNumber.indexOf('.') > -1) {
            return;
        }
    }
    console.log(this.innerText);
    firstNumber += this.innerText;
}

/**
 * update the variable operation with the user choice
 * @return {void}
 */
function updateSelectedOperation() {
    secondNumber = firstNumber;
    firstNumber = '';
    console.log(this.innerText);
    switch (this.innerText) {
        case '+':
            operation = 'plus';
            break;
        case '-':
            operation = 'minus';
            break;
        case 'x':
            operation = 'multiply';
            break;
        case '÷':
            operation = 'divide';
            break;
        default:
            console.log("What?");
            break;

    }
}

/**perform calculation
 * @return{number} result of the calculation
 */
function performCalculation() {
    if (operation === 'plus') {
        document.getElementById('input').innerText = firstNumber + secondNumber;
    }
    else if (operation === 'minus') {
        document.getElementById('input').innerText = secondNumber - firstNumber;
    }
    else if (operation === 'multiply') {
        document.getElementById('input').innerText = firstNumber * secondNumber;
    }

    else if (operation === 'divide') {
        document.getElementById('input').innerText = secondNumber / firstNumber;

    }
}

