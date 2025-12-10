// JavaScript try...catch...finally Statement
// The try, catch, and finally blocks are used to handle exceptions (errors).

// Types of errors in programming:

// 1. Syntax Error
//    This error occurs when the code is written incorrectly.
//    Example: writing "cotsn" instead of "const" will throw a syntax error.

// 2. Runtime Error
//    This type of error occurs while the program is running.
//    Example: calling an invalid function or accessing an undefined variable.

// Errors that occur during runtime are called "exceptions".

// Example of runtime error:
// If we have not defined a function and we try to call it,
// like calling play(), it will cause a runtime error.

// The main code is placed inside the try block.
// If any error occurs while the try block is executing,
// the program flow immediately moves to the catch block.

// The catch block handles the error using the catch statements.

// If no error occurs, the try block runs completely,
// and the catch block is skipped.

// The throw statement allows you to create your own custom errors.

// The finally block always executes after try and catch —
// whether an error occurs or not.



function checkAtmPin(pin) {
  let userPin = 1234; // define pin here

  try {
    if (userPin === pin) {
      console.log("success!");
    } else {
      throw new Error("invalid pin");
    }
  } catch (error) {
    console.log(error.message);
  }
}

checkAtmPin(456); // function call outside



// ***************************************another example****************************************************





function checkPassword(passwold){
    try {
        if(passwold.length < 6){
            throw new Error("passwold to short");
        }
        console.log("passwold accpted");
    } catch (error) {
        
        console.log(error.message)
    }
}

checkPassword("12345");
checkPassword("123456");