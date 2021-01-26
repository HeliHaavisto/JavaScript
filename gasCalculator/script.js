// function hello() {
//     alert("Hello, my name is Heli");
//     whoAreYou();
// }

// function whoAreYou() {
  
//   let yourname =  prompt("What is your name?");
//   greeting(yourname);
// }

// function greeting(name) {
//     document.write(name);
// }

// hello();

// function calculate() {
   
//    let price = Number(document.getElementById("Price").value);

//    let money = Number(document.querySelector("#money").value);

//    let answer =document.getElementById("answer");

//    console.log(price);
//    console.log(money);
//    console.log(price * money);
   
//    answer.textContent= money / price;
// }

calculate = () => {

    let price = Number(document.getElementById("Price").value);

   let money = Number(document.querySelector("#money").value);

   let answer =document.getElementById("answer");

   let teksti = document.getElementById("teksti");

   console.log(price);
   console.log(money);
   console.log(price * money);
   
   answer.textContent= money / price;

   if (money / price > 10)
   {
       teksti.textContent = "You can go far";
   } else {
       teksti.textContent = " You have to stay here";
   }
}