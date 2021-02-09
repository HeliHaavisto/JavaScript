let text = document.querySelector("p");

// let car = {
//     type: "Audi", year: 2015, ownerName: "Heli", city: "Helsinki", calcAge: function () {
//         this.age = 2021 - this.year;
//         return this.age;

//     }
// }

// console.log(car);
// console.log(car.year);
// console.log(car.city);

// car.color = "red";

// text.textContent = `You car age is ${car.calcAge()}`;

function Car(license, maker, model, price, color) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.price = price;
    this.color = color;
    this.discount = function () {

        if (this.price > 20000) {
            return this.price * 0.75;

        } else if (this.price < 5000) {
            return this.price * 0.9;
        } else {
            return this.price * 0.85;
        }

    }
}
var cars = [];



document.getElementById("submit").addEventListener("click", () => {
    var addedCar = new Car(document.getElementById("license").value, document.getElementById("maker").value, document.getElementById("model").value, document.getElementById("price").value, document.getElementById("color").value);

    document.getElementById("license").value = "";
    document.getElementById("maker").value = "";
    document.getElementById("model").value = "";
    document.getElementById("price").value = "";
    document.getElementById("color").value = "";

    cars.push(addedCar);

    console.table(cars);
})

document.getElementById("track").addEventListener("click", () => {

    for (let i = 0; i < cars.length; i++) {
        const car = cars[i];
        if (car.license == document.getElementById("license").value) {

            text.textContent = `Your car maker is ${car.maker} and model is ${car.model} and discounted price is ${car.discount()}`
        }
    }


})
// text.textContent = `You car age is ${car.calcAge()}`;

// var myCar = new Car("Volkswagen", "2011", "Heli", "Vantaa");
// console.log(myCar);

// var hisCar = new Car("Volkswagen", "2021", "Jani", "Vantaa");
// console.log(hisCar);

