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

// const regularObj={
//     id:123,
//     username:{
//         fullname:{
//             firstname:"preksha",
//             lastname:"jain",


//         }
   
//     }
// }

// console.log(regularObj.username.fullname.firstname);


//*******************   combining objects ***********************

// const obj3={1:"p",2:"k"}
// const obj4={3:"k",4:"p"}
//const combineobj=Object.assign({},obj3,obj4)        // not necessary to give curly braces inside brackets but it is a good practice
//console.log(combineobj)

//another method to combine bjects is to spread them just like in arrays
//  const combineobj={...obj3,...obj4}
//  console.log(combineobj)

 //***********************  array of objects **************************

//  const users=[
//     {
//         id:1,
//         name:"preksha"
//     },
//     {
//         id:2,
//         name:"palak"
//     }

//  ]
//  console.log(users[0].name)

// ****************** some methods *****************************

// const tinderUser={
//     id:1234,
//     email:"preksha@1234",
//     name:"preksha"
// }

//console.log(Object.keys(tinderUser)) // using keys method on object to get all the keys
//console.log(Object.values(tinderUser))  //similarly to get values

//************* destructuring of objects *************

// const course={
//     coursename:"javascript",
//     courseprice:1400,
//     courseinstructor:"preksha"
// }
// const {courseinstructor}=course
// console.log(courseinstructor)  // with this we need not to print course.courseinstructor again and again
//const{courseinstructor:inst}=course // we can also give shortname to this 

// api format in json format

// {
//     "name":"preksha",
//     "id":123,                          // in objects form
//     "city":"jaipur"
// }

// [
//  {},
//  {}           // in array form that contains objects
// ]
