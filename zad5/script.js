// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.




// var element = document.getElementById('toBeChanged');

// var text = element.firstChild.data; //w3resource

// var newText = text[text.length -1] + text.substring(0, text.length - 1);

// var newString = "";

// i tu sie zacielam, bo nie wiem jak ma za kazdym razem ucinac litere z tylu i dodac do przodu...W tym kodzie (podpatrzylam) ktos uzyl animacji. Czy o to chodzilo. czy moge to zrobic za pomoca petli?

// function rotateLetter () {
//    for (var i=0; i < newText.length; i++) {
//     newString += newText;
  
//    }

// }

// Widzialam takie rozwiazanie i wydalo mi sie najprostsze, ale nadal nie 'rotuje' liter. NewStr jest ciagle taki sam.....
var myStr = "w3resource";
var myArr = Array.from(myStr);
var newArr = [];
for (let i = 0; i < myStr.length; i++) {
newArr.push(myArr.pop())[i];

}
newStr = newArr.join("");
console.log(newStr);






