// console.log("Variables");
// // keyword nameVar = value; 
// // var, let , const

// //string
// var firstName = "Samantha"; 
// var lastName = "Jimenez";

// //numerical values
// let myAge=35;
// let myHeight = 169;

// //boolean (true / false)
// let isStudent = false;

// // display the values on the console
// console.log("My name is: " + firstName + ", I am " + myAge + " years old, my size is " + myHeight);
// // Use concatenation 
// // My name is yourName, I am myAge years old, my size is myHeight

// // Arithmetic operations + - / *

// let num1 = 10;
// let num2 = 2;

// let sum = num1 + num2;
// let sub = num1 - num2;
// let mul = num1 * num2;
// let div = num1/num2;

// console.log("The sum is: " + sum);
// console.log("The sub is: " + sub);
// console.log("The mul is: " + mul);
// console.log("The div is: " + div);

// // challenge 1
// let area=0;
// const pi = 3.1416;
// let radius = prompt("Enter the radius: ");

// // a = pi * r * r
// area = pi * radius * radius;

// console.log("The area of a circle with a radius of " + radius + " value is the " + area);

// // challenge #2
// let integerNumber;

// integerNumber=1625;
// console.log("The value of integerNumer is " + integerNumber);
// integerNumber=375;

// alert(integerNumber + 125);

// //challenge #3

// myAge = prompt("Enter your age: ");

// alert("Thank you for your answer.");
// alert("You are " + myAge + " years old.");

// difference between variable and constant

//definition of variable
let aVariable;

//assigning a value
aVariable=20;

// define and assing the value in the same line
let otherVariable = 10;

console.log(aVariable,otherVariable);

aVariable=50;
otherVariable=40;

console.log(aVariable,otherVariable);

const weekDays = 7;
console.log(weekDays);

// Error:  the constant is always the same.
// weekDays=5;
// console.log(weekDays);

function test(){
    document.getElementById("total").innerHTML="Something";
}
