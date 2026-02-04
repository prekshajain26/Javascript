// Immediately invoked function expression (IIFE)

/* generally a function is excetued when it is called with its name but iife function is the 
one that is executed immediately and there is a problem with global pollution sometimes so 
to remove the global  pollution of variables ,we use iffe function */

(function chai(){    //we can say it as a named iife
    console.log(`database connected`)
}) ();           /* when we are creating another iife function so putting semi colon 
                 here is compulsory othwerwise error will occur */

 // ******************************************************************************************

(function aurcode(){               
    console.log(`db two connected`); 
    
}) ();

 // ******************************************************************************************
 // we can also use arrow function here
( ()=> {                  // it is unnamed iife
    console.log(`connected`)
})();

 // ******************************************************************************************

// we can also pass parameter in iife 

( (name)=>{
    console.log(`user ${name} connected`)
})("preksha")


/*so the syntax of iife function is ()() -- in first paranthesis we write functionm defenition 
 and second is function execution 
 while writing two iife function put semicolon after the completion of one
 */

