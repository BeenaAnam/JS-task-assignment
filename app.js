//Q1.Variables and MAth Expression.
let x = 10;
let y = 5;
//sum
console.log("Sum of two variable x+y is",x+y);
//differance
console.log("Differance of variable x-y is" ,x-y);
//product
console.log("product of two variable x*y is",x*y);
//Quotient
console.log("Quotient of two variable x/y is",x/y);
//Q2:if...else Statements and Comparison Operators.

let age = prompt("Enter Your Age");
if(age>=18){
    console.log("You are an adult.");   
}
else{
    console.log( "You are a minor.");   
}
//Q3: Arrays and for Loops.
let fruits = ["Apple", "Banana","Cherry"]
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);  
}
//Q4: Concatenating Text Strings and Alerts.
let firstName = "Jhon";
let lastName ="Doe"
alert("Hello, " + firstName +" "+ lastName);
//Q5: Nested if Statements and Boolean Logic
let isAdmin = true;
let isLoggedIn = false;
if(isAdmin===true){
    if(isLoggedIn===false){
        console.log("Welcome, admin!");  
    }
}
