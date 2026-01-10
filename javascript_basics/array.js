const myArr=[1,4,"preksha",10.4,"true"]
//console.log(myArr);

const newarr=myArr.join()
// console.log(newarr);
// console.log(typeof newarr);
// console.log(myArr.push(7));


// console.log(myArr.pop())
// console.log(myArr);
//console.log(myArr.includes(4));
// myArr.unshift(9)

// console.log(myArr.shift())
// console.log(myArr);
// console.log(myArr.shift());
// console.log(myArr);

// console.log("A",myArr);
// const myn1=myArr.slice(1,3)      //slice does'nt gives the last item from the range given and gives the entire array elements 
// console.log(myn1)
// console.log("B",myArr)
// const myn2=myArr.splice(1,3)      //splice gives third index also and removes the splice items from the array and gives the left elements also.
// console.log(myn2)
// console.log("C",myArr);


const names=["preksha","kartik","rahul","dheeraj"]
//console.log(names)
const sirnames=["jain","jangid","sharma","khandelwal"]
//console.log(sirnames);
const fullname=[...names, ...sirnames]                //do concatatenation of arrays
//console.log(fullname);

//console.log(names.concat(sirnames));

const another_array=[1,2,3,[4,5],[6,7,[4,9,6]]]
//console.log(another_array.flat(Infinity))

//console.log(Array.from("preksha")); 
//console.log(Array.isArray("preksha"))
let score1=100
let score2=200
let score3=300
let score4=400
//console.log(Array.of(score1,score2,score3,score4))
