// const userEmail = "h@hitesh.ai";
// if(userEmail){
//     console.log("Got user email");
// }else{
// console.log("Dont have user email");
// }
// **********************************************
// const userEmail = "";
// if(userEmail){
//     console.log("Got user email");
// }else{
// console.log("Dont have user email");
// }
// **********************************************
// const userEmail = [];
// if(userEmail){
//     console.log("Got user email");
// }else{
// console.log("Dont have user email");
// }

//Falsy value
//false ,0,-0,BigInt 0n,"", null ,Undefined,Nan
//Truthy
//"0",'false'," space",[],{}, function(){}
// ********************************************
// const userEmail = [];
// if(userEmail.length === 0){
//     console.log("Array is empty");
// }
//check object empty
// -------------------------------
// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
// }

// check -browser-inspect
// false == 0
// false == ""
// 0 == ""

// ***************************************************
// Nullish coalescing Operator(??):null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 30 ?? 25
//console.log(val1);
//Terniary 0perator
//condition ? true : false

const iceTeaPrice = 100
//iceTeaPrice >= 80 ? console.log("less than 80"):console.log("more than 80");
iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80");


