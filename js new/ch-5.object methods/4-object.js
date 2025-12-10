// In JavaScript, objects can be created using a class constructor or object literals.
// A class constructor sets values using the constructor() method, and new objects are created using the new keyword.
// Objects can also be merged using the spread operator (...), which combines properties of two objects into one.
// To find the number of properties in an object, we use Object.keys(object).length, which returns the total count of keys.

const personDetails ={
      constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
      }
}


const person = new personDetails("utsav", 20, "software developer");

console.log("pe")
