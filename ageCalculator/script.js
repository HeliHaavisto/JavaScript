
function calculate() {
    


let age = Number(document.getElementById("age").value);

let answer =document.getElementById("answer");

if (age < 18) {

    answer.textContent= "You are too young";

} else if (age < 27) {

    answer.textContent= "Right age for military service";

} else if (age < 41) {

    answer.textContent="You are in reserve";

} else if (age < 55) {

    answer.textContent="You are in backup reserve";

} else {

    answer.textContent="Too aged."

}

}