console.log("functions.js file");

let name = "Michael";
let lastName = "Scott";
console.log("Hello " + name + " " + lastName + ", welcome to the JavaScript world!");

console.log(`Hello ${name} ${lastName} ${1+1}, welcome to the Javascript world!`);

// Function declaration
function sayHello(){
  console.log("Hello cohort 55");
}

// Call the function
sayHello();
sayHello();

// Example 2, with 1 parameter
function greet(name){
  console.log(`Hello ${name}, welcome!`)
}

greet("Roland");
greet("Joseph");

// Example 3, with 2 parameters
function greet2(name1, name2){
  console.log(`Hello ${name1} and ${name2}, welcome to your JS couse!`)
}

greet2("Roland", "Joseph");
greet2("Koiree", "Edward");
greet2("Leo", "Nar");

// Example 4, with prompt
function sayMyName(){
  let name2 = prompt("What is your name?");
  let age2 = prompt("what is your age?");

  console.log(`Your name is ${name2} and you are ${age2} years old`);
}

sayMyName();

// Example 5 with numbers and default parameters
function add(num1=1, num2=1){
  console.log(`the addition between ${num1} and ${num2} = ${num1+num2}`);
  document.write(`the addition between ${num1} and ${num2} = ${num1+num2} <br>`);
}

add(10, 2);
add(57.6, 38.4);
add(1183.5, 2353.5);
add(55);
add();

/* CHALLENGE No.1
Challenge 1: Double the Number
Create a function called doubleNumber that takes one number as a parameter.
The function should return the number multiplied by 2.
Print the result when you call the function with different numbers.

Example:
doubleNumber(4); // Should print: 8
doubleNumber(10); // Should print: 20
*/

function doubleNumber(num){
  console.log(`The double of ${num} is ${num*2}`);
}

doubleNumber(8);
doubleNumber(4); // Should print: 8
doubleNumber(10); // Should print: 20


// Button click event
function login(){
  alert("You have successfully logged in!");
  console.log("executing login function");
}