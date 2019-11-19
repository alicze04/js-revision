//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
//Jest tylko funkcja ale chcialabym zeby uzytkownik wpisal rok do pola input i wyskoczyl mu alert czy to jest Leap Year czy nie...Czy wtedy jest potrzebny PHP?

// var year = "";
// let year = document.getElementById("year");
let inp = document.getElementById("inp");
let year = inp.value;
let button = document.getElementById("btn");


button.onclick = function isLapYear(year) {

if (year % 4 == 0) {
    alert(year + " is a Leap Year")
} 

else {
    alert(year + " is not a Leap Year")
}

}

// button.onclick = isLapYear(inp.value);
// button.onclick = document.getElementById("inp").value = isLapYear(inp.value); 