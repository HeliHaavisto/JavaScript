function calculate () {

    let salary = Number(document.getElementById("salary").value);
    let hours = Number(document.getElementById("hours").value);
    
    let answer =document.getElementById("answer");

    let x = salary * hours;

    if (hours < 7) {

        answer.textContent= x;

    } else if ((hours >= 7)  && ( hours < 9)) {

        answer.textContent= x + (9 - hours) * 0,5 * salary;

    } else {

        answer.textContent= x + (9 - hours) * 0,5 * salary + (hours - 9) * 1 * salary;
    }





}