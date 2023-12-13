//Stack used primitive datatypes (variable under jo decler hotai hai ek copy milta hai)
//Heap used nom-primitive datatypes(variable ke under jo declar hoati he unka reference miltahai jo ki original value hota hai)

//Stack

let myweb = "Madhupriya.com"
let myweb1 = myweb
myweb1 = "seena.com"

console.log(myweb);
console.log(myweb1);

//heap

let mydetls = {
    myname: "Madhu",
    age : 28

}
let owndetails = mydetls
owndetails.myname = "DollonMadhu.com"
console.log(mydetls.myname);
console.log(owndetails.myname);