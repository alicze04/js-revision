/*1. Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38*/


switch (new Date().getDay()) {
    case 0: 
    day = "Sunday";
    break;

    case 1:
    day = 'Monday';
    break;

    case 2:
    day = 'Tuesday';
    break;

    case 3:
    day = 'Wedenesday';
    break;

    case 4:
    day = 'Thursday';
    break;

    case 5: 
    day = 'Friday';
    break;

    case 6:
    day = "Saturday";
    break;
}


let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();



document.getElementById('tellDay').innerHTML = "Today is"  + " " +  day;
document.getElementById('tellTime').innerHTML = hours + ":" + minutes + ":" + seconds;
