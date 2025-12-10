// In JavaScript, there are a total of 8 data types

// 1. String
// 2. BigInt
// 3. Number
// 4. Boolean
// 5. Object
// 6. Null
// 7. Undefined
// 8. Symbol

/*

Data Type     Description                                          Example
String        Textual data.                                        'hello', "hello world!", etc.
Number        An integer or a floating-point number.               3, 3.234, 3e-2, etc.
BigInt        An integer with arbitrary precision.                 900719925124740999n, 1n, etc.
Boolean       Any of two values: true or false.                    true, false
Undefined     A variable that has not been initialized.            let a;
Null          Represents a null value.                             let a = null;
Symbol        Unique and immutable identifiers.                    let value = Symbol('hello');
Object        A collection of key-value pairs.                     let student = { name: "John" };

*/


// 📌 Primitive  Types: Stored in stack, immutable, passed by value.
// Example: String, Number, Boolean, Null, Undefined, Symbol, BigInt.


let a ="utsav";

let b = a;

b ="kalathiya";

console.log(a); //utsav
console.log(b);


// 📌 Non-Primitive  Types: Stored in heap, mutable, passed by reference.
// Example: Object, Array, Function.

// let obj1 = { name: "Shivam" };
// let obj2 = obj1; // Reference is copied

// obj2.name = "Rishiraj";

// console.log(obj1.name); // "Rishiraj" (affected due to reference)
// console.log(obj2.name); // "Rishiraj"

// Example with types

// We can check the data type using the `typeof` operator.



// ============================example=======================================

// 1 string example



let greetings = "Hello";
console.log("greetings: " + greetings);


// check typeof


let greetingstypes = typeof greetings;
console.log("greetings", greetings);


// 2 number example

let age ="20";
console.log("age", age);

console.log("age", typeof age);



// 3 bigint example

let bignumber ="944449741488524481457";

console.log("bignumber", + bignumber);

console.log("types of bignumber", typeof bignumber);


// 4 Boolean example

let isstudent ="true";

console.log("isstudent", isstudent);

console.log("isstudent", typeof student);


// 5. Undefined Example
let uninitialized;
console.log("uninitialized: " + uninitialized);
console.log("Type of uninitialized:", typeof uninitialized);

// 6. Null Example
let emptyValue = null;
console.log("emptyValue: " + emptyValue);
console.log("Type of emptyValue:", typeof emptyValue);

// 7. Symbol Example
let uniqueID = Symbol("id");
console.log("uniqueID: " + uniqueID.toString());
console.log("Type of uniqueID:", typeof uniqueID);

// // 8. Object Example
// let student = { name: "John", age: 22 };
// console.log("student: ", student);
// console.log("Type of student:", typeof student);

