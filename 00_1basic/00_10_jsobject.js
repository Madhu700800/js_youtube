//singleton
Object.create

//object literials
const mysmob  = Symbol("key1")
const jsuser = {
    name:"hitesh",
    "full name": "hitesh Choudhoury",
    [mysmob]: "mykey1",
    emailId:"hitesh@gmail.com",
    location:"Jaipur",
    isLogedIn:false,
    lastLogin:["sunday","monday"]
}
// change email
jsuser.emailId = "hitesh@chatgpt.com"
//Object.freeze(jsuser)
jsuser.emailId = "hitesh@microsoft.com"
//function
jsuser.greeting = function(){
    console.log("Hello js User");
}

 jsuser.greetingTwo = function(){
    console.log('hello js User,${this.name}');
 }

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

//console.log(jsuser.name);
//console.log(jsuser["full name"]);
//console.log(jsuser.emailId);
//console.log(jsuser["emailId"]);
//console.log(jsuser[mysmob]);
//console.log(jsuser);
