//this is single term

//const tinderuser = new Object()
//const tinderuser = {}
const tinderuser = {}
tinderuser.name = "hitesh",
tinderuser.location = "jaipur",
tinderuser.id = "1234",
tinderuser.isloggedin = false

//console.log(tinderuser);

//Object inside Object
const regularUser = {
    emilid:"hitesh@gmail.com",
    fullname :{
        userFullname:{
            firstname : "hitesh",
            lastname : "choudhary"
        }

    }
}
//console.log(regularUser);
//console.log(regularUser.fullname.userFullname.firstname);
//----------------Object combine----------------

const obj1 = {one:"apple",two:"orange",three:"mango"}
const obj2 = {four:"patato",five:"tamato",six:"onion"}
const obj4 = {seven:"gupchup",eight:"chat",nine:"momo"}
//const obj3 = {...obj1,...obj2,...obj4}
//const obj3 = Object.assign({},obj1,obj2,obj4)
//const obj3 = {obj1,obj2,obj4}
//console.log(obj1,obj2);
//console.log(obj3);

//----------------array of object-------------------
const user = [
    {
        id :"2",
        emailid:"hitesh1@gmail.com"
    },
    {
        id :"3",
        emailid:"hitesh2@gmail.com"
    },
    {
        id :"4",
        emailid:"hitesh3@gmail.com"
    }
]
//user[1].emailid
//console.log(tinderuser);
//console.log(Object.keys(tinderuser));
//console.log(Object.values(tinderuser));
//console.log(Object.entries(tinderuser));

//console.log(tinderuser.hasOwnProperty('isloggedin'));
//console.log(tinderuser.hasOwnProperty('islogged'));
console.log(tinderuser.isPrototypeOf('name'));
