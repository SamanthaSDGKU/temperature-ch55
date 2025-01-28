console.log("Conditionals");

// if-statement 
// if(condition){ // y/n question?
// code to be executed if the condition is true
//}

if(3<5){
    console.log("This is true");
}

let student1 = 45;
let student2 = 45;

if(student1==student2){
    console.log("The values are the same");
}

// if-else statement
// if(condition){ // y/n question?
// code to be executed if the condition is true
//}else{
// code to be executed if the condition is false
//}

let isTrue = false;

if(isTrue){
    console.log("Yes");
}else{
    console.log("No");
}

//Challenge 1: 
// check if the age is greater than 21
// T: display "you are an adult" 
// F: display "you are underage"

let age=5;

if(age>=21){
    console.log("you are an adult");
}else{
    console.log("you are underage");
}

// if-else statement
// if(condition1){ // y/n question?
// code to be executed if the condition1 is true
//}else if(condition2){
// code to be executed if the condition2 is true
//}else{
// code to be executed if conditions are false
//}

age=67;

if(age<13){
    console.log("you are a child");
}else if(age<21){
    console.log("you are a teenager");
}else if(age<64){
    console.log("you are an adult");
}else{
    console.log("you are a senior");
}

//Challenge 2: Movie ticket price calculator

function ticketCalculator(){
    //your code should be here
    let age = prompt("Enter the age");
    let price=0;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10;
    }
    return "Your ticket price is: $" + price;
}

function weatherOutfit(){
    let tmp = prompt("Enter the temperature");
    let outfit;
    let p = document.getElementById("weather");
    p.classList.remove("hot","cold","normal");
    
    if(tmp<15){
        p.classList.add("cold");
        outfit="Jacket"; 
    }else if(tmp<25){
        outfit="sweater";
        p.classList.add("normal");
    }else{
        outfit="t-shirt"; 
        p.classList.add("hot");
    }

    p.innerHTML="You should wear : " + outfit;
}
