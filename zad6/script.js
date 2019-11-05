//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
//Jest tylko funkcja ale chcialabym zeby uzytkownik wpisal rok do pola input i wyskoczyl mu alert czy to jest Leap Year czy nie...Czy wtedy jest potrzebny PHP?

var year = "";

function isLapYear(year) {

if (year % 4 == 0) {
    alert(year + " is a Leap Year")
} 

else {
    alert(year + " is not a Leap Year")
}
}

// document.getElementById("checkIfLapYear").value = isLapYear(input.value); 