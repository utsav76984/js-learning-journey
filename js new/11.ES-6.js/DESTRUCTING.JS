
// JavaScript Destructuring
// The destructuring assignment introduced in ES6 makes it easy to assign array values and object properties to distinct variables. For example,

// example

// traditional method


const persone = {

    name: "utsav",
    surname: "kalathiya",
    age: "20",
    email: "ukalathiya54@gmail.com"

}

//// now if i want to access properties of person object

console.log(persone.name);
console.log(persone.surname);
console.log(persone.age);
console.log(persone.email);


// using the destructuring assignment

let { name, surname, email ,age} = persone;

console.log(name);
console.log(surname);
console.log(age);
console.log(email);

// Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, , fourth] = numbers;

console.log("Array Destructuring:");
console.log(first); // 1
console.log(second); // 2
console.log(fourth); // 4


// Nested Object Destructuring


const user ={

    id: "111",
    name: "utsav",

    address: {
    city: "New York",
    zip: "10001",
  },
};



const {
  name: userName,
  address: { city, zip },
} = user;



console.log("Nested Object Destructuring:");
console.log(userName); // John Doe
console.log(city); // New York
console.log(zip); // 10001