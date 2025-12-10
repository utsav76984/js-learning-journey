
// A string in JavaScript is a sequence of characters used to represent text.
// It can include letters, numbers, symbols, and spaces, and is always written inside quotes ("" or '' or ``).


let name="utsav"; // string

//string method example

let text="kalathiya utsav";

console.log("text:",text);

// charAt() method ⇒ returns the character at the specified index (position), starting from 0.


console.log("char at:" + text.charAt(6));

// concat() method ==> returns two or more joint strings

console.log("joint strings", text.concat("good"));

// endsWith() method ==> returns true if the string ends with a specified value

console.log("ends whith :" + text.endsWith("s"));

