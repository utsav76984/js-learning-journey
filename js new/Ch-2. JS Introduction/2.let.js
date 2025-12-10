// New and better version of var

// Can change value

// Has block scope ({} ni andar work)


// let has a block scope which means variable define 
// using let can only be accessed in block it's not accessible outside of block


function studentInfo() {
    let name = "Utsav";
    let course = "JavaScript";

    console.log("Name:", name);
    console.log("Course:", course);
}

studentInfo();  // calling the function

 // Trying to access blockMessage outside the block will cause an error
  // console.log(blockMessage); // ReferenceError: blockMessage is not defined


  
// using let we can declare variable and assign it later
// example ( to check this you have to comment  reference error code )

// variable declaration
let person;

// assigning value to the variable

person = "kalathiya utsav";

console.log("here variable value will be =>", person);
// we can variable value

person = "another person";

console.log("here variable value will be changed =>", person);


