//single term object
//create object
// object literial

//const jsuser = {} //object
 const mysym = Symbol("key1")
const jsuser = {
    firstname : "hitesh",
    [mysym] : "mykey1",
    lastname : "choudhouary",
    emailId : "hitesh@gmail.com",
    location : "jaipur",
    isloggedin : false,
    lastloggedin : ["monday","saturaday"]


}
jsuser.greeting = function(){
    console.log("hello js user");
}
jsuser.greetingTwo = function(){
    console.log(`hello js user,${this.firstname}`);
}
// jsuser.emailId = "hiteshmicro@gmail.com"
// Object.freeze(jsuser);
// jsuser.emailId = "hiteshmm@gmail.com"
//console.log(jsuser.firstname);
//console.log(jsuser["firstname"]);
//console.log(jsuser.mysym);
//console.log( typeof jsuser.mysym);
//console.log(jsuser);
//console.log(jsuser.emailId);
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

