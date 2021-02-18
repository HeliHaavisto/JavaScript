let userDate = 0;



document.getElementById('button').addEventListener('click', () => {

    let text = document.querySelector("p");
    userDate = document.getElementById('date').value;
    let endDate = new Date(userDate);
    let startDate = new Date(document.getElementById('dateStart').value);
    var numWorkDays = 0;

    function getNumWorkDays(startDate, endDate) {
        Date.prototype.addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        };
        var currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
                numWorkDays++;
            }
            currentDate = currentDate.addDays(1);
        }
        return numWorkDays;

    }
    let dateWanted = (endDate - startDate);
    let differenceInDays = dateWanted / (1000 * 60 * 60 * 24);
    let tapahtuma = document.getElementById('name').value;
    text.textContent = ("There are " + Math.floor(differenceInDays) + " days left and " + getNumWorkDays(startDate, endDate) + " workdays left until " + tapahtuma);

    // countdown starts here ->
    let countDownDate = endDate.getTime();
    let x = setInterval(function () {

        let now = new Date().getTime();
        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("counter").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("counter").innerHTML = "Expired";
        }

    }, 1000);
    document.getElementById("dateStart").value = '';
    document.getElementById("date").value = '';
    document.getElementById("name").value = '';


});
document.getElementById('reset').addEventListener('click', () => {

    location.reload();
});





