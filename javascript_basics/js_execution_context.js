// JAVASCRIPT EXECUTION CONTEXT -- means how the js will do the execution of your js files

/* to run the files js divides it into two phases
now when we give file to js for execution  compulsorily it creates GLOBAL EXECUTION CONTEXT and 
it is put inside a variable which is called THIS 
SO,
1) is GLOBAL EXECUTION CONTEXT
2) is FUNCTION/FUNCTIONAL EXECUTION CONTEXT

Phases in which the file is executed are -
1) MEMORY CREATION PHASE (OR CREATION PHASE) - only it allocates space to variables 
2) EXECUTION PHASE -in this phase execution is done 

let val1=10
let val2=5
function addNum(num1,num2){
let total=num1+num2
return total
}
let result1=addNum(val1,val2)
let result2 addNum(10,2)


Now the execution of this code takes place like this--
1) Global execution context will be created and assigned to THIS 

2) Then in  MEMORY PHASE  the memory space will be allocated to all the variables 
eg in context to the above code
val1 = undefined
val2 = undefined
addNum = defintion
result1 = undefined
result2 = undefined

3) Execution Phase 
val1 = 10
val2 = 5
addNum = now when addNum is called it will again create a space with new variable environment + execution thread
and for addNum again memory phase and execution phase will run.so for addNum 
in memory phase val1 = undefined , val2 = undefined and total = undefined
Excecution phase num1=10, num2=5 , total=15 and this total will be returned to global execution phase
after this the new execution context (addNum) will be deleted the work is completed.
Now again addNum is called with different values so again new execution context will be created 
and two phases will again be executed 
*/

// CALL STACK 