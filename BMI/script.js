function calculate () {

    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);
    
    let answer =document.getElementById("answer");
    

    let bmi = Math.floor(weight /(height/100)**2  );

    if (bmi < 18.5) {

        answer.textContent= bmi + " underweight";

    } else if ( bmi < 24.9) {


        answer.textContent= bmi + " normal weight";

    } else if ( bmi < 29.9) {

        answer.textContent= bmi + " overweight";

    } else {

        answer.textContent= bmi + " obese";
    }
    


}