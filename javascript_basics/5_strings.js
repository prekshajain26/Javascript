// const name="preksha"
// const age=22
// console.log(`My name is ${name} and my age is ${age}`);   //strings concat method latest 

const gameName=new String("preksha-jain-kartik-jangid")
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.replace("jain","kartik"));
// const str1="      kartik      "
// console.log(str1);
// console.log(str1.trim());
// console.log(gameName.split("-"));
// console.log(gameName.charAt(4))

//  const anotherstr=gameName.substring(0,4)         //substring doesnt take negative index 
//  console.log(anotherstr);
 
const newstr=gameName.slice(-1,6)                //slice takes negative index which means starts from reverse
console.log(newstr);




