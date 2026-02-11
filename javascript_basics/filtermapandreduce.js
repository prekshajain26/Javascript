// continuation to high order array loops

/* for each loop doesnt return any value

const myCoding=["js","py","cpp","c"]
const value=myCoding.forEach((item)=>{
    //console.log(item); // this will give undefined
    //return item        // this also gives undefined and return nothing
})
console.log(value) // only this will give values of the array
*/

//***********************        FILTER             *******************
// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>num>4)  here we are not using block scope so return keyworrd is not necessary
// console.log(newNums)

/* const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((nums)=>{
    return nums  >4  // if we are using block scope so putting return keyword is necessary
})
console.log(newNums) */

// if we do this using for each loop instaed of filter 
const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)
    
