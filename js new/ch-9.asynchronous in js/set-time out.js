// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.

// The commonly used syntax of JavaScript setTimeout is:

// setTimeout(function, milliseconds);
// Its parameters are:

// function - a function containing a block of code
// milliseconds - the time after which the function is executed
// The setTimeout() method returns an intervalID, which is a positive integer.

// ************************************example 1********************************************


// diagram

//  ┌──────────────────────────────┐
//  │        greeting()            │
//  └──────────────┬──────────────┘
//                 │
//                 ▼
//      console.log("greeting function...")
//                 │
//                 ▼
//        setTimeout(..., 5000 ms)
//                 │
//                 │  (JavaScript engine continues)
//                 │
//     ───────────── 5 seconds pass ────────────────
//                 │
//                 ▼
//        console.log("hello")


const greeting =()=>{
     console.log("greeting function Op will print hello after 5 seconds");

     setTimeout(() => {
        console.log("hello")
     }, 1000);
}

greeting();




// **************************************example 2****************************************************************

// diagram 2

//  ┌──────────────────────────────┐
//  │       currentYear()          │
//  └──────────────┬──────────────┘
//                 │
//                 ▼
//      console.log("checking current Year")
//                 │
//                 ▼
//        setTimeout(..., 5000 ms)
//                 │
//                 │  (JavaScript does other work)
//                 │
//     ───────────── 5 seconds pass ────────────────
//                 │
//                 ▼
//   new Date().getFullYear() → e.g., 2025
//                 │
//                 ▼
//      console.log("current Year: 2025")



const currentyear = () => {
    console.log("checking current year");

    setTimeout(() => {

        let currentYear = new Date().getFullYear();
        console.log("current year:", currentYear);

    }, 2000);
};

currentyear();
