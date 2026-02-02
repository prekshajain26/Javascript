//************ Method 1 to print something in a function
// function sayMyName(){
//     console.log("preksha");
//     console.log("jain");   
// }
// sayMyName()

// ******* Method 2 to print something in a function
// function loginUser(username){
//     return `${username} is logged in`
// }
//console.log(loginUser("preksha"))
//console.log(loginUser()); // it will give undefined as we have not passed any value

//so we can also do this

// function loginUser(username){
//     if (username===undefined){
//         console.log("please enter a name");
//         return
//     }

//     return `${username} is logged in`

// }
// console.log(loginUser())

//we can also give default value to the parameter so that if dont pass any argument it will automativcally take default value

// function loginUser(username="pihu"){
//     return `${username} is logged in`
// }
// console.log(loginUser());

function shoppingCartPrice(...num){    // to take multiple values when we dont know the number of parametrs
    return num
}
console.log(shoppingCartPrice(100,200,300,400));
