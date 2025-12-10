

// Symbol is a unique and hidden value used as a special key in objects to avoid name conflicts

let massage1 =Symbol("hello")


let massage2 = Symbol("hello")


console.log(massage1 === massage2);


//          ┌──────────────────────────┐
//          │        Symbol("hello")    │
//          └──────────────────────────┘
//                     ↓  unique
//          ┌──────────────────────────┐
//          │        Symbol("hello")    │
//          └──────────────────────────┘

//  Result:  message1 === message2 → FALSE


massage1 = ("hello")

massage2 = ("hello")

console.log(massage1 === massage2)



// const num= Symbol(1425366)
//          ┌──────────────────────────┐
//          │        "hello" (string)   │
//          └──────────────────────────┘
//                     ↓  same value
//          ┌──────────────────────────┐
//          │        "hello" (string)   │
//          └──────────────────────────┘

//  Result: message1 === message2 → TRUE


const num = Symbol(123456)

console.log(typeof num)     // "symbol"
console.log(num)            // Symbol(123456)
console.log(num.description)// 123456


const id = Symbol("id")

let personDetail = {
    id: 1,
    name: "alice",
    [id]: 100
}



console.log(personDetail)


 for(let key in personDetail){
    console.log([key],personDetail[key])
 }
