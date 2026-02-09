// ********************************    TYPE COERCION   ****************************************
// console.log("1"+1)
 /* it will give 11 because when we giving one string value and adding it with a
number so our addition sign will convert into concatenation sign and will give 11 because + sign
has two meanings in coding */

// console.log("1"-1)
 /* it will give 0 only because minus has only one meaning that is to substract 
so if we are giving one string value it will convert that string into number and then do substraction */

// console.log("1"*1) 
// console.log("1"/1)
// same concept of minus will be applied to multiplication and division
 

//accept and print the number -- prompt()
//prompt is a function and it returns output as a string 
// let age=prompt("enter your age");
// console.log(age)
// so to convert into number let age=Number(prompt("enter your age")); 

// ******************************** SWAPPING USING 3 METHODS **********************************

// ***************** 1st Method - using third variable
/* let a=10;
let b=20;
let temp;
console.log(`Before swapping value of a is ${a} and b is ${b}`)
temp=a;
a=b;
b=temp;
console.log(`After swapping value of a is ${a} and b is ${b}`) */

//***************** */ 2nd Method -- without taking extra variable
// let a=10;
// let b=20;
/*a=a+b
b=a-b
a=a-b
console.log(`value of a and b after swapping are ${a} and ${b}`); */

//******************* */ 3rd METHOD
// let a=10;
// let b=20;
// [a,b]=[b,a];
// console.log(a,b);

let a=11 , b=22;
let c= a+b + a++ + b++ + ++a + ++b;      // 33 + 11 + 22 + 13 + 24 =  103
console.log("value of a is " +a);
console.log("value of b is " +b);
console.log("value of c is " +c);


//circumstance of a circle
let r=12;
console.log((2*Math.PI*r).toFixed(2)); // fixed will fix the limit of numbers after points


// *****************************  conditonal operations *************************************


//voters eligibility 
/*
let age=Number(prompt("what is your age"));
if(isNaN(age)){             // it will check if user has entered string or number, isNaN is a function
    console.log("wrong input"); 
}
else if(age>=18){
    console.log("you can vote");
}
else{
    console.log("you cannot vote")
}
    */

// discount
/*
let amount=Number(prompt("enter amount"));
let dis=0
if(amount>0 && amount<=5000){
    dis=0;
}elseif(amount>5000 && amount<=7000){
    dis=5;
}elseif(amount>7000 && amount<=9000){
    dis=10
}elseif(amount>9000){
    dis=20;
}
console.log(amount-Math.floor((dis*amount)/100)); // no neeed to print it after every statement
*/

// electricity bill
/*
unit               price
upto 100         rs 4/unit
101-200          rs 6/unit
201-400          rs 8/unit
more than 400    rs 13/unit

let unit=Number(prompt("enter electricity unit"))
let amount=0;
if(unit>400){
amount=(unit-400)*13
unit=400
}
if(unit>200 && unit<=400){
amount+= (unit-200)*8
unit=200
}
if(unit>100 && unit<=200){
amount+= (unit-100)*6
unit=100
}
amount+= unit*4;
console.log(amount);
*/

//*************************** INR DENOMINATION ******************
