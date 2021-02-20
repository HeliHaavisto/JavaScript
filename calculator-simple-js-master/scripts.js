const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.buttons');
const display = document.querySelector('.calculator_display');
const previousKeyType = calculator.dataset.previousKeyType

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {

        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;


        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
            calculator.dataset.previousKey = 'number';
        }
        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            } else if (previousKeyType === 'operator' ||
                previousKeyType === 'calculate'
            ) {
                display.textContent = '0.';
            }

            calculator.dataset.previousKey = 'decimal';
        }
        /**
         * performing calculation
         * @param {firstValue} n1 
         * @param {*} operator 
         * @param {secondValue} n2 
         */
        const calculate = (n1, operator, n2) => {
            let result = '';

            if (operator === 'add') {
                result = parseFloat(n1) + parseFloat(n2);
            } else if (operator === 'subtract') {
                result = parseFloat(n1) - parseFloat(n2);
            } else if (operator === 'multiply') {
                result = parseFloat(n1) * parseFloat(n2);
            } else if (operator === 'divide') {
                result = parseFloat(n1) / parseFloat(n2);
            }
            return result;
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
                const calcValue = calculate(firstValue, operator, secondValue);
                display.textContent = calcValue;
                calculator.dataset.firstValue = calcValue;
            } else {
                calculator.dataset.firstValue = displayedNum;
            }

            key.classList.add('active');
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
            display.textContent = '';
        }
        if (action === 'clear') {
            calculator.dataset.firstValue = '';
            calculator.dataset.modValue = '';
            calculator.dataset.operator = '';
            calculator.dataset.previousKeyType = '';
            display.textContent = 0;
            calculator.dataset.previousKeyType = 'clear';
        }

        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('active'))



        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            console.log(firstValue, operator, secondValue);

            if (firstValue) {
                display.textContent = calculate(firstValue, operator, secondValue);
            }
            calculator.dataset.previousKeyType = 'calculate';
        }




    }
})





