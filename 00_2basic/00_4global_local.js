// note:
// Q1-difference between global & local scope?
//- Javascript defines variable of local scope & global scope
// - variables with global scope are available from all other scope inside javascript Code,
// - variables with local scope are availlable  only within specific local context ad area  
// created keyword such as var let and const

// let a = 10;
// const b = 20;
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++


//  var c= 300
let a = 300
if(true){
    let a = 10;
    console.log("INNER:", a);
    const b = 20;
    // var c = 30  
}

console.log(a);
// console.log(b);
// console.log(c);

