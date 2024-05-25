//reduce
const myNum = [1,2,3]
 
// const myTotal = myNum.reduce(function (acc , currvl) {
// console.log(`acc : ${acc} and currvl : ${currvl}`);
    // return acc + currvl
// },0)
// console.log(myTotal);

// const myTotal = myNum.reduce((acc,curval) => {
//  return acc + curval

// },0)
// console.log(myTotal);
// const  myTotal  = myNum.reduce((acc,curval) => acc + curval,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName:"Js Course",
        price:2999
    },
    {
        itemName:"phython Course",
        price:999
    },
    {
        itemName:"mob dev Course",
        price:5999
    },
    {
        itemName:"Data Science Course",
        price:12999
    },
]

const shopping = shoppingCart.reduce((acc , items)=>  items.price + acc,0)
console.log(shopping);