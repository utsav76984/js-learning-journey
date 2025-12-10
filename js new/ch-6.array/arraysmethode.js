
// array in js

// array methodes

// push(); add to end

// pop(); deete


// 1 push methodes

let fooditems =["potato","apple","litchi","tomato"];


console.log("fooditems",fooditems);

fooditems.push("chips")


// 2 pop(); 

let deletedvel = fooditems.pop();


console.log("fooditems",fooditems)  



// 3 string 


let name =["utsav","parth","meet","nikunj"]

console.log("name:",name)

console.log("name",name, toString())


// 4 concat joind multiple arrays & retuns result


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = arr1.concat(arr2);

console.log(result);


// 5 unshif


let fruits=["apple","banana"];

fruits.unshift("mango");

console.log("fruits name", fruits)


//6 shif 


let fruitss = ["mango", "apple", "banana"];

let removed = fruits.shift();

console.log(removed);
console.log(fruitss);


// 7 slice

let arr = [10, 20, 30, 40, 50];

let resultt = arr.slice(1, 4);

console.log(resultt);


// 8 map

let numbers = [1, 2, 3, 4];

let resulttt = numbers.map(function(num) {
  return num * 2;
});

console.log(resulttt);


// 9 filter method

let bikes = [
  { name: "Splendor", price: 75000 },
  { name: "Shine", price: 90000 },
  { name: "Apache", price: 120000 },
  { name: "Royal Enfield Classic", price: 180000 }
];

let expensiveBikes = bikes.filter(bike => bike.price > 100000);

console.log(expensiveBikes);





