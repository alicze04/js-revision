/*3. Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy*/
let paragraph = document.getElementById("displayDate");

let date = new Date();
let day = new Date().getDate();
let month = new Date().getMonth() +1;
let year = new Date().getFullYear();
let newDate = day + "." + month + "." + year;

function showDate () {
    document.getElementById("displayDate").innerHTML = newDate;
}

