// Value cannot be changed

// Block scope

// Best for fixed data


// A constant is a type of variable whose value cannot be changed.

// In JavaScript, we use the const keyword to create constants.

// A const variable has block scope, which means it is only accessible within that block.

// When declaring a variable using const, we must assign a value immediately; otherwise, it will generate an error.



// example

// const name ="utsav";

// function personDetaile(){

// const persone="kalathiya utsav";

// console.log("person details====>",person);

// function personage(){
//     const age="20";

//     console.log("age",age)
// }
//  personage();

//   // This will generate a ReferenceError because age is not accessible here
//   // console.
//   // 
//   log("person age will not be accessible here =>", age);
// }   

// personDetaile();




// Re-declaring or changing a const variable is not allowed
const num = 24;
// const num = 10; // This will generate a SyntaxError

// We must initialize a const variable during declaration; otherwise, it will generate an error
// const student; // SyntaxError: Missing initializer in const declaration
// student = "evan";  // Not possible

const student = {
  name: "uk",
};

console.log(student.name);

student.name = "xyz";

console.log(student.name);