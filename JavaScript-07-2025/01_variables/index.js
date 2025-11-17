const OrderID = 'ORD123';
let Email = "imran@gmail.com";
var pass = "Delhi@44";

    // OrderID = "Reassign Variable" // that is not allowed reassign value
    Email = "manoj23@gmail.com"; // reassign
    pass = "UP#23" // reassign

console.log(OrderID);
console.log(Email);
console.log(pass);


// Hoisting Variable
// console.log(Name) // Hoisting Error Show
let Name = "Mohit";

// ek sath console kare ke lye console.table([]); ka paryog karan pade ga
console.table([OrderID,Email,pass,Name])

