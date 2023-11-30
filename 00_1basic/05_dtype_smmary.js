// primitive data types

// 7 types :string, Number,Boolean,Null, Undefined,Symbol,Bigint



// Reference (Non Primitive data types)
// Arry, Object, Function

const score =100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNum = 3256543576654356754n


// Reference (Non Primitive data types)
// Arry, Object, Function

const heros = ["Shubman","VrtBhi","DonSir"];
let myObj = {
    name:"hitesh",
    age:22,
}
// function


 const myFunction = function(){
    console.log("Hello World");
 }

//  console.log(typeof bigNum);
//  console.log(typeof outsideTemp);
// console.log(typeof scorevalue);
console.log(typeof myFunction);
