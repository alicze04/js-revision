// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
//Nie doszłam niestety do tego sama ale bardzo spodobał mi się ten kod. Ja próbowałam z pętlami i dwa razy nawet zawiesiłam komputer : P A tu nawet żadnej pętli nie ma! 


let myAnimation = setInterval(rotateLetters, 1000);

let string = 'w3resource';
let newString = string.split("");


function rotateLetters () {
   
    let letter = newString.pop();
    let addLetter = newString.unshift(letter);
    let newWord = newString.join("");
document.getElementById("toBeChanged").innerHTML = newWord;
}














