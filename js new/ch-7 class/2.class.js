

// normal example object

const person = {
  name: "utsav",
  surname: "kalathiya",
};

console.log("person details before: ", person);


// adding new age properties to the person object


person.age = 30;

console.log("person details after:", person)

// now with class example

class car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
}

const carOne = new car("BMW", "M5");

console.log("car details before: ", carOne);

// now i want to add properties in carOne object

carOne.color = "green";

console.log("car details after: ", carOne);

