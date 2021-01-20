let chosenNumber = Math.floor(Math.random()*2) + 0 ;

// I know I need a loop here but it didint work

let counter=0;

console.log(chosenNumber);
chosenNumber = Math.floor(Math.random()*2) + 0 ;
if (chosenNumber==1) {
    counter++;
}
console.log(chosenNumber);
chosenNumber = Math.floor(Math.random()*2) + 0 ;
if (chosenNumber==1) {
    counter++;
}
console.log(chosenNumber);
chosenNumber = Math.floor(Math.random()*2) + 0 ;
if (chosenNumber==1) {
    counter++;
}
console.log(chosenNumber);
chosenNumber = Math.floor(Math.random()*2) + 0 ;
if (chosenNumber==1) {
    counter++;
}
console.log(chosenNumber);
chosenNumber = Math.floor(Math.random()*2) + 0 ;
if (chosenNumber==1) {
    counter++;
}
if (counter==5) {
    console.log("You won a jackpot, your winning probability was " + 2**5)
} else if(counter=0) {
    console.log("You got fice zeros which is hard")

}


