// JavaScript Template Literals (Template Strings)
// JavaScript template literals are strings that allow us to embed 
// variables or expressions directly within them. They are enclosed in backticks ``.

// example


const greeting = (name)=>{

    console.log(`hello ${name}`);
}


console.log("utsav");


// example with  expressions


const  a = 5;
const b = 10;


console.log(`the sum of ${a} and ${b} is ${a + b}.`)

// multiple string example


const multiLineString = `This is a string
that spans across
multiple lines.`;
console.log(multiLineString);


// example with multiple teplete


const nested = (name , age) =>{
    return `my name is${name} and i am ${age} year old ${
        age >= 18 ? `I am an adult.` : `I am a minor.`
    }`
}


console.log(nested("utsav", 20))
console.log(nested("sanga", 50))



// tagged templates literals

// Tagged templates are an advanced form of template literals in JavaScript. They allow you to parse template literals with a function.

// Furthermore, you don't need to use parentheses () when passing the template literal to the function. For example,


const play =(game) =>{

    console.log(`i am playing ${game}`)
}

play(`GTA-5`)

