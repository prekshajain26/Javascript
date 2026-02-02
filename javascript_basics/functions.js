//************ Method 1 to print something in a function
// function sayMyName(){
//     console.log("preksha");
//     console.log("jain");   
// }
// sayMyName()
//************************************************************************************* 
// ******* Method 2 to print something in a function
// function loginUser(username){
//     return `${username} is logged in`
// }
//console.log(loginUser("preksha"))
//console.log(loginUser()); // it will give undefined as we have not passed any value

//************************************************************************************* 
//so we can also do this

// function loginUser(username){
//     if (username===undefined){
//         console.log("please enter a name");
//         return
//     }

//     return `${username} is logged in`

// }
// console.log(loginUser())

//************************************************************************************* 
//we can also give default value to the parameter so that if dont pass any argument it will automativcally take default value

// function loginUser(username="pihu"){
//     return `${username} is logged in`
// }
// console.log(loginUser());

//************************************************************************************* 
// function shoppingCartPrice(...num){    // to take multiple values when we dont know the number of parametrs
//     return num
// }
// console.log(shoppingCartPrice(100,200,300,400));

//************************************************************************************* 
// function shoppingCartPrice(val1,val2,...num){    // 100 will be val1, 200 will be val2 and rest will be in num
//     return num
// }
// console.log(shoppingCartPrice(100,200,300,400)); 

//************************************************************************************* 
//creating object and passing it to a function
//  const user={
//     username:"preksha",
//     price:140
//  }
//  function handleObject(anyobject){
//     console.log(`the name is ${anyobject.username} and price is ${anyobject.price}`);
//  }
//  handleObject(user)

//*************************************************************************************
//it is not necessary to create object first , we can also create is at function calling time

// function handleObject(anyobject){
//     console.log(`the name is ${anyobject.username} and price is ${anyobject.price}`);
//  }
//  handleObject({
//     username:"pihu",
//     price:200
//  })

//*************************************************************************************
//passing array as parameter

// const myArray=[1,2,3,4]
// function myNewArray(arrvalue){
//     return arrvalue[3]
// }
// console.log(myNewArray(myArray));


//*******************************  SCOPE LEVEL AND MINI HOISTING ***************************************************

function one(){
    const username="preksha"

    function two(){
        const website="youtube"
        console.log(username);   //two can access variables of one but one cannot access variables of two
    }
    two()
}
one()