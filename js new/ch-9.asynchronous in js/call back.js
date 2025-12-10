// diagram for Callback Function

// const { useCallback } = require("react");



// ┌──────────────────────────┐
// │      Main Function       │
// │  (takes callback as arg) │
// └───────────┬──────────────┘
//             │ passes callback
//             ▼
//    ┌───────────────────────┐
//    │   Do some work...     │
//    │ (async task / delay)  │
//    └───────────┬───────────┘
//                │ after finishing
//                ▼
//      ┌─────────────────────┐
//      │   Callback Runs     │
//      │ (second function)   │
//      └─────────────────────┘



// ✅ Callback Functions (Short Notes)


// Callbacks are most useful in asynchronous functions,
// where one function needs to wait for another to finish (like loading a file).

// If you want the next line of code to run only after a previous task completes,
// use a callback function.

// A callback is a function passed as an argument to another function.
// By using callbacks, JavaScript can perform asynchronous tasks smoothly.

// A callback function runs only after the parent function finishes its work.

// IMPORTANT:
// When passing a function as an argument, DO NOT use parentheses.


// Callback example

function callback(result){
    console.log("the total sum of number is :", result);
}

function totalsumnumber(a, b, callback){
    let result = a + b;
    callback(result);   // ✔ correct function name
}

totalsumnumber(10, 20, callback);


//another example

function showMessage(callback) {
  setTimeout(() => {
    console.log("Task complete!");
    callback();
    
  }, 2000);
}

function finish() {
  console.log("Now callback is called!");
}

showMessage(finish);
