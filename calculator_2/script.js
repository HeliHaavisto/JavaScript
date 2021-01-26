function calculate() {

let eka = Number(document.getElementById("Eka").value);
let toka = Number(document.getElementById("Toka").value);
let kolmas = Number(document.getElementById("Kolmas").value);
let answer =document.getElementById("answer");
let answer2 =document.getElementById("answer2");

if ( (eka > 0) || (toka > 0) || (kolmas > 0)) {

    answer.textContent= eka + toka + kolmas;

    if ( (eka > 0) && (toka > 0) && (kolmas > 0)) {

        answer.textContent="summa " + (eka + toka + kolmas);

        answer2.textContent="kertolasku " + eka * toka * kolmas;

    }

}  else if ( (eka < 0) && (toka < 0) && (kolmas < 0)) {

    answer.textContent= " only negatives";

}

}