console.log("working...");

// // in order to use a particular line of code again and agian we can allocate them into a function ,which can then be called agian and again as required,this prevents us to write same code agin.


// // Functions - In order to execute a particular lines of code repetitively, we can allocate them into a function, which can then be called again and again as required. This prevents us writing a piece of code mulitple times. 

// //function definition from lines 6-8
// //we need to have n no of parameters for n number of arguments passed while calling the functions, so parameters catch the arguments in the sequence they are passed
// function multiply(parameter1, parameter2){
//     console.log("Inside multiply function");
//     //the function body can have more than one line of code.
// }

// //function calling on line 11
// multiply(arg1,arg2);//name of a function followed by open and close parenthesis.
// //while we call a function we pass arguments inside the parenthesis, if we have to pass any values otherwise not necessary to pass arguments. The arguments passed can be one or many separated by commas.


// // arrow function
// const addition = (parameter1,parameter2) => {
// console.log("i am in arrow function");
// }
//  addition(arg1,arg2);

// //  function expression
// const subtraction = function{
//     console.log("i am in subtraction function");
    
// }
// subtraction();


function sayhi(){
    console.log("hi");
    console.log("hi");
    console.log("hi");
    let a=2;
    let b=3;
    let result = a+b;
    console.log(result);
}

sayhi();

function addition(num1,num2){
    let result = num1+num2 ;
    console.log(result);
}

addition(3,4);

function multiplication(num1,num2){
    let result = num1 * num2;
    return result;
}

console.log(multiplication(10,7));

let multi = multiplication(7,7);
console.log(multi);


let i = 5;
function one(){
    console.log(i);
    two();
    function two(){
        console.log(i)
    }
}
one();


let p=2;
let q=3;
let r=4;

console.log(p);
console.log(q);
console.log(r);

{
    console.log(p);
console.log(q);
console.log(r);

}
// next concept
{
    let p=2;
let q=3;
let r=4;
}
console.log(p);
console.log(q);
console.log(r);