// To overcome callback hell, you can use Promises. Promises provide a cleaner and more manageable way to handle asynchronous operations by chaining .then() and handling errors with .catch(). This improves readability and maintains vertical code flow instead of horizontal nesting.

// the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// promise as an object that links producing code and consuming code

// In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

// A promise may have one of three states.

// Pending
// Fulfilled
// Rejected

// To create a promise object, we use the Promise() constructor.

// let promise = new Promise(function(resolve, reject){
// do something
// });

// The Promise() constructor takes a function as an argument. The function also accepts two functions resolve() and reject().

// If the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() function is called.



// *****************************************example******************************************************



// diagram


//     [Pending]
//    │
//      │ resolve(value)
//    ▼
// [Fulfilled / Resolved]  (value available)
//    ▲
//    │
//    │ reject(reason)
//    ▼
// [Rejected]              (error / reason)



let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task completed!");
    } else {
        reject("Task failed!");
    }
});


myPromise
  .then((result) => {
    console.log(result); // success
  })
  .catch((error) => {
    console.log(error); // failure
  });



//   ******************************example 2*************************************************


function uploadImage(file) {
  return new Promise((resolve, reject) => {
    let uploaded = true;

    if (uploaded) resolve("Image uploaded successfully");
    else reject("Upload failed");
  });
}

uploadImage("image.jpg")
.then(res => console.log(res))
.then(err => console.log(err))


const




