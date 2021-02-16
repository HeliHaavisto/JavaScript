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
});








