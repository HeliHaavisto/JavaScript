function calculate() {


    let numero = Number(document.getElementById("Numero").value);
    let answer =document.getElementById("answer");

    

    if ((numero % 2) == 0 ) {

        answer.textContent= numero + " is even number";

    } else {


        answer.textContent= numero + " is odd number";
    }
}