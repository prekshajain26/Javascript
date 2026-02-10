// *****************  for of loop  -- these loops are basically used with array

// let arr=[1,2,3,4]
// for (const element of arr) {
//     console.log(element);
        
// }
// const greetings="hello"
// for (const greet of greetings) {
//     console.log(greet); 
// }

// ********************  Maps -- another datatype **********************************
// maps are objects in js that holds key value pairs and has unique values

// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"united states of america")
// map.set('DB',"Dubai")
// console.log(map);
// for (const [key,value] of map) {
//     console.log(key,':-',value);
    
// }
//maps are iteratable biuity we cannot iterate objects through this method as we have done with maps
// let myobj={
//     'name':"preksha",
//     'age':22,
//     'class':"MCA"
// }
// for (const element of myobj) {
//     console.log(element);   
// }

// *******************************************************************************************
// as forof loop is not working with objects so we have forin loop for that
// const myobj={
//     js:"javascript",
//     cpp:"c plus plus",
//     py:"python"
// }
// for in loop is basically used with objects
// for (const key in myobj) {
//     console.log(`${key} shortcut is for ${myobj[key]}`);       
// }

// ************************* using for in loop in array **************************

// const prog=["js","py","cpp","c"]
// for(const key in prog){
//     console.log(prog[key])
// }

// we cannot use forin loop with maps as it is not iteratable

// *******************************************************************************************
//                             for each loop
 //const coding=["cpp","java","python","ruby"]
// coding.forEach(function (val){
//     console.log(val);
    
// })
// same with arrow function 
//   coding.forEach((item) => {
//     console.log(item); 
//   })

// ***********************  foreach in array of objects  *******************************

const myCoding=[
{
    langName:"javascript",
    langFile:"js"
},
{
    langName:"python",
    langFile:"py"
}
]
myCoding.forEach((item)=>{
    console.log(item.langFile)
})

