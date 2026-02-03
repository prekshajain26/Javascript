// const user={
//     username:"preksha",
//     price:999,
//     welcomeMessage:function(){
//       console.log(`${this.username}, welcome to this website`);   //this keyword is used to give current context
//       //console.log(this);      //here it will give current context
//     }
// }
// user.welcomeMessage()
// user.username="pihu"
// user.welcomeMessage()

//console.log(this); //but if we give this outside it will give empty paranthesis which means empty object
 
// ********************************************************************************************

// function chai(){
//   let username="preksha"        
//   console.log(this.username)      // this works with object not with functions
// }
// chai()

// const chai=function(){  // similarly if we assign this function to a variable then also it will give undefined
//   let username="preksha" 
//   console.log(this.username)
// }
// chai()

// ********************************** ARROW FUNCTION ********************************************************

// const chai= () => {           //this is arrow function
//   let username="preksha"
//   console.log(this);
  
// }
// chai()

//syntax of arrow function
// () => {}

// const addTwo=(num1,num2)=>{
//   return num1+num2
// }  

// console.log(addTwo(2,2));

//there is another way to create this that is implicit return
// const addTwo=(num1,num2)=>num1+num2
// console.log(addTwo(2,2))
//or this 
// const addTwo=(num1,num2)=>(num1+num2) //if we not using curly braces there is no need to write return keyword 
// console.log(addTwo(2,2))

const user=(num1,num2)=>({username:"preksha"})    //passing object should be wrapped in the paranthesis
console.log(user(3,4))