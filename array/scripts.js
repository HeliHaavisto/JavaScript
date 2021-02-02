let roundCounter = 0;

while (true) {

    let lista = [];

    for (let i = 0; i < 5; i++) {

        let luku = Math.floor(Math.random() * 6);
        lista.push(luku);

    }

    console.log(lista);

    let x = 0;
    let counter1 = 0;
    let counter2 = 0;

    while (x < 5) {

        // Jackpot is now coming with five ones , if wanted to have with five fives, just set next if to 5

        if (lista[x] == 1) {

            counter1++;

        } else {

            counter2++;
        }

        x++;

    }



    if (counter1 == 5) {

        console.log("Jackpot!");

        break;

    } else if (counter2 == 5) {

        console.log("Congratulations!");

    } else if (counter1 == 4) {

        console.log("smaller price");
    }

    roundCounter++;

}

let result = Number(roundCounter) * 0.5;

console.log("money spent " + result);

if (result < 30000) {

    console.log("You profit " + (30000 - result));

} else {

    console.log("You lose  " + (result - 30000));

}