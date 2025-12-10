// accessing object properties

let studentdatails ={

    name: "utsav",
    age: "19",
    std: "BCA"
}

console.log("studentdatails:",studentdatails)

// now accessing the values of personDetails object using . notation

//  Modifying Object Properties using . notation we can modify using brackets too,

studentdatails.name = "akshay";

// using brackets notation

studentdatails["name"] = "akshay";


console.log("studentdatails", studentdatails)


//  Adding Properties to an Object using brackets notation too.

studentdatails.email = "email@example.com";

console.log("person details object  with all changes:", studentdatails);
