// Classes in JavaScript are a blueprint for creating objects, introduced in ES6.
// They encapsulate data and behavior by defining properties and methods,
// enabling object-oriented programming. Classes simplify the creation of objects
// and inheritance, making code more organized and reusable.

// JavaScript classes are templates for JavaScript objects.
// A JavaScript class is not an object; it is a template for creating objects.

// example


class car{
    constructor(brand,model){

        this.brand = brand;
        this.model = model;
    }
}

let carOne = new car("BMW", "M5");

console.log("car one details",carOne)

console.log("car one ty",typeof carOne)

// anothr example


let cartwo = new car("kia", "tata nexon")


console.log("car two de",cartwo)

// Here, the Car class is a blueprint for creating car objects.
// The constructor method initializes properties in the car objects.

// carOne is an instance of the Car class.