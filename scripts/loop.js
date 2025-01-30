// document.write(`
// <p> 2 X 0 = 0</p>
// <p> 2 X 1 = 2</p>
// <p> 2 X 2 = 4</p>
// <p> 2 X 3 = 6</p>
// <p> 2 X 4 = 8</p>
// <p> 2 X 5 = 10</p>
// <p> 2 X 6 = 12</p>
// <p> 2 X 7 = 14</p>
// <p> 2 X 8 = 16</p>
// <p> 2 X 9 = 18</p>
// <p> 2 X 10 = 20</p>
// `);

// for(let i=0;i<=10;i++){
//     document.write(`<li> 2 x ${i} = ${i*2} </li>`);
// }

//Challenge 1: 
// create a function that get a num from the prompt 
// and displays on the console the multiplication table

function multTable(){
    // get the num from the prompt
    let num = Number(prompt("Enter the number"));
    let result =0;
    document.write(`<h3> Table of ${num} </h3>`)
    //loop
    for(let i=0;i<=10;i++){
        //display the result (template string)
        result = num*i;
        document.write(`<li> ${num} x ${i} = ${result} </li>`);
    }
}

//challenge 2: 
// 1. create the function challenge()
// 2. display the numbers from 1 to 100. (loop)
// 3. display " I found it " instead of the number 50. (if==50)

function challenge(){
    for(let i=1;i<=100;i++){
        if(i==50){ // Are you the 50?
            //true
            console.log("I found it!");
        }else{
            //false
            console.log(i);
        }

    }
}

//Arrays
let myArray = [3,2,4,5,0];
let myArray2 = ["Samantha",true,10.6,7];

console.log(myArray[3]);//5
console.table(myArray2);

myArray2[0] = "James";
console.table(myArray2);

let students = ["Ed","Joseph","Gabriel","Robert","Roland","Justin","Kyle","Koiree","James","Cassius"];
let ages = [31,26,25,28,29,30,31,28,32,33];


for(let i=0;i<students.length;i++){
    document.getElementById("studentList").innerHTML+=`
    <div class="student">  
        <p>${students[i]} </p>
        <p>${ages[i]}  </p>
    </div>
    `;
}

