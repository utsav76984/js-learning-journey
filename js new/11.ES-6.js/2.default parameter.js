// We can pass default parameter in our function

// Example 1
function Game(gameName = "cricket") {
    console.log("playing game:", gameName);
}

Game();  // uses default


// Another example


function game1(gameName = "kho kho") {
    console.log(`playing game: ${gameName}`);
}

game1();  // uses default


// if we provided a argument and also provided default parameter then it will take argument instead of default parameter value


// another  example


function game3(gameName1, gameName2 = "football") {
  console.log(
    `Right now i am  playing ${gameName1} then we will play ${gameName2}`
  );
}



game3("volleyball");


//example multiple defauil function


function greet(name ="utsav", greeting="hello"){

     console.log(`${greeting}, ${name}!`);
}

greet()
greet("parth");
greet("kevin");



// example with default parameter as an object


function displayPlayer(player = { name: "Unknown", age: 0 }) {
  console.log(`Player: ${player.name}, Age: ${player.age}`);
}





displayPlayer();
displayPlayer({ name: "John", age: 25 });