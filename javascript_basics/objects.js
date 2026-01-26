// making objects through object literals


// const mySym=Symbol("key1")
// const jsUser={                               //this is object literal
//     name:"preksha",
//     age:21,                                   
//     email:"preksha@google.com",
//     location:"jaipur",
//     lastloggedin:["monday","saturday"],
//     [mySym]:"mykey1"
// }
//  console.log(jsUser.name)
//  console.log(jsUser["name"])
//  console.log(jsUser["email"])
// jsUser.email="preksha26@gmail.com"
//console.log(jsUser.email);
//Object.freeze(jsUser)     //freeze the user so that no changes can be made
//jsUser.email="preksha26@microsoft.com"
//console.log(jsUser.email)

//console.log("the JS user is ,${this.name}")
// jsUser.greetings=function(){
//     console.log("hello JS user");
// }
//console.log(jsUser.greetings())

// jsUser.greetings2=function(){
//     console.log(`the JS user is ${this.name} `);          

// }
// console.log(jsUser.greetings2());


//  ***********  singleton objeects   ********************

// const obj1=new Object()
// console.log(obj1)

//*************  non singleton  ****************

// const obj2={}     
// obj2.id="123"
// obj2.name="preksha"
// obj2.email="prekshapihu2003@gmail.com"
// console.log(obj2.name)


//creating objects inside objects 
const regularObj={
    id:123,
    username:{
        fullname:{
            firstname:"preksha",
            lastname:"jain",


        }
   
    }
}

console.log(regularObj.username.fullname.firstname);
