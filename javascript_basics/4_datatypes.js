// const id=Symbol("1234")

// const friends=["preksha","kartik","rahul","dheeraj"];

// let myobj={
//     "name":"preksha",
//     "age":22,
// }
// console.log(typeof friends)
// console.log(typeof myobj)


// let func1=function(){
//     console.log("hello preksha")

// }
// console.log(typeof func1)

/* Primitive datatypes : number,string,symbol,undefined,null,boolean,BigInt

Reference type(non primitive): array([]),object({}),function  */



// *****************  Stack and Heap  ****************

//Stack(primitive datatype)

// let myname="prekshajain"
// let mynewname=myname
//  mynewname="pihu"
//  console.log(myname);
//  console.log(mynewname);

// Heap(non-primitive dataype)

let userone={
    name:"preksha",
    age:22
}

let usertwo=userone
usertwo.name="kartik"
console.log(userone.name);
console.log(usertwo.name);

