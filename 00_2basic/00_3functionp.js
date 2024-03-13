// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");

// function myname(){
//     console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");
// }
// myname()

function addTwonum(num1,num2){
    console.log(num1+num2)
}
//addTwonum(3,4)
//addTwonum(3,"4")
//addTwonum(3,"a")
//addTwonum(3,null)
// ------------------------------------------------
// function addTwonum(num1,num2){
//     console.log(num1+num2)
    
// }
// const result = addTwonum(3,5);
//console.log("Result:",result);
//-----------------------------------------------
//function addTwonum(num1,num2){
//let result = num1 + num2;
//console.log("hitesh"); retun
  //  return result
   // console.log("hitesh"); non return valur bcz return before
  // return num1 + num2
//}
//const result =addTwonum(3,8)
// console.log(result);
// --------------------------------
// function userlog(usermsg){
//     return `${usermsg} just logged in`



// }
//console.log(userlog("madhu"));
//console.log(userlog(""));
//console.log(userlog());
//------------------------check-----------------
function userlog(usermsg = "sammy"){
    // if(usermsg === undefined){
    //     console.log("please enter logged");
    //     return
    // }
    if(!usermsg){
        console.log("please enter user");
        return
    }
    return `${usermsg} just logged in`



}
console.log(userlog());