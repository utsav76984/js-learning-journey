
// JavaScript Revision

// All code executes in the global execution context (GEC).
// The GEC has two parts: memory and code.

// In the memory phase, variables and functions are stored.
// Variables are initially set to undefined, while functions are stored as-it-is.

var exampleVar;
function exampleFunc() {
  console.log("exampleFunc output:", "This is an example function.");
}


// JavaScript is a single-threaded synchronous language, meaning it executes one line at a time.


// all operation are performed in the call stack

// The GEC contains many smaller execution contexts based on our code.
// When a task is completed, it is popped off the call stack.


//Hoistring 

//