//Immediately Invoked function expressions(IIFE)

// function chai(){
//     console.log(`DBCONNECTED`);
// }

// chai();
// **************************************
// (function chai(){
//     console.log(`DBCONNECTED`);
// }());

// ()-function defination
// ()-execution
// **************************************
// (function chai(){
    // named iife chai()
//     console.log(`DBCONNECTED Two`);
// })();
// **************************************
// (() => {
//     console.log(`DBCONNECTED Three`);
// })();
// **************************************
( (name) => {
console.log(`DB CONNECTED FOUR ${name}`);
})('hitesh')
