const score=400                 //automatically considers it as a number
//console.log(typeof score); 

const balance=new Number(44)    //explicitly defining it as number
//console.log(typeof balance);

// console.log(balance.toString().length);  //here first we have converted numner to string and then we can use string functions on it.
// console.log(typeof balance )

// const num=123.8966
// console.log(num.toPrecision(5))

// const num2=1000000
// console.log(num2.toLocaleString("en-IN"));

let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDate=new Date(2025,1,4)
console.log(myCreatedDate.toDateString());



