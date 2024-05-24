// for of

// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5,6]
// for (const number of arr) {
//     console.log(number);
// }
// *****************************
// const myFruits = ["Apple","Banana","Orange","Watermillon"]
// for (const fruits of myFruits) {
//      console.log(`My favorites fruits ${fruits} and length is ${fruits.length}`);
    // console.log(`My favorites fruits ${fruits.length}`);
// }
// *****************************

// *****************************
// const myworld = "Hello myworld"
// for (const world of myworld) {
//     // console.log(world);
//     console.log(`Eacha charactor ${world} `);
// }
// MAPS-------------------

const map1 = new Map()
map1.set('IN' , "India")
map1.set('USA' , "United State of America")
map1.set('FR' , "France")
// console.log(map1);


for (const [key , value] of map1) {
    //console.log(key ,':-',value);
}
//  *************************************
//  const myObject = {
//     'game1' : "NFS",
//     'game2' : "Spiderman"
//  } 
//for (const [gmame , value] of myObject) {
  //  console.log(gmame);
  //console.log(gmame ,':-',value);
//}
